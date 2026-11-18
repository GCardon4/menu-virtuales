'use client';
import { CATEGORIES, EXTRA, UI } from '@/lib/data';
import { itemId } from '@/lib/site';
import { useCart } from './CartProvider';
import { Icon } from './Icon';

const CATALOG = Object.fromEntries(CATEGORIES.flatMap(c => c.items.map((it, i) => [itemId(c.id, i), it] as const)));

export function OrderBar() {
  const { lang, count, total, money, setOpen } = useCart();
  const u = UI[lang];
  return (
    <>
      <aside id="orderBar" className="fixed bottom-16 left-0 right-0 z-40 px-margin pb-2 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto bg-primary text-on-primary rounded-2xl p-3 shadow-xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center flex-shrink-0">
              <Icon name="restaurant" className="text-secondary-fixed text-[22px]" />
              <span className="absolute -top-1.5 -right-1.5 bg-secondary text-on-secondary font-label-sm text-label-sm w-5 h-5 rounded-full flex items-center justify-center font-bold">{count}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wide">{u.myOrder}</span>
              <span className="font-title-lg text-title-lg font-bold text-on-primary">{money(total)}</span>
            </div>
          </div>
          <button type="button" onClick={() => setOpen(true)} className="h-11 px-5 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md flex items-center gap-1.5 hover:bg-secondary-container transition-colors shadow-md active:scale-95">
            <span>{u.viewOrder}</span><Icon name="arrow_forward" />
          </button>
        </div>
      </aside>
      <OrderSheet />
    </>
  );
}

function OrderSheet() {
  const { lang, mesa, lines, total, money, open, setOpen, add, dec, remove, clear } = useCart();
  const x = { ...UI[lang], ...EXTRA[lang] };
  const ids = Object.keys(lines);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center" role="dialog" aria-modal="true" aria-label={x.orderTitle}>
      <button type="button" aria-label={x.close} className="absolute inset-0 bg-on-surface/40" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-md bg-surface rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col pb-safe">
        <div className="flex items-center justify-between px-margin pt-space-md pb-space-sm">
          <div className="flex flex-col">
            <h2 className="font-headline-sm text-headline-sm text-primary">{x.orderTitle}</h2>
            {mesa && <span className="font-label-md text-label-md text-secondary">{x.tableLabel} {mesa}</span>}
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label={x.close} className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center"><Icon name="close" className="text-[22px]" /></button>
        </div>
        <div className="overflow-y-auto px-margin flex-1">
          {ids.length === 0 ? (
            <p className="font-body-md text-body-md text-on-surface-variant py-space-lg text-center">{x.emptyShort}</p>
          ) : (
            <ul className="flex flex-col divide-y divide-outline-variant/40">
              {ids.map(id => (
                <li key={id} className="py-space-sm flex items-center gap-space-sm">
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-title-md text-title-md text-primary">{CATALOG[id].name[lang]}</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">{money(CATALOG[id].price)}</span>
                  </div>
                  <div className="flex items-center gap-1" aria-label={x.qty}>
                    <button type="button" onClick={() => dec(id)} aria-label="−" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center"><Icon name="remove" /></button>
                    <span className="w-6 text-center font-label-lg text-label-lg">{lines[id]}</span>
                    <button type="button" onClick={() => add(id)} aria-label="+" className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center"><Icon name="add" /></button>
                  </div>
                  <button type="button" onClick={() => remove(id)} aria-label={x.remove} className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"><Icon name="delete" /></button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="px-margin py-space-md border-t border-outline-variant/40 flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-title-md text-title-md text-on-surface-variant">{x.total}</span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">{money(total)}</span>
          </div>
          {ids.length > 0 && (
            <>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-1"><Icon name="info" className="text-[16px] text-secondary" />{x.orderHint}</p>
              <button type="button" onClick={clear} className="self-start font-label-md text-label-md text-secondary underline">{x.remove} · {x.myOrder}</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
