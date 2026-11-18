// Genera las imágenes para compartir a partir del logo SVG:
//   public/og-image.png (1200x630)  -> WhatsApp, Facebook, X, Telegram, LinkedIn (no aceptan SVG)
//   public/apple-touch-icon.png (180x180)
// Ejecutar cuando cambie el logo:  npm run og
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const logo = readFileSync('public/images/logotipo.svg');
const bg = { r: 255, g: 249, b: 238, alpha: 1 };
const big = await sharp(logo, { density: 200 }).resize({ height: 520, fit: 'inside' }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: bg } }).composite([{ input: big, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile('public/og-image.png');
const small = await sharp(logo, { density: 200 }).resize({ width: 140, height: 140, fit: 'inside' }).png().toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: bg } }).composite([{ input: small, gravity: 'center' }]).png().toFile('public/apple-touch-icon.png');
console.log('OK');
