import { notFound } from 'next/navigation';
import { Menu } from '@/components/Menu';
import { buildMetadata } from '@/lib/seo';
import { isLang, isTable } from '@/lib/site';

type P = { params: Promise<{ lang: string; mesa: string }> };

// Página de mesa (destino del QR): /{lang}/m/{n}. No se indexa; canonical -> carta general.
export async function generateMetadata({ params }: P) {
  const { lang, mesa } = await params;
  return isLang(lang) && isTable(mesa) ? buildMetadata(lang, mesa) : {};
}

export default async function Page({ params }: P) {
  const { lang, mesa } = await params;
  if (!isLang(lang) || !isTable(mesa)) notFound();
  return <Menu lang={lang} mesa={String(Number(mesa))} />;
}
