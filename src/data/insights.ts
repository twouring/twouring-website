/**
 * 洞察文章：一篇一個 JSON，放在 src/data/insights/<slug>.json。
 * 只有中文版的文章不寫 en／ja，頁面只輸出中文路由。
 * published 晚於建置當天（台北時間）的文章不會輸出，排程每天重建時自動上線。
 */
export type Lang = 'zh' | 'en' | 'ja';

export interface InsightLocale {
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  sections: { heading: string; paras: string[] }[];
}

export interface InsightArticle {
  slug: string;
  path: string;
  published: string;
  updated: string;
  /** 文中數字與法規的正式出處（文章底部列出） */
  sources?: { title: string; url: string }[];
  zh: InsightLocale;
  en?: InsightLocale;
  ja?: InsightLocale;
}

export type InsightSlug = string;

const today = new Date(Date.now() + 8 * 3600_000).toISOString().slice(0, 10);
const files = import.meta.glob<Omit<InsightArticle, 'path'>>('./insights/*.json', { eager: true, import: 'default' });

export const insights: Record<string, InsightArticle> = Object.fromEntries(
  Object.values(files)
    .filter((a) => a.published <= today)
    .map((a) => [a.slug, { ...a, path: `/insights/${a.slug}` }]),
);

export const INSIGHT_LIST = Object.values(insights);

/** 某語言實際有內容的文章 */
export const insightsFor = (lang: Lang) => INSIGHT_LIST.filter((a) => a[lang]);

/** 文章存在的語言 */
export const localesOf = (a: InsightArticle): Lang[] => (['zh', 'en', 'ja'] as Lang[]).filter((l) => a[l]);
