import { LANGS, type Lang } from './data';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');
export const DEFAULT_LANG: Lang = 'es';
export const LANG_CODES = Object.keys(LANGS) as Lang[];
export const isLang = (v: string): v is Lang => v in LANGS;
export const MAX_TABLE = 99;
export const isTable = (v: string) => /^\d{1,2}$/.test(v) && Number(v) >= 1 && Number(v) <= MAX_TABLE;

export const pagePath = (lang: Lang, mesa?: string) => `/${lang}${mesa ? `/m/${mesa}` : ''}`;

export function formatPrice(n: number, lang: Lang, locale: string) {
  // En español: $25.000. En otros idiomas se muestra "COP" para no confundir con USD.
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency: 'COP', currencyDisplay: lang === 'es' ? 'narrowSymbol' : 'code', maximumFractionDigits: 0,
  }).format(n).replace(/ /g, ' ');
}

// TODO: reemplazar por las fotos reales de cada plato
export const sampleImg = (seed: string, w: number, h: number) => `https://picsum.photos/seed/tipicos-${seed}/${w}/${h}`;
export const itemId = (catId: string, i: number) => `${catId}-${i}`;
