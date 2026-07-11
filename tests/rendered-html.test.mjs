import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Tsung-Yuan's portfolio and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Tsung-Yuan Lin — CS Student \+ AI &amp; Full-Stack Developer<\/title>/i);
  assert.match(html, /Hi, I(?:&#x27;|')m Yuan/i);
  assert.match(html, /Short stories/i);
  assert.match(html, /Concord System Management Corp/i);
  assert.match(html, /3\.91 \/ 4\.3/i);
  assert.match(html, />C1</i);
  assert.match(html, /Capabilities/i);
  assert.match(html, /OwlHacks 2025/i);
  assert.match(html, /Mountain City Digital Hackathon/i);
  assert.match(html, /Placed awards/i);
  assert.match(html, /ALL-EN/i);
  assert.match(html, /SpendiX/i);
  assert.match(html, /Smart Drop/i);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /\/og\.png/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("ships the finished portfolio source without starter artifacts", async () => {
  const [page, layout, portfolio, packageJson, hosting] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/PortfolioLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /PortfolioLanding/);
  assert.match(layout, /Kanit/);
  assert.match(layout, /\/og\.png/);
  assert.match(portfolio, /framer-motion/);
  assert.match(portfolio, /prefers-reduced-motion|useReducedMotion/);
  assert.match(packageJson, /"framer-motion"/);
  assert.match(packageJson, /"lucide-react"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(hosting, /"project_id"/);

  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/portfolio/originals/yuan-profile.jpg", import.meta.url)),
    access(new URL("../public/portfolio/originals/all-en.png", import.meta.url)),
    access(new URL("../public/portfolio/awards/owl-hacks-2025.png", import.meta.url)),
    access(new URL("../public/portfolio/showreels/owlhacks-2025.mp4", import.meta.url)),
    access(new URL("../public/certificates/owl-hacks-2025-second-place.pdf", import.meta.url)),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
