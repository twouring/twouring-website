// 洞察文章 JSON 檢查：node scripts/insights/check.mjs [slug ...]（不帶參數檢查全部）
// 失敗會列出原因並以 exit code 1 結束。
import { readFileSync, readdirSync } from 'node:fs';

const DIR = new URL('../../src/data/insights/', import.meta.url);
const CATS = ['產業資訊', 'AI 導入技巧', '數位轉型方法', '風險與治理', '採購決策', '流程自動化', '系統開發', '遠距與組織', '城市策略', '企業 AI'];
const BANNED = [
  '在當今', '快速變化', '日新月異', '賦能', '全方位', '不僅', '不只是', '更是', '總而言之', '綜上所述', '值得注意的是', '至關重要',
  '深入探討', '讓我們', '一起來看', '無論是', '扮演著', '不可或缺', '關鍵在於', '眾所周知', '隨著科技', '數位浪潮', '轉型浪潮',
  '—', '——', '！', '哈哈', '游牧', '補助', '大人提', '小人提', 'SBIR', '大阪', '慈濟', 'ALION', 'aLion',
];
// 已上線的 8 篇（2026-11 改版前）不套新文章規則
const LEGACY = ['enterprise-ai-adoption-roadmap', 'ai-consultant-vs-training-vs-build', 'company-data-in-chatgpt', 'department-ai-automation-roi', 'digital-nomad-city-maturity', 'traditional-industry-transformation-steps', 'metal-parts-ai-quoting', 'manufacturing-labor-shortage-ai'];
const SIMP = /[这们个为说时发对现实开关数据软网络资讯业务应该进过还么样产设计门问题让认识级经营]/;
const files = process.argv.slice(2).length
  ? process.argv.slice(2).map((s) => s.replace(/\.json$/, '') + '.json')
  : readdirSync(DIR).filter((f) => f.endsWith('.json'));

// 跨篇重複句偵測（擋模板文）：收集全部文章 15 字以上的句子
const sentOwner = new Map();
const sentsOf = (z) => [z.lead, ...(z.sections || []).flatMap((s) => s.paras || [])].join('。').split(/[。？；\n]/).map((s) => s.trim()).filter((s) => s.length >= 15);
for (const f of readdirSync(DIR).filter((x) => x.endsWith('.json'))) {
  try { const a = JSON.parse(readFileSync(new URL(f, DIR), 'utf8')); for (const s of sentsOf(a.zh || {})) { if (!sentOwner.has(s)) sentOwner.set(s, new Set()); sentOwner.get(s).add(a.slug); } } catch {}
}
let bad = 0;
const seenTitles = new Map();
for (const f of files) {
  const errs = [];
  let a;
  try { a = JSON.parse(readFileSync(new URL(f, DIR), 'utf8')); } catch (e) { console.log(`✗ ${f}: JSON 解析失敗 ${e.message}`); bad++; continue; }
  const slug = f.replace(/\.json$/, '');
  if (LEGACY.includes(slug)) { seenTitles.set(a.zh?.title, slug); console.log(`· ${slug}（既有文章，略過規則）`); continue; }
  if (a.slug !== slug) errs.push(`slug 與檔名不符（${a.slug}）`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) errs.push('slug 只能小寫英數與連字號');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(a.published || '')) errs.push('published 格式須為 YYYY-MM-DD');
  if (a.updated !== a.published && !(a.updated > a.published)) errs.push('updated 不可早於 published');
  if (!Array.isArray(a.sources)) errs.push('sources 必須是陣列（可為空）');
  for (const s of a.sources || []) if (!s.title || !/^https?:\/\//.test(s.url || '')) errs.push(`來源格式錯誤：${JSON.stringify(s)}`);
  const z = a.zh;
  if (!z) { errs.push('缺 zh'); } else {
    for (const k of ['title', 'description', 'eyebrow', 'lead']) if (!z[k]) errs.push(`zh.${k} 空白`);
    if (!CATS.includes(z.eyebrow)) errs.push(`zh.eyebrow 不在分類清單：${z.eyebrow}`);
    const legacy = LEGACY.includes(slug);
    if ((z.description || '').length > 120) errs.push(`description 太長（${z.description.length}）`);
    if (!legacy && !Array.isArray(z.sections) || !legacy && z.sections.length < 4 || z.sections.length > 6) errs.push(`sections 須 4～6 個（${z.sections?.length}）`);
    const body = [z.lead, ...(z.sections || []).flatMap((s) => [s.heading, ...(s.paras || [])])].join('');
    const n = body.replace(/\s/g, '').length;
    if (!legacy && (n < 1100 || n > 1700)) errs.push(`zh 內文字數 ${n}（須 1,100～1,700）`);
    const all = [z.title, z.description, body].join('\n');
    for (const w of BANNED) if (all.includes(w)) errs.push(`禁用字詞「${w}」`);
    const m = all.match(SIMP); if (m) errs.push(`疑似簡體字「${m[0]}」`);
    if (/\d+(\.\d+)?\s*(%|％|萬|億|成)/.test(body) && (a.sources || []).length === 0) errs.push('內文有統計數字（%、萬、億、成）但 sources 為空');
    const own = sentsOf(z);
    const dupIn = own.filter((s) => (sentOwner.get(s)?.size || 0) > 1);
    if (dupIn.length) errs.push(`有 ${dupIn.length} 句與其他文章相同（疑似模板），例如「${dupIn[0].slice(0, 30)}」`);
    const selfDup = own.filter((s, i) => own.indexOf(s) !== i);
    if (selfDup.length) errs.push(`同篇重複句：「${selfDup[0].slice(0, 30)}」`);
    const tCount = body.split(z.title).length - 1;
    if (tCount > 0) errs.push('正文直接複製整句標題（疑似模板）');
    if (seenTitles.has(z.title)) errs.push(`標題重複：${seenTitles.get(z.title)}`);
    seenTitles.set(z.title, slug);
    if (!errs.length) console.log(`✓ ${slug}｜${a.published}｜${z.eyebrow}｜${n} 字｜來源 ${(a.sources || []).length}`);
  }
  if (errs.length) { bad++; console.log(`✗ ${slug}\n  - ${errs.join('\n  - ')}`); }
}
console.log(`\n檢查 ${files.length} 篇，失敗 ${bad} 篇`);
process.exit(bad ? 1 : 0);
