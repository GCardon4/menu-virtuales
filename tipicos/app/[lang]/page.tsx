import { notFound } from 'next/navigation';
import { Menu } from '@/components/Menu';
import { buildMetadata } from '@/lib/seo';
import { isLang } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return isLang(lang) ? buildMetadata(lang) : {};
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Menu lang={lang} />;
}
