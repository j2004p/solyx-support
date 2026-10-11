const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');

for (const value of ['', 'true', 'app-live']) {
  test(`release command fails closed for confirmation ${JSON.stringify(value)}`, () => {
    const result = spawnSync(process.execPath, [path.join(__dirname, 'release-check.cjs')], {
      env: { ...process.env, SOLYX_RELEASE_CONFIRMED: value }, encoding: 'utf8', timeout: 15000,
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /NOT DEPLOYED/);
    assert.match(result.stderr, /app-and-lifetime-live/);
  });
}
