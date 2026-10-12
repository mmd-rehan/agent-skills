#!/usr/bin/env python3
"""applog.py: workspace setup and application log for job-application-autopilot.

Standard library only. The log is a Markdown table so humans and agents can both read it.

Usage:
  applog.py init   <career-folder>
  applog.py check  --log LOG --company C --role R [--url U]
  applog.py add    --log LOG --company C --role R [--location L] [--source S]
                   [--cv FILE] [--status Applied] [--notes N] [--url U] [--date YYYY-MM-DD] [--force]
  applog.py status --log LOG --company C --role R --status S [--notes N]
  applog.py stats  --log LOG [--since YYYY-MM-DD]

LOG may be the log file or the career folder (then applications/application-log.md is used).
Exit codes: check returns 1 when a likely duplicate exists, add returns 1 when it refuses a duplicate.
"""
import argparse
import datetime as dt
import re
import shutil
import sys
from collections import Counter
from pathlib import Path

COLUMNS = ["Date", "Company", "Role", "Location", "Source", "CV", "Status", "Notes", "URL"]
HEADER = "| " + " | ".join(COLUMNS) + " |\n" + "|" + "---|" * len(COLUMNS) + "\n"
LOG_REL = Path("applications") / "application-log.md"
POSITIVE = {"interview", "offer", "action needed", "assessment", "call"}
COMPANY_SUFFIXES = r"\b(inc|ltd|limited|llc|gmbh|bv|b\.v|ag|sa|plc|group|corp|corporation|co|technologies|technology)\b"
STOP_WORDS = {"the", "a", "an", "and", "of", "for", "to", "in", "at", "with", "m", "f", "d", "x", "w", "remote", "hybrid"}


def log_path(p):
    p = Path(p).expanduser()
    return p / LOG_REL if p.is_dir() else p


def norm_company(s):
    s = s.lower()
    s = re.sub(r"\(.*?\)", " ", s)  # drop "(agency)", "(client: ...)"
    s = re.sub(COMPANY_SUFFIXES, " ", s)
    return re.sub(r"[^a-z0-9]+", "", s)


def role_tokens(s):
    return {t for t in re.findall(r"[a-z0-9.+#]+", s.lower()) if t not in STOP_WORDS}


def similar_role(a, b):
    ta, tb = role_tokens(a), role_tokens(b)
    if not ta or not tb:
        return False
    return len(ta & tb) / len(ta | tb) >= 0.6


def cell(s):
    return (s or "").replace("|", "/").replace("\n", " ").strip()


def read_rows(path):
    rows = []
    if not path.exists():
        return rows
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.startswith("|") or line.startswith("|---") or line.startswith("| Date |"):
            continue
        parts = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(parts) < len(COLUMNS):
            parts += [""] * (len(COLUMNS) - len(parts))
        rows.append(dict(zip(COLUMNS, parts[: len(COLUMNS)])))
    return rows


def ensure_log(path):
    if not path.exists():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("# Application Log\n\nOne row per job touched. Append as you go.\n\n" + HEADER, encoding="utf-8")


def find_dupes(rows, company, role, url=None):
    nc = norm_company(company)
    out = []
    for r in rows:
        if url and r["URL"] and r["URL"].rstrip("/") == url.rstrip("/"):
            out.append(r)
        elif nc and norm_company(r["Company"]) == nc and similar_role(r["Role"], role):
            out.append(r)
    return out


def cmd_init(a):
    root = Path(a.folder).expanduser()
    assets = Path(__file__).resolve().parent.parent / "assets"
    for d in ["inputs", "cvs", "applications"]:
        (root / d).mkdir(parents=True, exist_ok=True)
    for src, dst in [("master.template.md", "master.md"), ("answers.template.md", "answers.md"),
                     ("action-items.template.md", "applications/action-items.md")]:
        target = root / dst
        if not target.exists() and (assets / src).exists():
            shutil.copy(assets / src, target)
    ensure_log(root / LOG_REL)
    print(f"Workspace ready at {root}. Put career material in {root / 'inputs'}.")


def cmd_check(a):
    rows = read_rows(log_path(a.log))
    d = find_dupes(rows, a.company, a.role, a.url)
    if d:
        for r in d:
            print(f"DUPLICATE? {r['Date']} | {r['Company']} | {r['Role']} | {r['Status']}")
        return 1
    print("OK, no earlier entry for this company and role.")
    return 0


