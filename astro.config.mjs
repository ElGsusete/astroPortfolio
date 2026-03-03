// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Para GitHub Pages: si el repo no es "username.github.io", la URL es
// https://username.github.io/NOMBRE_REPO/ → base debe ser '/NOMBRE_REPO/'
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});