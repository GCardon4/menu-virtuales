// QR por mesa:  SITE_URL=https://tudominio.com npm run qr -- 12   (genera mesas 1..12 en qr/)
// Cada QR apunta a {SITE_URL}/m/{n}; la app detecta el idioma del celular y redirige a /{idioma}/m/{n}.
import QRCode from 'qrcode';
import { mkdirSync } from 'node:fs';

const site = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '');
if (!site) { console.error('Define SITE_URL, ej: SITE_URL=https://carta.midominio.com npm run qr -- 12'); process.exit(1); }
const n = Number(process.argv[2] || 10);
mkdirSync('qr', { recursive: true });
for (let i = 1; i <= n; i++) {
  await QRCode.toFile(`qr/mesa-${i}.png`, `${site}/m/${i}`, { width: 800, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#1c432f', light: '#ffffff' } });
  await QRCode.toFile(`qr/mesa-${i}.svg`, `${site}/m/${i}`, { type: 'svg', margin: 2, errorCorrectionLevel: 'M', color: { dark: '#1c432f', light: '#ffffff' } });
}
console.log(`OK: ${n} QR en tipicos/qr/ -> ${site}/m/{n}`);
