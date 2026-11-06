import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Aggiorna SITE_URL con il dominio finale oppure l'URL GitHub Pages.
const site = process.env.SITE_URL || 'https://USERNAME.github.io';
const base = process.env.BASE_PATH || '/';
export default defineConfig({ site, base, integrations: [sitemap()], output: 'static' });
