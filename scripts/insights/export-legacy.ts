import { insights } from '../../src/data/insights.ts';
import { writeFileSync } from 'node:fs';
for (const a of Object.values(insights) as any[]) {
  const { path, ...rest } = a;
  writeFileSync(`src/data/insights/${a.slug}.json`, JSON.stringify(rest, null, 2) + '\n');
  console.log(a.slug, a.published, a.zh.eyebrow);
}
