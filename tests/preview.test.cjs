const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { Script } = require('node:vm');

const root = path.resolve(__dirname, '..');
const prototype = '原型_医院智慧安全管理系统_v2.html';

test('preview entry resolves under the GitHub repository URL', () => {
  const entry = readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(entry, /charset="UTF-8"/i);
  const redirect = entry.match(/http-equiv="refresh" content="0; url=([^"<>]+)"/i);
  assert.ok(redirect, 'index.html must redirect to the prototype');
  const base = new URL('https://13798489127.github.io/logistics-analysis-prototype/');
  const destination = new URL(redirect[1], base);
  assert.equal(destination.origin, base.origin);
  assert.equal(destination.pathname, base.pathname + encodeURIComponent(prototype));
  assert.ok(existsSync(path.join(root, decodeURIComponent(redirect[1]))));
  const fallback = entry.match(/href="([^"<>]+)"/);
  assert.ok(fallback, 'a link must work when automatic navigation is disabled');
  assert.equal(fallback[1], redirect[1]);
});

test('prototype scripts parse and assets are self-contained', () => {
  const html = readFileSync(path.join(root, prototype), 'utf8');
  assert.doesNotMatch(html, /<(?:script|link)\b[^>]*(?:src|href)=/i);
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length > 0);
  for (const [index, script] of scripts.entries()) {
    assert.doesNotThrow(() => new Script(script[1], { filename: `${prototype}:${index}` }));
  }
});

test('GitHub Pages serves the original filenames without Jekyll', () => {
  assert.ok(existsSync(path.join(root, '.nojekyll')));
});
