// 截圖＋溢出檢查：node scripts/shot-check.mjs <baseUrl> <outDir>
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { globSync } from 'node:fs';
const require = createRequire('/opt/gstack/node_modules/');
const { chromium } = require('playwright');

const [base = 'http://localhost:4321', out = '/workspace/local/其他/暫存/_scratch/site-shots'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const exe = globSync('/opt/gstack/browsers/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell').sort().at(-1);
const browser = await chromium.launch({ executablePath: exe });
const pages = [
  ['zh-home', '/'], ['en-home', '/en/'], ['ja-home', '/ja/'],
  ['zh-about', '/about/'], ['zh-systems', '/services/systems/'], ['ja-systems', '/ja/services/systems/'], ['zh-services', '/services/'],
];
const widths = [1280, 390];
const report = [];
for (const [name, path] of pages) {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => {
      const bad = [];
      for (const el of document.querySelectorAll('h1,h2,h3,.btn,.keep,.proof-n')) {
        if (el.scrollWidth > el.clientWidth + 2) bad.push(el.tagName + ':' + el.textContent.trim().slice(0, 40));
      }
      return { docOverflow: document.documentElement.scrollWidth > window.innerWidth, bad };
    });
    report.push({ name, w, ...overflow });
    await page.screenshot({ path: `${out}/${name}-${w}.png`, fullPage: name.endsWith('home') || name.includes('about') || name.includes('systems') ? false : false });
    // 另存 hero + KK 區塊全頁（限制高度）
    if (name.endsWith('home') && w === 1280) {
      const kk = await page.$('.kk-wrap');
      if (kk) await kk.screenshot({ path: `${out}/${name}-${w}-kk.png` });
    }
    if (name.endsWith('home') && w === 390) {
      await page.screenshot({ path: `${out}/${name}-${w}-full.png`, fullPage: true });
    }
    if (name.includes('about')) {
      const kk = await page.$('.kk-wrap');
      if (kk) await kk.screenshot({ path: `${out}/${name}-${w}-kk.png` });
    }
    await ctx.close();
  }
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
