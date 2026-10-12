# Building master.md

master.md is the single source of truth about the candidate. Every CV, cover letter, form answer and outreach message is derived from it. If something is not in master.md, you do not say it.

## Step 1. Inventory the inputs folder

List every file in `inputs/` with its type and a one-line guess of what it is. Typical contents:

| Input | What to extract |
|---|---|
| Old CVs (several versions) | Roles, dates, bullets, skills. Older versions often hold achievements later trimmed. |
| LinkedIn "Save to PDF" export | Exact titles and dates as the public sees them. Recruiters compare CV and LinkedIn, so note mismatches. |
| Experience or reference letters | Official titles and dates. These win over the CV when they disagree. |
| Certificates | Exact certificate name, issuer, date, credential ID if shown (not personal ID numbers). |
| Portfolio, GitHub, project notes | Projects, tech used, links, measurable outcomes. |
| A free-form brain dump | Often the best source of real stories and numbers. Ask for one if inputs are thin. |
| Visa or immigration documents | Do not copy personal identifiers. Note only facts the candidate wants used, for example "holds a job-seeker visa for X until Y". |

Read PDFs and DOCX fully. For scanned documents, read the page images. If a file cannot be read, say so and ask for another format.

## Step 2. Extract into the template

Fill `assets/master.template.md`. Guidance per section:

- **Identity and contact.** Name as it appears on documents, preferred name, email and phone to use for applications, city and country of residence, nationality or nationalities, LinkedIn, GitHub, portfolio. If multiple emails or phones appear across files, ask which one to use and note that older ones are retired.
- **Work history.** Reverse chronological. For each role: official title, company, location, start and end month and year, employment type, team size, domain, tech used, and raw achievements. Keep gaps visible, do not hide them.
- **Skills table.** One row per skill: skill, category, years of professional use, last used, depth (Expert / Strong / Working / Familiar), evidence (which role). Compute years from role dates where the skill was actually used, not from the first time it was ever touched. This table answers "years of X" questions and must never be rounded up later.
- **Achievements bank.** Each achievement: what, how, measurable result, which role, and a confidence note if the number is the candidate's estimate. These become CV bullets and essay answers.
- **Stories bank.** 4 to 8 short STAR stories (situation, task, action, result) the candidate can be asked about: a hard bug, a migration, a conflict, a leadership moment, a failure and lesson, a performance win. Long-answer form questions and cover letters draw on these.
- **Education and certifications.** Degree, institution, country, year. Certifications with issuer and year.
- **Languages.** Language and honest level (native, C1, B2 and so on).
- **Work authorization.** Where they can already work, where they need sponsorship.
- **Positioning angles.** 2 to 4 honest angles (for example Frontend specialist, Full-Stack, Backend/Platform, Mobile) with which roles and skills support each.
- **Conflicts and open questions.** Every disagreement between sources and every missing fact forms will need.

## Step 3. Resolve, do not guess

Batch all conflicts and open questions into one message to the candidate. Typical questions:
- "Your CV says Senior Engineer at X from 2021, the experience letter says Software Engineer from March 2021. Which title should we use?"
- "How many years have you used React professionally? I count about 4 from your roles."
- "Notice period? Salary floor? Earliest start date? Languages and level?"

Write the answers back into master.md with the source "candidate, <date>".

## Step 4. Confirmation checkpoint

Show master.md (or a summary of it if it is long) and ask for explicit confirmation. Record the date of confirmation at the top of the file. When the candidate later corrects a fact, fix master.md first, then regenerate anything derived from it.

## Keeping it current

- New job, new certificate, new project: update master.md, then regenerate affected CVs.
- Contact details changed: update master.md and answers.md, then search the career folder for the old values (`grep -ri "<old email>"`) and update or regenerate every file that still has them.
- Keep the file factual and plain. It is a database for you, not a marketing document.
