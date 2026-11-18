'use client';
import { UI, type Lang } from '@/lib/data';
import { useCart } from './CartProvider';
import { Icon } from './Icon';

export function AssistButtons({ lang }: { lang: Lang }) {
  const { callWaiter } = useCart();
  const u = UI[lang];
  return (
    <section className="px-margin mt-space-xl">
      <div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm text-center items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center"><Icon name="room_service" className="text-[24px]" /></div>
        <div className="flex flex-col">
          <h4 className="font-title-md text-title-md text-primary">{u.assistTitle}</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{u.assistText}</p>
        </div>
        <div className="flex items-center gap-space-sm w-full mt-1">
          <button type="button" onClick={() => callWaiter('consulta')} className="flex-1 py-3 px-4 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5"><Icon name="waving_hand" />{u.callWaiter}</button>
          <button type="button" onClick={() => callWaiter('cuenta')} className="flex-1 py-3 px-4 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5"><Icon name="receipt_long" />{u.askBill}</button>
        </div>
      </div>
    </section>
  );
}
