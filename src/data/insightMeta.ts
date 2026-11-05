/**
 * 洞察頁共用的衍生資訊：排序、閱讀時間、日期格式。全部由 insights 資料推算，新文章不用多填欄位。
 */
import { insightsFor, type InsightArticle, type Lang } from './insights';

/** 依發布日新到舊排序（同日依 slug） */
export const sortedFor = (lang: Lang): InsightArticle[] =>
  [...insightsFor(lang)].sort((x, y) => y.published.localeCompare(x.published) || x.slug.localeCompare(y.slug));

/** 閱讀分鐘數：中文每分鐘約 450 字、日文約 500 字、英文約 220 字 */
export function readMinutes(article: InsightArticle, lang: Lang): number {
  const d = article[lang] ?? article.zh;
  const text = [d.lead, ...d.sections.flatMap((s) => [s.heading, ...s.paras])].join(' ');
  if (lang === 'en') return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 220));
  const chars = text.replace(/\s/g, '').length;
  return Math.max(1, Math.round(chars / (lang === 'ja' ? 500 : 450)));
}

export function fmtDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (lang === 'en') return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
  return `${y}.${String(m).padStart(2, '0')}.${String(d).padStart(2, '0')}`;
}

export const metaLabels = {
  zh: { min: (n: number) => `閱讀 ${n} 分鐘`, src: (n: number) => `${n} 項正式來源` },
  en: { min: (n: number) => `${n} min read`, src: (n: number) => `${n} cited source${n > 1 ? 's' : ''}` },
  ja: { min: (n: number) => `${n}分で読めます`, src: (n: number) => `出典 ${n} 件` },
} as const;

/** 延伸閱讀：同分類優先，其次依新到舊 */
export function relatedInsights(article: InsightArticle, lang: Lang, n = 3): InsightArticle[] {
  const others = sortedFor(lang).filter((a) => a.slug !== article.slug);
  const cat = article[lang]?.eyebrow;
  const same = others.filter((a) => a[lang]!.eyebrow === cat);
  return [...same, ...others.filter((a) => !same.includes(a))].slice(0, n);
}
