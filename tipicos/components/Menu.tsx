import { CATEGORIES, EXTRA, LOCALES, RESTAURANT, UI, type Lang } from '@/lib/data';
import { SITE_URL, formatPrice, itemId, pagePath, sampleImg } from '@/lib/site';
import { jsonLd } from '@/lib/seo';
import { AddButton } from './AddButton';
import { BottomNav } from './BottomNav';
import { CartProvider } from './CartProvider';
import { CategoryNav } from './CategoryNav';
import { Icon } from './Icon';
import { LangSwitcher } from './LangSwitcher';
import { OrderBar } from './OrderBar';
import { Share } from './Share';
import { AssistButtons } from './AssistButtons';

// Server Component: todo el contenido de la carta sale renderizado en el HTML (SSR).
export function Menu({ lang, mesa }: { lang: Lang; mesa?: string }) {
  const u = UI[lang];
  const x = EXTRA[lang];
  const money = (n: number) => formatPrice(n, lang, LOCALES[lang]);

  return (
    <CartProvider lang={lang} mesa={mesa}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(lang) }} />
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(2,45,26,0.06)]">
        <div className="h-20 px-margin flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <img src="/images/logotipo.svg" alt={RESTAURANT.name} width={46} height={40} className="h-10 w-auto object-contain flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="font-title-md text-title-md text-primary tracking-tight truncate">{RESTAURANT.name}</span>
                {mesa && <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm flex-shrink-0">{x.tableLabel} {mesa}</span>}
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{u.subtitle}</span>
            </div>
          </div>
          <LangSwitcher lang={lang} mesa={mesa} />
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-20 pb-20 bg-surface">
        <div className="flex flex-col w-full pb-24">
          <section className="px-margin pt-space-sm pb-space-md">
            <div className="bg-surface-container rounded-xl p-space-md shadow-sm relative overflow-hidden flex items-center justify-between gap-space-sm">
              <div className="flex flex-col z-10">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">{u.kicker}</span>
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mt-0.5">{u.title}</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{u.tagline}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest p-2 shadow-sm flex-shrink-0 flex items-center justify-center z-10">
                <img src="/images/logotipo.svg" alt="" width={64} height={64} className="w-full h-full object-contain" />
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary-fixed/40 rounded-full blur-2xl pointer-events-none" />
            </div>
          </section>

          <CategoryNav lang={lang} />

          {CATEGORIES.map((c, ci) => (
            <section key={c.id} id={`cat-${c.id}`} className={`px-margin ${ci === 0 ? 'mt-space-md' : 'mt-space-xl'} scroll-mt-36`}>
              <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-sm mb-space-md bg-primary-container">
                <img src={sampleImg(c.id, 800, 320)} width={800} height={320} alt={c.name[lang]} decoding="async"
                  {...(ci === 0 ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-space-md">
                  <span className="self-start px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm mb-1">{c.tag[lang]}</span>
                  <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary">{c.name[lang]}</h2>
                </div>
              </div>
              {c.note && <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm flex items-start gap-1"><Icon name="info" className="text-[16px] text-secondary" />{c.note[lang]}</p>}
              <div className="flex flex-col gap-space-sm">
                {c.items.map((it, ii) => (
                  <article key={ii} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs">
                    <div className="flex items-start gap-space-sm">
                      <img src={sampleImg(itemId(c.id, ii), 160, 160)} width={160} height={160} alt={it.name[lang]} loading="lazy" decoding="async" className="w-20 h-20 rounded-lg object-cover flex-shrink-0 bg-surface-container" />
                      <div className="flex flex-col flex-1 min-w-0">
                        <h3 className="font-title-md text-title-md text-primary">{it.name[lang]}</h3>
                        {it.includes && <p className="font-body-md text-body-md text-on-surface-variant mt-1"><span className="font-semibold">{u.includes}:</span> {it.includes[lang]}</p>}
                        {it.options && <p className="font-body-md text-body-md text-on-surface-variant mt-1"><span className="font-semibold">{u.options}:</span> {it.options[lang]}</p>}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="font-title-lg text-title-lg text-primary font-bold">{money(it.price)}</span>
                      <AddButton id={itemId(c.id, ii)} price={it.price} name={it.name[lang]} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <AssistButtons lang={lang} />
          <Share lang={lang} url={SITE_URL + pagePath(lang)} />
        </div>
        <OrderBar />
      </main>
      <BottomNav lang={lang} />
    </CartProvider>
  );
}
