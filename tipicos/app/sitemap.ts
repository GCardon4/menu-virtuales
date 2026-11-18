import type { MetadataRoute } from 'next';
import { DEFAULT_LANG, LANG_CODES, SITE_URL, pagePath } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LANG_CODES.map(l => [l, SITE_URL + pagePath(l)]));
  languages['x-default'] = SITE_URL + pagePath(DEFAULT_LANG);
  return LANG_CODES.map(l => ({ url: SITE_URL + pagePath(l), changeFrequency: 'weekly', priority: l === DEFAULT_LANG ? 1 : 0.8, alternates: { languages } }));
}
