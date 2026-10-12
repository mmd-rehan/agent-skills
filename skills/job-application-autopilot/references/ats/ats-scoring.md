# ATS Scoring Rubric

Use this rubric to score any resume against a given JD. Present the full breakdown to the user.

---

## Scoring Categories

### 1. Keyword Match Rate (30 points)

This is the single most important factor. Count the unique keywords from the JD and how many appear in the resume.

| Match Rate | Points |
|---|---|
| 90–100% of JD keywords present | 28–30 |
| 75–89% of JD keywords present | 22–27 |
| 60–74% of JD keywords present | 15–21 |
| 45–59% of JD keywords present | 8–14 |
| Below 45% | 0–7 |

**How to calculate**:
1. Extract all unique skills, tools, technologies, and role-specific phrases from the JD
2. Count how many appear at least once in the resume
3. Divide matched / total × 100

**Penalty**: −3 points if any "must-have" keyword from the JD is missing entirely.

---

### 2. Section Structure (20 points)

| Criteria | Points |
|---|---|
| All 5 required sections present (Header, Summary, Skills, Experience, Education) | 8 |
| Standard section header names used (not creative alternatives) | 4 |
| Reverse chronological order maintained | 3 |
| Professional Headline present | 3 |
| Certifications section present (if certs mentioned in JD) | 2 |

---

### 3. Job Title Alignment (15 points)

| Criteria | Points |
|---|---|
| Headline exactly mirrors JD title | 13–15 |
| Headline is a close variant (same function, minor wording difference) | 9–12 |
| Headline is in the same domain but not a direct match | 5–8 |
| Headline is unrelated or missing | 0–4 |

**Also score**: Current/most recent job title similarity to JD title (ATS compares these)
- Exact match: +3 bonus toward keyword score
- Close match: +1 bonus
- No match: no penalty (already reflected in keyword score)

---

### 4. Bullet Quality & Metrics (15 points)

| Criteria | Points |
|---|---|
| 75%+ of bullets start with an action verb | 4 |
| 50%+ of bullets contain a quantified metric (%, $, count, time) | 5 |
| Bullets are accomplishment-focused, not duty-focused | 4 |
| No bullet exceeds 2 lines | 2 |

**Penalty**: −2 points for each bullet that is purely a job duty with no outcome.

---

### 5. Formatting Compliance (10 points)

| Criteria | Points |
|---|---|
| Single-column layout | 3 |
| No tables, text boxes, or graphics | 3 |
| Standard font (Calibri, Arial, Georgia, Times New Roman) | 2 |
| Contact info in body (not header/footer) | 2 |

**Penalty**: −5 points for two-column layout (major ATS parsing failure risk)
**Penalty**: −3 points for text boxes containing key content

---

### 6. Certifications Match (5 points)

| Criteria | Points |
|---|---|
| All JD-mentioned certifications are present | 5 |
| Most JD certifications present | 3–4 |
| One or more JD certifications missing | 1–2 |
| No certifications section when JD requires them | 0 |

If the JD does not mention certifications: award 4 points by default (neutral).

---

### 7. Education Match (5 points)

| Criteria | Points |
|---|---|
| Degree level matches or exceeds JD requirement | 5 |
| Degree is in a relevant field | 3–4 (partial credit) |
| Degree is in an unrelated field but experience compensates | 2–3 |
| Degree is missing or below JD minimum | 0–1 |

---

## Score Interpretation

| Total Score | Interpretation | Action |
|---|---|---|
| **90–100** | ✅ Excellent — High likelihood of passing ATS | Human review likely; focus on cover letter |
| **80–89** | 🟡 Good — Will pass most ATS; some gaps remain | Add 3–5 missing keywords; fix 1–2 bullets |
| **70–79** | 🟠 Fair — May pass lenient ATS; risky for strict systems | Major keyword enrichment needed |
| **60–69** | 🔴 Poor — Likely to be filtered out | Requires significant rewrite |
| **<60** | ❌ Critical — Almost certain ATS rejection | Full rebuild recommended |

---

## Quick Improvement Priorities (if score < 90)

If the score falls short, address in this priority order:

1. **Keyword gaps** (biggest ROI) — add missing JD keywords to Core Competencies and Summary
2. **Job Title Alignment** — update headline to match JD title more closely
3. **Metric-less bullets** — add at least one number to each top-5 bullet
4. **Missing certifications** — list any relevant certs; add "In Progress" if studying
5. **Formatting issues** — convert multi-column to single-column immediately
6. **Section completeness** — add any missing required sections

---

## ATS Score Presentation Template

```
╔══════════════════════════════════════════════════╗
║           ATS COMPATIBILITY SCORE                ║
╠══════════════════════════════════════════════════╣
║  Keyword Match Rate       _____ / 30             ║
║  Section Structure        _____ / 20             ║
║  Job Title Alignment      _____ / 15             ║
║  Bullet Quality & Metrics _____ / 15             ║
║  Formatting Compliance    _____ / 10             ║
║  Certifications Match     _____ / 5              ║
║  Education Match          _____ / 5              ║
╠══════════════════════════════════════════════════╣
║  TOTAL SCORE              _____ / 100            ║
║  STATUS: [✅ PASS / 🟡 MARGINAL / 🔴 FAIL]       ║
╚══════════════════════════════════════════════════╝
```
