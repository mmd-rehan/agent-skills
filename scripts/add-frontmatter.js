#!/usr/bin/env node
/**
 * Prepend Claude/Codex-compatible YAML frontmatter to every skills/<name>/SKILL.md
 * using the name + description from that skill's metadata.json.
 * Idempotent: skips files that already start with a `---` frontmatter block.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = path.join(__dirname, '..', 'skills');

function yamlEscape(s) {
  // Quote if it contains characters that would break a bare YAML scalar.
  if (/[:#\n"']/.test(s)) return JSON.stringify(s);
  return s;
}

let updated = 0, skipped = 0;
for (const name of fs.readdirSync(SKILLS_DIR)) {
  const dir = path.join(SKILLS_DIR, name);
  if (!fs.statSync(dir).isDirectory()) continue;

  const mdPath = path.join(dir, 'SKILL.md');
  const metaPath = path.join(dir, 'metadata.json');
  if (!fs.existsSync(mdPath) || !fs.existsSync(metaPath)) continue;

  const body = fs.readFileSync(mdPath, 'utf8');
  if (body.trimStart().startsWith('---')) { skipped++; continue; }

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const fm = [
    '---',
    `name: ${yamlEscape(meta.name)}`,
    `description: ${yamlEscape(meta.description)}`,
    '---',
    ''
  ].join('\n');

  fs.writeFileSync(mdPath, fm + '\n' + body);
  updated++;
  console.log(`✔ frontmatter added: ${name}`);
}
console.log(`\nDone. ${updated} updated, ${skipped} already had frontmatter.`);
