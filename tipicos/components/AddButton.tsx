'use client';
import { UI } from '@/lib/data';
import { useCart } from './CartProvider';
import { Icon } from './Icon';

export function AddButton({ id, price, name }: { id: string; price: number; name: string }) {
  const { add, lang } = useCart();
  return (
    <button type="button" data-price={price} aria-label={`${UI[lang].add}: ${name}`} onClick={() => add(id)}
      className="h-10 px-4 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 hover:bg-primary-container active:scale-95 transition-all shadow-sm">
      <Icon name="add" />{UI[lang].add}
    </button>
  );
}
