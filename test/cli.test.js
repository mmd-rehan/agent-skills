import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { parseArgs, resolveTarget } from '../bin/agent-skills.js';

test('parseArgs separates skills, flags, and --path value', () => {
  const { flags, positional } = parseArgs(['add', 'react', 'node', '--global', '--path', 'foo']);
  assert.deepEqual(positional, ['add', 'react', 'node']);
  assert.equal(flags.global, true);
  assert.equal(flags.path, 'foo');
});

test('parseArgs supports short flags', () => {
  const { flags } = parseArgs(['add', 'react', '-g', '-f']);
  assert.equal(flags.global, true);
  assert.equal(flags.force, true);
});

test('resolveTarget: default is project-local', () => {
  const t = resolveTarget({}, { home: '/home/u', cwd: '/proj' });
  assert.equal(t, path.join('/proj', '.claude', 'skills'));
});

test('resolveTarget: --global is home', () => {
  const t = resolveTarget({ global: true }, { home: '/home/u', cwd: '/proj' });
  assert.equal(t, path.join('/home/u', '.claude', 'skills'));
});

test('resolveTarget: --path wins and resolves against cwd', () => {
  const t = resolveTarget({ path: 'custom' }, { home: '/home/u', cwd: '/proj' });
  assert.equal(t, path.join('/proj', 'custom'));
});