def cmd_add(a):
    path = log_path(a.log)
    ensure_log(path)
    rows = read_rows(path)
    d = find_dupes(rows, a.company, a.role, a.url)
    if d and not a.force:
        for r in d:
            print(f"REFUSED, likely duplicate: {r['Date']} | {r['Company']} | {r['Role']} | {r['Status']}")
        print("Use --force to log anyway (for example a status-only skip note).")
        return 1
    vals = [a.date or dt.date.today().isoformat(), a.company, a.role, a.location, a.source, a.cv, a.status, a.notes, a.url]
    with path.open("a", encoding="utf-8") as f:
        f.write("| " + " | ".join(cell(v) for v in vals) + " |\n")
    print(f"Logged: {a.company} | {a.role} | {a.status}")
    return 0


def cmd_status(a):
    path = log_path(a.log)
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    nc = norm_company(a.company)
    for i in range(len(lines) - 1, -1, -1):
        line = lines[i]
        if not line.startswith("|") or line.startswith("|---") or line.startswith("| Date |"):
            continue
        parts = [c.strip() for c in line.strip().strip("|").split("|")]
        parts += [""] * (len(COLUMNS) - len(parts))
        row = dict(zip(COLUMNS, parts[: len(COLUMNS)]))
        if norm_company(row["Company"]) == nc and similar_role(row["Role"], a.role):
            row["Status"] = a.status
            if a.notes:
                row["Notes"] = (row["Notes"] + "; " if row["Notes"] else "") + a.notes
            lines[i] = "| " + " | ".join(cell(row[c]) for c in COLUMNS) + " |\n"
            path.write_text("".join(lines), encoding="utf-8")
            print(f"Updated: {row['Company']} | {row['Role']} -> {a.status}")
            return 0
    print("No matching row found.")
    return 1


def cmd_stats(a):
    rows = read_rows(log_path(a.log))
    if a.since:
        rows = [r for r in rows if r["Date"] >= a.since]
    status = Counter(r["Status"].split(" ")[0].lower() if r["Status"] else "unknown" for r in rows)
    sent = [r for r in rows if r["Status"].lower().startswith(("applied", "rejected", "interview", "offer", "action", "unconfirmed"))]
    positive = [r for r in sent if any(p in r["Status"].lower() for p in POSITIVE)]
    rejected = [r for r in sent if r["Status"].lower().startswith("rejected")]
    print(f"Rows: {len(rows)}")
    print("By status: " + ", ".join(f"{k}={v}" for k, v in status.most_common()))
    print(f"Sent: {len(sent)} | Rejected: {len(rejected)} | Positive (interview/offer/action): {len(positive)}")
    if sent:
        print(f"Response rate (positive / sent): {100 * len(positive) / len(sent):.1f}%")
    for label, key in [("source", "Source"), ("CV", "CV")]:
        c = Counter(r[key] or "?" for r in sent)
        p = Counter(r[key] or "?" for r in positive)
        print(f"By {label}: " + ", ".join(f"{k}={v} (+{p.get(k, 0)})" for k, v in c.most_common(8)))
    skips = Counter(re.split(r"[.;,:(]", r["Notes"])[0].strip().lower()[:60] for r in rows if r["Status"].lower().startswith("skipped") and r["Notes"])
    if skips:
        print("Top skip reasons:")
        for k, v in skips.most_common(8):
            print(f"  {v} x {k}")
    waiting = [r for r in rows if r["Status"].lower().startswith(("needs", "queued"))]
    if waiting:
        print(f"Open handoffs / queued: {len(waiting)}")
        for r in waiting[:20]:
            print(f"  {r['Company']} | {r['Role']} | {r['Status']} | {r['Notes'][:80]}")
    return 0


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("init"); s.add_argument("folder"); s.set_defaults(fn=cmd_init)
    for name, fn in [("check", cmd_check), ("add", cmd_add), ("status", cmd_status)]:
        s = sub.add_parser(name)
        s.add_argument("--log", default=".")
        s.add_argument("--company", required=True)
        s.add_argument("--role", required=True)
        s.add_argument("--url", default="")
        s.add_argument("--notes", default="")
        if name == "add":
            for opt in ["location", "source", "cv", "date"]:
                s.add_argument(f"--{opt}", default="")
            s.add_argument("--status", default="Applied")
            s.add_argument("--force", action="store_true")
        if name == "status":
            s.add_argument("--status", required=True)
        s.set_defaults(fn=fn)
    s = sub.add_parser("stats"); s.add_argument("--log", default="."); s.add_argument("--since", default=""); s.set_defaults(fn=cmd_stats)
    a = p.parse_args()
    sys.exit(a.fn(a) or 0)


if __name__ == "__main__":
    main()
