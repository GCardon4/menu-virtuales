'use client';
import { UI, type Lang } from '@/lib/data';
import { useCart } from './CartProvider';
import { Icon } from './Icon';

export function BottomNav({ lang }: { lang: Lang }) {
  const { setOpen, callWaiter } = useCart();
  const u = UI[lang];
  const base = 'flex flex-col items-center justify-center min-w-[56px] min-h-[44px]';
  return (
    <nav aria-label={u.navMenu} className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(28,67,47,0.07)]">
      <div className="h-16 px-gutter flex items-center justify-around">
        <a href="#cat-entradas" aria-current="page" className={`${base} text-primary font-bold`}>
          <Icon name="restaurant_menu" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-0.5">{u.navMenu}</span>
        </a>
        <button type="button" onClick={() => setOpen(true)} className={`${base} text-on-surface-variant hover:text-on-surface transition-colors`}>
          <Icon name="room_service" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-0.5">{u.navCart}</span>
        </button>
        <button type="button" onClick={() => callWaiter('cuenta')} className={`${base} text-on-surface-variant hover:text-on-surface transition-colors`}>
          <Icon name="receipt_long" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-0.5">{u.navBill}</span>
        </button>
      </div>
    </nav>
  );
}
