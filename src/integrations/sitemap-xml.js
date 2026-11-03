/**
 * @astrojs/sitemap 預設產出 sitemap-index.xml + sitemap-0.xml。
 * 此整合在建置後把實際 urlset 複製為 sitemap.xml，並讓 index 指向 sitemap.xml。
 */
import { copyFile, writeFile, access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @returns {import('astro').AstroIntegration} */
export function sitemapXml() {
  return {
    name: 'sitemap-xml',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const chunk = join(root, 'sitemap-0.xml');
        const dest = join(root, 'sitemap.xml');
        const indexPath = join(root, 'sitemap-index.xml');
        try {
          await access(chunk);
        } catch {
          logger.warn('sitemap-0.xml not found; skip sitemap.xml');
          return;
        }
        await copyFile(chunk, dest);

        // 讓既有 sitemap-index 也指向 sitemap.xml（相容舊 Search Console 提交）
        const lastmodMatch = (await readFile(chunk, 'utf8')).match(/<lastmod>([^<]+)<\/lastmod>/);
        const lastmod = lastmodMatch?.[1] ?? new Date().toISOString();
        const indexXml =
          `<?xml version="1.0" encoding="UTF-8"?>` +
          `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
          `<sitemap><loc>https://www.twouring.com/sitemap.xml</loc>` +
          `<lastmod>${lastmod}</lastmod></sitemap>` +
          `</sitemapindex>\n`;
        await writeFile(indexPath, indexXml, 'utf8');

        logger.info('Wrote sitemap.xml; updated sitemap-index.xml → sitemap.xml');
      },
    },
  };
}
