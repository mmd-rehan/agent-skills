# Finding the right jobs

## Sources, roughly in order of usefulness for candidates who need sponsorship

1. **Relocation and visa-sponsorship boards.** Sites that only list jobs with relocation or visa support (relocate.me and similar). The highest signal per application.
2. **Government licensed-sponsor registers.** For example the UK register of licensed sponsors, the Dutch IND list of recognised sponsors, and similar lists in other countries. Use them to check a company before applying, and to find companies whose own careers pages you can search.
3. **Company career pages and their ATS boards.** Many companies host jobs on Ashby, Greenhouse, Lever, Workable, Teamtailor or Recruitee. Searching those boards directly finds roles that never reach the big job sites.
4. **LinkedIn Jobs.** Biggest volume. Easy Apply is fast but capped daily, and the applicant pool is huge. Use "Date posted: past week" and sort by most recent so applications land early.
5. **Indeed and regional boards.** Good volume, more noise, more agencies.
6. **Recruitment agencies in the target country.** Useful when they specialise in placing international candidates. Many generic agencies will not consider anyone needing sponsorship.

If the candidate is not tied to a platform, switch sources when one is blocked, capped or full of noise. The goal is the job, not the platform.

## Search strings

Combine role, stack and sponsorship words, rotate through countries, and repeat the cycle. Examples (adapt to the candidate):
- `visa sponsorship <role> <country>`
- `<stack> developer <city> relocation`
- Country-specific visa terms: "skilled worker visa" (UK), "highly skilled migrant" or "kennismigrant" (Netherlands), "Blue Card" (EU), "482" or "subclass 482" (Australia), "LMIA" (Canada).
- `remote <role> worldwide` for genuinely global remote roles.

## Reading a posting: hard filters vs soft signals

**Usually hard filters (skip and log the reason):**
- "No visa sponsorship", "must already have the right to work in X", "must be based in X" with no relocation language.
- "Open to visa transfers" (common on US postings): means transferring an existing visa, not sponsoring a new one.
- Board badges like "requires work permit" can mean the candidate must already hold one. Read the actual form or text.
- Mandatory language the candidate does not speak at the stated level.
- Security clearance, citizenship-only, "EU passport holders only".
- Core stack the candidate has not used professionally (a primary language mismatch, not a nice-to-have).
- Seniority far off in either direction.
- Contract or freelance via payroll or staffing agencies when the candidate needs a sponsored permanent role. These usually require existing local work rights.

**Soft signals (apply and let the employer decide):**
- "Ideally based in X" or "preferably in Europe" without a hard rule.
- "Not a perfect match? Apply anyway."
- Benefits that mention relocation, expat support, visa or immigration help. A strong positive.
- Nice-to-have technologies the candidate lacks.

When unsure, apply and answer honestly. A clean "No, I would need sponsorship" costs nothing. A false "Yes" can cost the offer later.

## Duplicates and reposts

- Run `scripts/applog.py check "<company>" "<role>"` before every application.
- Agencies often repost the same role. If the description, stack and salary match a job already applied to, skip it as a duplicate.

## Red flags and scams

- Any request for money: "placement fee", "training programme", "secure your seat".
- "Congratulations, you are shortlisted" for something the candidate never applied to, with time pressure.
- Unsolicited freelance or crypto projects asking the candidate to clone a repo and run it, or install software for an "interview". This is a known malware pattern.
- Requests for passport, ID or bank details before any interview.
- Gig and AI-training marketplaces are legitimate, but they are not sponsored employment. Label them clearly.

Log these as "Suspicious" with the reason, and tell the candidate.

## The weekly review: levers that move the numbers

When the response rate is low after a few hundred applications, the problem is rarely volume. Common levers:
- **Target sponsors directly.** Filter by licensed-sponsor registers and relocation boards instead of generic searches.
- **Pick a lane.** A clear specialist angle (for example "Angular for aviation and travel") often beats a generalist CV.
- **Outreach.** A short message to the hiring manager or a recruiter for each top-choice application.
- **Fewer, better applications.** Full tailoring and a cover letter for top choices.
- **Alternative visa routes** the candidate can use without an employer first (job-seeker visas, talent visas, points-based routes). Mention them as options. The candidate decides.
- **Proof of work.** A portfolio, case studies or public repos linked on the CV.
- **Fix leaks.** If the same platform or step keeps failing (CAPTCHAs, accounts, uploads), stop wasting time there.
