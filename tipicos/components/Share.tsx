'use client';
import { useEffect, useState } from 'react';
import { EXTRA, RESTAURANT, type Lang } from '@/lib/data';
import { useCart } from './CartProvider';
import { Icon } from './Icon';

const btn = 'w-11 h-11 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center hover:bg-surface-container-high transition-colors';

export function Share({ lang, url }: { lang: Lang; url: string }) {
  const x = EXTRA[lang];
  const { notify } = useCart();
  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator !== 'undefined' && !!navigator.share), []);

  const text = x.shareText.replace('{name}', RESTAURANT.name);
  const u = encodeURIComponent(url), t = encodeURIComponent(text);
  const s = RESTAURANT.social;
  const ext = (href: string, label: string, child: React.ReactNode) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={btn}>{child}</a>
  );
  const img = (f: string) => <img src={`/images/${f}`} width={24} height={24} alt="" loading="lazy" />;

  return (
    <section aria-label={x.share} className="px-margin mt-space-lg flex flex-col gap-space-md items-center text-center">
      <div className="flex flex-col items-center gap-space-sm">
        <h4 className="font-title-md text-title-md text-primary">{x.share}</h4>
        <div className="flex items-center gap-space-sm flex-wrap justify-center">
          {ext(`https://wa.me/?text=${t}%20${u}`, 'WhatsApp', img('whatsapp.svg'))}
          {ext(`https://www.facebook.com/sharer/sharer.php?u=${u}`, 'Facebook', img('facebook.svg'))}
          {ext(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, 'X', <Icon name="close" className="text-[22px] text-on-surface" />)}
          {ext(`https://t.me/share/url?url=${u}&text=${t}`, 'Telegram', <Icon name="send" className="text-[22px] text-[#229ED9]" />)}
          <button type="button" aria-label={x.copyLink} className={btn}
            onClick={() => { navigator.clipboard?.writeText(url).catch(() => {}); notify(x.copied); }}>
            <Icon name="link" className="text-[22px] text-on-surface" />
          </button>
          {canShare && (
            <button type="button" aria-label={x.more} className={btn} onClick={() => navigator.share({ title: RESTAURANT.name, text, url }).catch(() => {})}>
              <Icon name="ios_share" className="text-[22px] text-on-surface" />
            </button>
          )}
        </div>
      </div>
      {(s.instagram || s.facebook || s.whatsapp) && (
        <div className="flex flex-col items-center gap-space-sm">
          <h4 className="font-title-md text-title-md text-primary">{x.follow}</h4>
          <div className="flex items-center gap-space-sm">
            {s.instagram && ext(s.instagram, 'Instagram', img('instagram.svg'))}
            {s.facebook && ext(s.facebook, 'Facebook', img('facebook.svg'))}
            {s.whatsapp && ext(s.whatsapp, 'WhatsApp', img('whatsapp.svg'))}
          </div>
        </div>
      )}
    </section>
  );
}
