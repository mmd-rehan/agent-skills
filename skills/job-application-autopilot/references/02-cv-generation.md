# Generating CVs and cover letters from master.md

The ATS rulebook lives in `references/ats/`:
- `ats-rules.md`: structure, section names, formatting that parsers can read. Read before writing any CV.
- `ats-scoring.md`: how to score a CV against a job description. Use for top-choice jobs.
- `industry-keywords.md`: keyword lists by industry for the skills section.
- `bullet-bank.md`: patterns for turning raw achievements into strong bullets.

## The variant strategy

Writing a fully custom CV for every application does not scale and drifts from the truth. Instead:

1. **Base variants (2 to 4).** One per positioning angle in master.md. Each variant reorders and reweights the same facts: the headline, summary, skills order and which bullets lead each role change. The facts do not.
2. **Light tailoring per application (default).** Pick the closest variant and change only the headline to mirror the posting's exact job title (when it truthfully fits). That alone measurably improves ATS title matching.
3. **Full tailoring (top choices only).** For jobs the candidate marks as top choices, run the full ATS process: extract the job description's keywords, gap-analyse, rewrite summary and skills order, pick the most relevant bullets, score with `ats-scoring.md`, and write a cover letter.

Name files so the log can reference them: `<Name>_CV_<Angle>.docx` for bases and `<Name>_CV_<Company>_<Role>.docx` for tailored ones.

## Country conventions (check, do not assume)

- UK, US, Ireland, Australia, Canada: no photo, no date of birth, no marital status. Usually 2 pages for senior roles.
- Germany, Austria, Switzerland: a photo and more detail are still common but optional. A short cover letter is often expected.
- Netherlands, Nordics: concise, English is fine for tech roles.
- Japan and some other markets may expect specific formats. If the posting asks for a particular format, follow it.

## Writing bullets

Pattern: action verb, what was done, how or with what, measurable result. Pull numbers only from the achievements bank. If no number exists, use a concrete scale signal that is true (number of users, devices, countries, team size) rather than inventing a percentage.

## Cover letters and "why us" answers

- 150 to 250 words unless the form asks for more.
- One paragraph on why this company or role (something specific from the posting or product), one on the strongest matching story from master.md, one line on logistics (visa sponsorship need, relocation, notice period) stated plainly and positively.
- Apply the candidate's writing-style rules from answers.md. Plain, specific and slightly informal usually reads more human than polished corporate prose.

## Output

- .docx is the primary format (most ATS parse it well). Also export a .pdf, since many forms only accept PDF. Use the docx and pdf skills if available.
- Single column, standard headings, no tables or text boxes for core content, no icons, contact details in the body (not the header area).
- After generating, open the file (or convert to text) and check it reads correctly top to bottom. That is how an ATS will see it.

## When master.md changes

Regenerate every base variant and note in the log which applications went out with the older version, in case an interviewer asks about something that has since changed.
