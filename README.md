# agent-skills

Install AI agent skills (Claude Code, Codex, Cursor, Windsurf, Gemini) from this
repo with one `npx` command. The skills live in [`skills/`](./skills); the CLI
downloads the one(s) you ask for straight from GitHub.

## Quick start

```bash
# See what's available
npx @mmd-rehan/agent-skills list

# Add one skill to the current project (-> ./.claude/skills/job-application-autopilot)
npx @mmd-rehan/agent-skills add job-application-autopilot

# Add several
npx @mmd-rehan/agent-skills add job-application-autopilot token-sentinel

# Install globally for every project (-> ~/.claude/skills)
npx @mmd-rehan/agent-skills add job-application-autopilot --global

# Everything, overwriting anything already there
npx @mmd-rehan/agent-skills add --all --force
```

## Available skills

| Skill | What it does |
| ----- | ------------ |
| [`job-application-autopilot`](./skills/job-application-autopilot) | End-to-end job search automation. Drop your career material in a folder, it builds a verified `master.md`, generates ATS-optimized CVs, finds and applies to jobs, logs every application, drafts recruiter outreach for your approval, and turns your inbox into an action list. |
| [`token-sentinel`](./skills/token-sentinel) | Monitors API token usage and rate limits in the background and resumes work after a limit resets. |

## Where skills go

| Flag         | Location            | Use for                  |
| ------------ | ------------------- | ------------------------ |
| _(default)_  | `./.claude/skills`  | This project             |
| `--global`   | `~/.claude/skills`  | All your projects        |
| `--path <d>` | any directory       | Custom (e.g. `.codex/skills`) |

Claude Code reads skills from `.claude/skills/`; each skill's `SKILL.md` starts
with a YAML frontmatter block (`name`, `description`) so the agent recognizes it.

## Adding a new skill

Create a folder under `skills/<name>/` with a `SKILL.md` and a `metadata.json`
(`name`, `description`, `category`), then run:

```bash
npm run frontmatter     # adds/refreshes SKILL.md frontmatter from metadata.json
npm run build-registry  # regenerates registry/index.json (powers `list`)
```

Push to `main` and it's instantly installable via the commands above.

## License

MIT
