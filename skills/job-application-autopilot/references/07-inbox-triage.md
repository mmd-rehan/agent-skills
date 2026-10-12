# Inbox triage

The candidate's inbox fills with confirmations, rejections, surveys and a few emails that really matter. Triage turns that into a short list of actions and makes the inbox itself the to-do list.

## Scope and privacy

Search for job-related mail only (by date range, excluding promotions and social categories, plus ATS senders such as greenhouse, ashbyhq, lever, workable, teamtailor, recruitee, smartrecruiters, workday, successfactors, and LinkedIn job notifications). Do not open or summarise unrelated personal mail.

## Read properly

Search results usually show previews of the oldest messages in a thread. A thread that started as "thanks for applying" may end with a rejection or an interview invite. Open each relevant thread in full and read the latest message before classifying it.

## Classify

| Class | Examples | Inbox action |
|---|---|---|
| Action needed | Assessment or coding challenge, video interview link, "verify your email to complete the application", "application failed, please complete it on the company site", recruiter asking a question | Keep or make unread |
| Interview or call | Calendar invite, scheduling link already booked | Keep unread, add the time with timezone |
| Rejection | "Not moving forward", "decided to proceed with other candidates" | Mark read |
| Confirmation only | "We received your application" | Mark read (optional, ask the candidate's preference) |
| Optional | Candidate surveys, voluntary self-ID forms, talent community invites | Leave as is, list as optional |
| Suspicious | Paid programmes, unsolicited projects asking to run code, requests for money or ID | List under "be careful" |

Some emails look like rejections but are not, and the reverse. Read the body, not just the subject.

## Update the inbox

- Remove the unread label from rejections (and confirmations if the candidate wants that).
- Add the unread label back to any action email that was already opened, so every action item is visibly unread.

## Write action-items.md

Rebuild `applications/action-items.md` from `assets/action-items.template.md`:
- One row per action: company, role, exact step, deadline (with timezone), and the email subject to search for.
- Order by urgency. Flag deadlines that have probably passed, and suggest a recovery step (for example "reply and ask for a new link").
- Separate sections for optional items, suspicious items, rejections this period, and applications still waiting.

## Update the log

Set statuses in the application log (Rejected, Interview, Action needed) using `scripts/applog.py status`. Then the weekly stats reflect reality.

## Report

Tell the candidate, in a few lines: the urgent items first (anything today), then the other actions, then what was marked read, then anything suspicious.
