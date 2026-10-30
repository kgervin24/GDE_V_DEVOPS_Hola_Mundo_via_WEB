const test = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');

const BASE_URL = 'http://127.0.0.1:8080';
let server;

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    if (server.exitCode !== null) {
      throw new Error('A szerver váratlanul leállt.');
    }

    try {
      const response = await fetch(`${BASE_URL}/health`);
      if (response.ok) return;
    } catch {
      // A szerver még nem indult el.
    }

    await new Promise(resolve => setTimeout(resolve, 200));
  }

  throw new Error('A szerver nem indult el időben.');
}

test('GDE DEVOPS - HTTP végpontok ellenőrzése', async (t) => {
  server = spawn(process.execPath, ['src/app.js'], {
    stdio: 'ignore'
  });

  try {
    await waitForServer();

    await t.test('Főoldal ellenőrzése', async () => {
      const response = await fetch(`${BASE_URL}/`);

      assert.equal(response.status, 200);

      const html = await response.text();
      assert.ok(html.includes('Hola Mundo!'));
    });

    await t.test('Health endpoint ellenőrzése', async () => {
      const response = await fetch(`${BASE_URL}/health`);

      assert.equal(response.status, 200);

      const data = await response.json();
      assert.equal(data.status, 'ok');
      assert.equal(data.version, '1.0.0');
    });
  } finally {
    server.kill();
  }
});
