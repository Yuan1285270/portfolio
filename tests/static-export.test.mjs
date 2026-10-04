import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import test from 'node:test';

const output = resolve('out');
test('exports both public routes and keeps the official links before the story', async () => {
  const home = await readFile(resolve(output, 'index.html'), 'utf8');
  const exchange = await readFile(resolve(output, 'exchange.html'), 'utf8');
  assert.match(home, /Hi, I(?:&#x27;|')m Yuan/);
  assert.match(home, /https:\/\/portfolio\.tsungyuan\.dev/);
  assert.match(exchange, /學校刊登與官方紀錄/);
  const featured = exchange.match(/<nav class="exchange-official-records"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(featured);
  assert.equal((featured.match(/<a /g) ?? []).length, 2);
  assert.match(featured, /www\.iecs\.fcu\.edu\.tw/);
  assert.match(featured, /ntctie\.eduweb\.tw/);
  assert.doesNotMatch(featured, /\.pdf/);
  assert.ok(exchange.indexOf(featured) < exchange.indexOf('exchange-lead'));
  assert.match(exchange, /href="\/certificates\/temple-exchange-fall-2025\.pdf"/);
  assert.match(exchange, /href="\/portfolio\/exchange\/works\/scholarship-sharing\.pdf"/);
  assert.doesNotMatch(exchange, /writing-analysis\.pdf/);
  for (const html of [home, exchange]) {
    assert.match(html, /analytics\.tsungyuan\.dev\/script\.js/);
    assert.match(html, /ab02fb71-9235-490f-8034-51024cfc7c2f/);
    const assets = [...html.matchAll(/(?:src|href)="(\/[^"?#]+\.(?:css|js|webp|png|jpe?g|svg|mp4|pdf|woff2?))(?:[?#][^"]*)?"/g)];
    await Promise.all(assets.map(([, path]) => access(resolve(output, decodeURIComponent(path.slice(1))))));
  }
  await access(resolve(output, '404.html'));
});
