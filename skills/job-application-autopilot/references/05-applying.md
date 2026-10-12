# Applying: browsers, platforms and handoffs

## Choosing a browser

Agents often have more than one way to drive a browser. Know what each can do before the first application:

| Browser type | Strengths | Weaknesses |
|---|---|---|
| The candidate's own browser via an extension (for example Claude in Chrome) | Already signed in to LinkedIn, Gmail and job boards. Usually supports real file uploads. | Acts in the candidate's real profile, so be careful. Only the active, visible tab reliably renders and takes keyboard input. |
| A built-in or sandboxed browser pane | Separate sign-ins, isolated from personal browsing. | Must sign in separately (the human does that). Some cannot open new tabs or popups, and file inputs may not be reachable. |
| Headless automation (Playwright and similar) | Fast for scraping job lists. | No sign-ins, often blocked by bot detection. Rarely suitable for submitting applications. |

Practical rules:
- If more than one browser or device is connected, ask the candidate which to use. Do not guess.
- Work in the visible tab. Background tabs may not render or accept typing, which shows up as fields that look filled but are empty on submit.
- If a site works badly in one browser (an upload button does nothing, a new tab is blocked), try the other before giving up.

## Platform playbook

Behaviour changes over time. Treat this as a starting point, and add new findings to the candidate's notes.

**LinkedIn Easy Apply**
- Multi-step modal. Check each step: contact details, CV choice, screening questions, review.
- Pre-filled answers (years of experience especially) are often wrong. Correct them from master.md.
- There is a daily submission cap. The message is roughly "we limit daily submissions". When it appears, queue the remaining job IDs in the log and move to another source until tomorrow. Do not confuse it with other "limit" wording inside a question (for example a question that says "you have reached the limit of 3 responses").
- "Mark as top choice" exists for some accounts. Use it for the candidate's strongest matches if they want.
- "Apply" (not Easy Apply) redirects to the company's ATS. Follow it there.
- Incomplete applications can be saved. Use that for handoffs.

**Ashby** (jobs.ashbyhq.com)
- Upload the CV first. Ashby may parse it and overwrite or clear fields you already typed. After upload, re-check every field.
- Radio buttons and custom selects often ignore values set by script. Use real clicks.
- Confirmation: "Your application was successfully submitted".

**Greenhouse** (boards.greenhouse.io, job-boards.greenhouse.io)
- Usually simple. Some boards add an invisible reCAPTCHA. If submit does not navigate and a CAPTCHA appears, stop and hand off. Sometimes the confirmation email arrives anyway, so check the inbox before re-applying.
- "Enter manually" is available for the resume if upload fails.

**Lever** (jobs.lever.co): simple single page. Confirmation URL ends in `/thanks`.

**Workable** (apply.workable.com): GDPR consent tick, sometimes a "copy of your application" email. Some Workable forms through LinkedIn force a numeric salary.

**Teamtailor**: may send a "verify your email to complete the application" message after submit. The application is not complete until that link is clicked. Treat it as an action item.

**Recruitee**: often has essay questions. Use the stories bank or hand off.

**SmartRecruiters**: the CV upload widget is sometimes unreachable by automation. Fill what you can and hand off the upload.

**Personio**: company-hosted form, usually straightforward.

**Workday and SAP SuccessFactors**: almost always require an account with a password. Pre-fill the account form if allowed, then hand off ("set password, country, accept terms, then tell me to continue"). Some SuccessFactors sites allow applying without an account. Check before handing off.

**Boards with work-permit badges** (some European boards): the badge may mean "you must already hold a permit". If the form asks "do you have a valid work permit" and the honest answer is No, the board may auto-reject. Use the board's visa or relocation filter instead.

## Files

- Upload the chosen CV variant. If the browser cannot set a file input, try the other browser, or hand off the upload.
- Some forms require the cover letter as a file. Generate it as .pdf from the cover-letter text.

## Verification codes

Some sites email a one-time code during application. Read only that code from the candidate's mailbox, and only if they have allowed it. Do not read other mail while doing so.

## Confirming submission

An application counts as Applied only when you see a confirmation page or message, or a confirmation email arrives. If the page hangs, retry once. If it still fails, log "Unconfirmed" or "Failed" with the reason and move on. Check the inbox later before re-applying, since some submissions succeed silently.

## Handoff statuses for the log

| Status | Meaning |
|---|---|
| Applied | Confirmed submitted |
| Unconfirmed | Submitted but no confirmation seen |
| Needs <name> | Form partly filled, exact remaining step in Notes |
| Queued | Found and approved, waiting for a cap to reset or the next run |
| Skipped | Did not apply, reason in Notes |
| Suspicious | Looks like a scam or paid scheme |
| Rejected / Interview / Offer | Updated from inbox triage |

## High-volume tip: an answer table

For repetitive platforms, keep a small table of question patterns to answers, built from answers.md (for example "sponsorship" to "Yes", "authorized to work" to "No", "years.*react" to the React row of the skills table, "notice" to "30 days"). Apply it consistently, and add a rule each time a new question appears. Never let a pattern answer a question it does not truly match. When no rule matches, hand off.
