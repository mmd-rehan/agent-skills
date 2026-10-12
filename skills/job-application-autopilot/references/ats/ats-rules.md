# ATS Rules Reference

## How ATS Systems Work

Applicant Tracking Systems parse resumes into structured fields (name, contact, experience, education, skills) and then rank candidates by keyword match against the JD. They do NOT read resumes the way humans do.

### Top ATS Platforms (and their quirks)
| Platform | Used By | Key Quirk |
|---|---|---|
| **Workday** | Enterprise (Fortune 500) | Strips formatting heavily; hates tables |
| **Taleo (Oracle)** | Large corporations | Very strict on section headers |
| **Greenhouse** | Tech startups | More modern; handles PDFs better |
| **Lever** | Mid-size tech | Handles creative formats slightly better |
| **iCIMS** | Healthcare, finance | Conservative parser; prefer .docx |
| **BambooHR** | SMBs | Lenient; but still keyword-dependent |
| **LinkedIn ATS** | Varies | Pulls from LinkedIn profile too; ensure consistency |

**Default assumption**: Write for Workday/Taleo (most restrictive) unless the job portal is known.

---

## Keyword Match Strategies

### Exact Match vs. Semantic Match
Most ATS systems use **exact keyword matching** as the primary filter:
- If JD says "Project Management" — do NOT only write "project manager" — include both forms
- If JD says "ServiceNow ITOM" — write "ServiceNow ITOM" not just "ServiceNow"
- If JD says "Azure Active Directory" — also include "Azure AD" (use both forms)

### Keyword Density Rules
- **Primary keywords** (mentioned 2+ times in JD): appear 2–3x in the resume (Summary, Skills, Experience)
- **Secondary keywords** (mentioned once): appear at least once — Skills section is safest
- **Do not keyword-stuff**: ATS detects repetition; human reviewers will reject it

### Where Keywords Score Highest (ATS Weight by Section)
1. Professional Headline — highest weight
2. Professional Summary — very high
3. Core Competencies / Skills — high (keyword grid is easy for ATS to parse)
4. Job Titles — high (ATS matches against JD title)
5. Experience Bullets — medium-high
6. Education/Certs — medium (for matched fields)

---

## Formatting Rules (Full Detail)

### MUST DO
- ✅ Use `.docx` format (most ATS prefer it)
- ✅ Standard section header names: "Work Experience", "Education", "Skills", "Certifications", "Summary"
- ✅ Reverse chronological order for experience
- ✅ Single-column layout
- ✅ Standard fonts: Calibri, Arial, Garamond, Times New Roman
- ✅ Font size: 10.5–12pt for body, 14–16pt for name
- ✅ Bullet points using standard "•" — not custom symbols
- ✅ Margins between 0.5" and 1"
- ✅ Spell out acronyms on first use: "Azure Active Directory (Azure AD)"
- ✅ Use consistent date format: "Jan 2022 – Mar 2024" or "01/2022 – 03/2024"

### NEVER DO
- ❌ Text boxes (ATS ignores their content)
- ❌ Tables for main content (ATS often skips table cells)
- ❌ Headers or footers containing contact info (ATS parsers skip these)
- ❌ Two-column or multi-column layouts
- ❌ Icons, graphics, logos, or decorative elements
- ❌ "Creative" section headers ("My Journey", "What I Bring")
- ❌ Background colors or shading
- ❌ Embedded images or charts
- ❌ PDF unless the job post explicitly accepts PDF

---

## Section-by-Section Rules

### Header
```
JANE DOE
+1 (555) 123-4567 | jane.doe@email.com | linkedin.com/in/janedoe | Dubai, UAE
```
- **No photo** — ATS can't read it; some HR systems auto-reject photos
- **No date of birth, marital status, nationality** — not needed; can cause bias issues
- LinkedIn URL: shorten it (linkedin.com/in/yourname) — ATS parses URLs

### Professional Headline
- Mirror the JD title as closely as possible
- Format: `[Job Title] | [X Years Experience] | [Top Differentiator or Specialization]`
- Example: `ServiceNow Developer | 6+ Years ITOM & Event Management | Azure & ITIL Certified`

### Professional Summary
- 3–5 sentences
- Sentence 1: Who you are + years of experience + domain
- Sentence 2–3: Top 2 areas of expertise with keywords embedded
- Sentence 4: A quantified achievement or unique value prop
- Sentence 5 (optional): Career goal aligned to this specific role
- **Do NOT use first person** ("I am" → "Results-driven developer who...")

### Core Competencies
- Grid format with 12–20 skills
- Pull directly from the JD's required/preferred skills section
- Include both spelled-out names and abbreviations: "Applicant Tracking Systems (ATS)"
- Do NOT include generic soft skills here (save those for bullets) — keep this technical/domain-specific

### Professional Experience
- **Job Title** must be prominent — ATS matches it against JD title
- Include company name, location, and employment dates on the same line
- 4–6 bullets per role for current/recent; 2–4 for older roles
- Every bullet starts with a **strong action verb** (past tense for past roles, present for current)
- At least 50% of bullets should contain a number, percentage, or scale indicator

#### Power Action Verbs by Function
| Function | Verbs |
|---|---|
| Engineering/Dev | Architected, Developed, Deployed, Optimized, Automated, Migrated, Integrated |
| Management | Spearheaded, Led, Directed, Oversaw, Championed, Scaled, Mentored |
| Analysis | Analyzed, Identified, Assessed, Forecasted, Modeled, Synthesized |
| Marketing | Drove, Grew, Launched, Increased, Generated, Optimized, Executed |
| Operations | Streamlined, Reduced, Improved, Standardized, Implemented, Coordinated |
| Finance | Managed, Reconciled, Forecasted, Audited, Controlled, Reported |

### Education
- Degree, Major — University, Graduation Year
- Do NOT include GPA unless >3.5 and you have <3 years of experience
- List most recent first

### Certifications
- Always include if relevant — ATS keyword matches certifications explicitly
- Format: `Certification Name — Issuing Organization, Year`
- If in progress: `Certification Name (In Progress) — Expected [Month Year]`

---

## Handling Career Gaps
- Use year ranges only (2021–2022) instead of month/year if the gap is <6 months
- For longer gaps, brief honest explanation in a cover letter (not the resume)
- Use a Functional/Hybrid resume format only for gaps >1 year (less ATS-friendly; last resort)

## Handling Career Changes
- Lead the summary with transferable skills
- Use a "Relevant Skills" section before experience
- Front-load experience bullets with transferable accomplishments
- Use the JD's language to describe past work even if the industry was different
