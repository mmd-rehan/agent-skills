#!/usr/bin/env node
/**
 * @mmd-rehan/agent-skills
 * Install AI agent skills from GitHub with one npx command.
 *
 *   npx @mmd-rehan/agent-skills add job-application-autopilot
 *   npx @mmd-rehan/agent-skills add job-application-autopilot token-sentinel --global
 *   npx @mmd-rehan/agent-skills list
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const REPO = 'mmd-rehan/agent-skills';
const BRANCH = 'main';
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;

const c = {
  reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
  red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m'
};
const ok = (m) => console.log(`${c.green}✔${c.reset} ${m}`);
const warn = (m) => console.log(`${c.yellow}!${c.reset} ${m}`);
const die = (m) => { console.error(`${c.red}✖${c.reset} ${m}`); process.exit(1); };

// --- pure helpers (exported for tests) --------------------------------------

export function parseArgs(argv) {
  const flags = { global: false, all: false, force: false, path: null };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--global' || a === '-g') flags.global = true;
    else if (a === '--all') flags.all = true;
    else if (a === '--force' || a === '-f') flags.force = true;
    else if (a === '--path') flags.path = argv[++i];
    else positional.push(a);
  }
  return { flags, positional };
}

/** Global -> ~/.claude/skills, custom -> --path, default -> ./.claude/skills */
export function resolveTarget(flags, { home = os.homedir(), cwd = process.cwd() } = {}) {
  if (flags.path) return path.resolve(cwd, flags.path);
  if (flags.global) return path.join(home, '.claude', 'skills');
  return path.join(cwd, '.claude', 'skills');
}

// --- commands ---------------------------------------------------------------

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

async function loadRegistry() {
  try {
    return await fetchJson(`${RAW}/registry/index.json`);
  } catch (err) {
    throw new Error(`Could not reach the skill registry on GitHub (${err.message}). Check your connection.`);
  }
}

async function cmdList() {
  const reg = await loadRegistry();
  const skills = reg.skills || {};
  const names = Object.keys(skills).sort();
  console.log(`${c.bold}${c.cyan}Available skills (${names.length}):${c.reset}\n`);
  for (const name of names) {
    const s = skills[name];
    console.log(`  ${c.bold}${name.padEnd(20)}${c.reset} ${s.description || ''}`);
  }
  console.log(`\n${c.dim}Install:${c.reset} npx @mmd-rehan/agent-skills add <name> [--global]`);
}

async function cmdAdd(names, flags) {
  const { downloadTemplate } = await import('giget');

  if (flags.all) {
    const reg = await loadRegistry();
    names = Object.keys(reg.skills || {});
  }
  if (!names.length) die('Specify a skill (or --all). Try: npx @mmd-rehan/agent-skills list');

  const target = resolveTarget(flags);
  fs.mkdirSync(target, { recursive: true });
  console.log(`${c.cyan}Installing ${names.length} skill(s) into${c.reset} ${target}\n`);

  let failed = 0;
  for (const name of names) {
    const dest = path.join(target, name);
    if (fs.existsSync(dest) && !flags.force) {
      warn(`${name} already exists — skipping (use --force to overwrite)`);
      continue;
    }
    try {
      await downloadTemplate(`github:${REPO}/skills/${name}#${BRANCH}`, {
        dir: dest, force: true, forceClean: flags.force
      });
      ok(`${name} → ${dest}`);
    } catch (err) {
      failed++;
      console.error(`${c.red}✖${c.reset} ${name}: ${err.message}`);
    }
  }
  console.log('');
  if (failed) die(`${failed} skill(s) failed. If the name is wrong, run: agent-skills list`);
  ok('Done.');
}

function showHelp() {
  console.log(`
${c.bold}${c.cyan}agent-skills${c.reset} — install AI agent skills with one command

${c.bold}USAGE${c.reset}
  npx @mmd-rehan/agent-skills <command> [skills...] [flags]

${c.bold}COMMANDS${c.reset}
  add <skill...>   Download skill(s) from GitHub
  add --all        Install every skill
  list             Show all available skills
  help             Show this help

${c.bold}FLAGS${c.reset}
  (default)        Install into this project   ./.claude/skills
  -g, --global     Install for all projects    ~/.claude/skills
  --path <dir>     Install into a custom directory
  -f, --force      Overwrite if it already exists

${c.bold}EXAMPLES${c.reset}
  npx @mmd-rehan/agent-skills list
  npx @mmd-rehan/agent-skills add job-application-autopilot
  npx @mmd-rehan/agent-skills add job-application-autopilot token-sentinel --global
`);
}

async function main() {
  const { flags, positional } = parseArgs(process.argv.slice(2));
  const command = positional.shift() || 'help';
  switch (command) {
    case 'add': case 'install': await cmdAdd(positional, flags); break;
    case 'list': case 'ls': await cmdList(); break;
    default: showHelp();
  }
}

// Run only when invoked as a CLI (not when imported by tests).
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((err) => die(err.message || String(err)));
}
