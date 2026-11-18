'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { CATEGORIES, EXTRA, LOCALES, UI, type Lang } from '@/lib/data';
import { formatPrice, itemId } from '@/lib/site';

type Lines = Record<string, number>;
const KEY = 'tipicos-cart';

// Catálogo plano id -> plato (el id es "categoria-indice")
const CATALOG = Object.fromEntries(CATEGORIES.flatMap(c => c.items.map((it, i) => [itemId(c.id, i), it] as const)));

interface Ctx {
  lang: Lang; mesa?: string;
  lines: Lines; count: number; total: number;
  add: (id: string) => void; dec: (id: string) => void; remove: (id: string) => void; clear: () => void;
  money: (n: number) => string;
  open: boolean; setOpen: (v: boolean) => void;
  notify: (msg: string) => void;
  callWaiter: (type: 'consulta' | 'cuenta') => void;
}
const CartCtx = createContext<Ctx | null>(null);
export const useCart = () => { const c = useContext(CartCtx); if (!c) throw new Error('CartProvider missing'); return c; };

export function CartProvider({ lang, mesa, children }: { lang: Lang; mesa?: string; children: ReactNode }) {
  const [lines, setLines] = useState<Lines>({});
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [ready, setReady] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const u = { ...UI[lang], ...EXTRA[lang] };

  // Carga (solo en el cliente, para no romper la hidratación del SSR)
  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '{}') as Lines;
      setLines(Object.fromEntries(Object.entries(raw).filter(([id, q]) => id in CATALOG && q > 0)));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => { if (ready) try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch {} }, [lines, ready]);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 2200);
  }, []);

  const value = useMemo<Ctx>(() => {
    const count = Object.values(lines).reduce((s, q) => s + q, 0);
    const total = Object.entries(lines).reduce((s, [id, q]) => s + (CATALOG[id]?.price ?? 0) * q, 0);
    const tag = mesa ? ` · ${u.tableLabel} ${mesa}` : '';
    return {
      lang, mesa, lines, count, total, open, setOpen, notify,
      money: n => formatPrice(n, lang, LOCALES[lang]),
      add: id => { setLines(l => ({ ...l, [id]: (l[id] || 0) + 1 })); notify(`"${CATALOG[id].name[lang]}" ${u.added}`); },
      dec: id => setLines(l => { const q = (l[id] || 0) - 1; const n = { ...l }; if (q > 0) n[id] = q; else delete n[id]; return n; }),
      remove: id => setLines(l => { const n = { ...l }; delete n[id]; return n; }),
      clear: () => setLines({}),
      callWaiter: type => notify((type === 'cuenta' ? u.billSent : u.waiterSent).replace('{t}', tag)),
    };
  }, [lines, open, lang, mesa, notify, u]);

  return (
    <CartCtx.Provider value={value}>
      {children}
      <div role="status" aria-live="polite" className={`fixed top-24 left-1/2 -translate-x-1/2 z-[70] bg-primary text-on-primary px-4 py-2 rounded-full shadow-lg font-label-md text-label-md flex items-center gap-2 pointer-events-none transition-all duration-300 max-w-[90vw] ${toast ? 'opacity-100' : 'opacity-0'}`}>
        <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" aria-hidden="true">check_circle</span>
        <span>{toast}</span>
      </div>
    </CartCtx.Provider>
  );
}
