// 洞察頁截圖＋溢出檢查：node scripts/shot-insights.mjs <baseUrl> <outDir>
import { createRequire } from 'node:module';
import { mkdirSync, globSync } from 'node:fs';
const require = createRequire('/opt/gstack/node_modules/');
const { chromium } = require('playwright');

const [base = 'http://localhost:4329', out = '/workspace/local/_scratch/insight-shots'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const exe = globSync('/opt/gstack/browsers/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell').sort().at(-1);
const browser = await chromium.launch({ executablePath: exe });
const pages = [
  ['zh-list', '/insights/'], ['en-list', '/en/insights/'], ['ja-list', '/ja/insights/'],
  ['zh-art', '/insights/manufacturing-labor-shortage-ai/'], ['ja-art', '/ja/insights/metal-parts-ai-quoting/'],
];
for (const [name, path] of pages) {
  for (const w of [1280, 390]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.evaluate(() => { const b = document.getElementById('consent-banner'); if (b) b.hidden = true; });
    const r = await page.evaluate(() => {
      const bad = [];
      for (const el of document.querySelectorAll('h1,h2,.row-title,.rel-title,.btn,.meta')) if (el.scrollWidth > el.clientWidth + 2) bad.push(el.tagName + ':' + el.textContent.trim().slice(0, 30));
      return { doc: document.documentElement.scrollWidth > window.innerWidth, bad };
    });
    console.log(name, w, JSON.stringify(r));
    await page.screenshot({ path: `${out}/${name}-${w}.png`, fullPage: true });
    await ctx.close();
  }
}
await browser.close();
