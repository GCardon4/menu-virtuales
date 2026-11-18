'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LANGS, UI, type Lang } from '@/lib/data';
import { LANG_CODES, pagePath } from '@/lib/site';
import { Icon } from './Icon';

export function LangSwitcher({ lang, mesa }: { lang: Lang; mesa?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  return (
    <div className="relative flex items-center flex-shrink-0">
      <button type="button" aria-haspopup="true" aria-expanded={open} aria-label={UI[lang].language}
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
        className="h-11 px-3 flex items-center gap-1 rounded-full text-on-surface hover:bg-surface-container-high transition-colors">
        <Icon name="translate" className="text-[22px]" /><span className="font-label-md text-label-md">{lang.toUpperCase()}</span>
      </button>
      <nav aria-label={UI[lang].language} className={`${open ? '' : 'hidden'} absolute right-0 top-12 w-44 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/40 overflow-hidden`}>
        {LANG_CODES.map(code => (
          <Link key={code} href={pagePath(code, mesa)} hrefLang={code} lang={code} prefetch={false}
            aria-current={code === lang ? 'true' : undefined}
            className={`w-full px-4 py-3 flex items-center justify-between font-label-lg text-label-lg hover:bg-surface-container ${code === lang ? 'text-primary font-bold bg-surface-container-low' : 'text-on-surface'}`}>
            {LANGS[code]}{code === lang && <Icon name="check" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}
