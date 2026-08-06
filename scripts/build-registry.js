#!/usr/bin/env node
/**
 * Scan skills/<name>/metadata.json and write registry/index.json.
 * This file powers the `list` command. Run it after adding/editing a skill.
 * Self-contained: no external dependencies.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = path.join(root, 'skills');
const registryDir = path.join(root, 'registry');

const skills = {};
if (fs.existsSync(skillsDir)) {
  for (const name of fs.readdirSync(skillsDir).sort()) {
    const dir = path.join(skillsDir, name);
    const metaPath = path.join(dir, 'metadata.json');
    if (!fs.statSync(dir).isDirectory() || !fs.existsSync(metaPath)) continue;
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    skills[meta.name] = {
      name: meta.name,
      description: meta.description || '',
      category: meta.category || 'general',
      version: meta.version || '0.1.0'
    };
  }
}

const manifest = {
  generatedAt: new Date().toISOString(),
  totalSkills: Object.keys(skills).length,
  skills
};

fs.mkdirSync(registryDir, { recursive: true });
fs.writeFileSync(path.join(registryDir, 'index.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Registry built: ${manifest.totalSkills} skill(s).`);
