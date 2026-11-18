import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LANG, LANG_CODES } from '@/lib/site';

// Un QR por mesa: /m/4 -> detecta el idioma del celular del cliente y redirige a /{lang}/m/4
function pickLang(req: NextRequest) {
  const header = req.headers.get('accept-language') || '';
  for (const part of header.split(',')) {
    const code = part.trim().split(/[;-]/)[0].toLowerCase();
    const hit = LANG_CODES.find(l => l === code);
    if (hit) return hit;
  }
  return DEFAULT_LANG;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split('/')[1];
  if ((LANG_CODES as string[]).includes(first)) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/${pickLang(req)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // excluye _next, api y archivos con extensión (imágenes, robots, sitemap)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
