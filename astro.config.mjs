// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitemapXml } from './src/integrations/sitemap-xml.js';

// 正式對外網域。如改用 apex（https://twouring.com）只需改這一處。
const SITE = 'https://www.twouring.com';
const LASTMOD = new Date('2026-11-03T00:00:00.000Z');

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false, // zh 在 root（/），en 在 /en/
    },
  },
  redirects: {
    // 舊 AI+遠距合併頁 → 企業 AI 導入
    '/services/ai-remote': '/services/ai-consulting',
    '/en/services/ai-remote': '/en/services/ai-consulting',
    '/ja/services/ai-remote': '/ja/services/ai-consulting',
    // 舊週報（搜尋仍可能指向）→ 洞察中心
    '/遊遊週報': '/insights',
    // 注意：勿在此 redirect sitemap-*.xml（會建成目錄，擋住 @astrojs/sitemap 寫檔）
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-Hant-TW',
          en: 'en',
          ja: 'ja',
        },
      },
      serialize(item) {
        item.lastmod = LASTMOD;
        return item;
      },
    }),
    // 必須在 @astrojs/sitemap 之後：產出 /sitemap.xml
    sitemapXml(),
  ],
});

