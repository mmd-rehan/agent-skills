---
name: token-sentinel
description: "A skill for monitoring API token usage and rate limits in a background thread, dynamically adjusting polling frequency, and triggering task resumption upon limit reset."
---

## When to Use

- When executing long-running tasks that may hit token or rate limits.
- When background monitoring of token consumption or credit usage is required.
- When an automatic sleep and resume mechanism is needed for tasks delayed by rate limits.

## Core Workflow

1. Context Isolation

   - Execute monitoring loops in a decoupled background thread or subprocess.
   - Do not emit routine health check outputs to the primary task thread.

2. Metric Polling and Adaptive Schedule

   - Periodically check remaining system tokens and credits.
   - Adjust polling interval according to current consumption percentage:
     - 0% to 50% Used: Poll every 60 minutes (background heartbeat).
     - 51% to 79% Used: Poll every 30 minutes (moderate surveillance).
     - 80% to 95% Used: Poll every 10 to 15 minutes (high alert, calculate reset time).
     - 99% Limit Exhausted: Deep sleep until reset window passes.

3. Handling Limit Exhaustion

   - When 99% of the token limit is exhausted, retrieve the limit reset timestamp (T_reset).
   - Calculate Wake Time: T_wake = T_reset + 1 minute.
   - Pause execution until T_wake.

4. Resumption Trigger

   - At T_wake, send the exact resumption signal to the parent agent queue:
     "The tokens are reset. Just continue your task."
   - Reset the internal polling schedule to baseline.

## Gotchas

- Ensure routine polling checks do not log to the main conversation window to prevent context bloat.
- Always include the 1-minute buffer past T_reset to avoid race conditions with server-side limit resets.