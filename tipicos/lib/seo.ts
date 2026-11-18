import type { Metadata } from 'next';
import { CATEGORIES, EXTRA, LOCALES, OG_LOCALE, RESTAURANT, UI, type Lang } from './data';
import { DEFAULT_LANG, LANG_CODES, SITE_URL, itemId, pagePath, sampleImg } from './site';

const OG_IMAGE = '/og-image.png'; // 1200x630 PNG (WhatsApp/Facebook no aceptan SVG) -> npm run og

export function buildMetadata(lang: Lang, mesa?: string): Metadata {
  const title = `${RESTAURANT.name} · ${UI[lang].title}`;
  const description = EXTRA[lang].metaDesc.replace('{name}', RESTAURANT.name);
  const alt = EXTRA[lang].ogAlt.replace('{name}', RESTAURANT.name);
  const canonical = pagePath(lang); // las páginas por mesa apuntan a la general
  return {
    metadataBase: new URL(SITE_URL),
    title, description,
    applicationName: RESTAURANT.name,
    alternates: {
      canonical,
      languages: { ...Object.fromEntries(LANG_CODES.map(l => [l, pagePath(l)])), 'x-default': pagePath(DEFAULT_LANG) },
    },
    robots: mesa ? { index: false, follow: false } : { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
    icons: { icon: '/images/logotipo.svg', apple: '/apple-touch-icon.png' },
    openGraph: {
      type: 'website', siteName: RESTAURANT.name, title, description,
      url: canonical, locale: OG_LOCALE[lang], alternateLocale: LANG_CODES.filter(l => l !== lang).map(l => OG_LOCALE[l]),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, type: 'image/png', alt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [{ url: OG_IMAGE, alt }] },
  };
}

export function jsonLd(lang: Lang) {
  const sameAs = Object.values(RESTAURANT.social).filter(Boolean);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT.name,
    servesCuisine: RESTAURANT.cuisine,
    url: SITE_URL + pagePath(lang),
    image: SITE_URL + OG_IMAGE,
    logo: SITE_URL + '/images/logotipo.svg',
    inLanguage: LOCALES[lang],
    ...(sameAs.length ? { sameAs } : {}),
    hasMenu: {
      '@type': 'Menu', name: UI[lang].title, inLanguage: lang,
      hasMenuSection: CATEGORIES.map(c => ({
        '@type': 'MenuSection', name: c.name[lang],
        hasMenuItem: c.items.map((it, i) => ({
          '@type': 'MenuItem', name: it.name[lang],
          ...((it.includes || it.options) ? { description: (it.includes || it.options)![lang] } : {}),
          image: sampleImg(itemId(c.id, i), 400, 400),
          offers: { '@type': 'Offer', price: it.price, priceCurrency: RESTAURANT.currency },
        })),
      })),
    },
  }).replace(/</g, '\\u003c');
}
