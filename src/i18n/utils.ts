import type { Lang } from './company';

export const LOCALES: Lang[] = ['zh', 'en', 'ja'];
export const DEFAULT_LOCALE: Lang = 'zh';

/** 各語言的 HTML lang / hreflang / OG locale / 顯示名。 */
export const LOCALE_META: Record<Lang, { html: string; og: string; label: string }> = {
  zh: { html: 'zh-Hant-TW', og: 'zh_TW', label: '中文' },
  en: { html: 'en', og: 'en_US', label: 'English' },
  ja: { html: 'ja', og: 'ja_JP', label: '日本語' },
};

/** 將 Astro.currentLocale 等輸入正規化為 'zh' | 'en' | 'ja'。 */
export function getLang(input: string | undefined | null): Lang {
  return input === 'en' || input === 'ja' ? input : 'zh';
}

/** 邏輯路徑（不含語言前綴）→ 實際 URL（帶尾斜線，與 sitemap 一致）。zh 無前綴；en、ja 加前綴。 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : '/' + path.replace(/^\/+|\/+$/g, '');
  if (lang === 'zh') return clean === '' ? '/' : clean + '/';
  return clean === '' ? `/${lang}/` : `/${lang}${clean}/`;
}

/** 由目前 pathname 還原不含語言前綴的邏輯路徑。 */
export function toLogicalPath(pathname: string): string {
  let p = (pathname || '/').replace(/\/+$/, '') || '/';
  for (const l of ['en', 'ja']) {
    if (p === '/' + l) return '/';
    if (p.startsWith('/' + l + '/')) p = p.slice(l.length + 1);
  }
  return p || '/';
}

/** 切換語言時對應的另一語版 URL。404 無對應語版，導向該語言首頁。 */
export function switchLocaleHref(pathname: string, target: Lang): string {
  const logical = toLogicalPath(pathname);
  if (logical === '/404') return localizePath('/', target);
  return localizePath(logical, target);
}

/** 判斷導覽連結是否為目前頁（用於 aria-current）。 */
export function isActivePath(pathname: string, logicalPath: string): boolean {
  const current = toLogicalPath(pathname);
  if (logicalPath === '/') return current === '/';
  return current === logicalPath || current.startsWith(logicalPath + '/');
}
