'use client';
import { useEffect, useState } from 'react';
import { CATEGORIES, UI, type Lang } from '@/lib/data';
import { Icon } from './Icon';

export function CategoryNav({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const onScroll = () => {
      let cur = CATEGORIES[0].id;
      for (const c of CATEGORIES) {
        const el = document.getElementById('cat-' + c.id);
        if (el && el.getBoundingClientRect().top <= 180) cur = c.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav aria-label={UI[lang].navMenu} className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md pt-space-xs pb-space-sm px-margin">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
        {CATEGORIES.map(c => (
          <a key={c.id} href={`#cat-${c.id}`}
            onClick={e => { e.preventDefault(); document.getElementById('cat-' + c.id)?.scrollIntoView({ behavior: 'smooth' }); setActive(c.id); }}
            className={`px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-all flex items-center gap-1.5 ${active === c.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>
            <Icon name={c.icon} className="text-[16px]" />{c.name[lang]}
          </a>
        ))}
      </div>
    </nav>
  );
}
