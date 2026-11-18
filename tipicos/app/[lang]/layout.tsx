import type { Viewport } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isLang, LANG_CODES } from '@/lib/site';
import '../globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' });

export const viewport: Viewport = { themeColor: '#1c432f', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export function generateStaticParams() {
  return LANG_CODES.map(lang => ({ lang }));
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${jakarta.variable} ${newsreader.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-secondary/20">{children}</body>
    </html>
  );
}
