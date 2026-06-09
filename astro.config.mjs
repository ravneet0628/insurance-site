import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [icon()],
});
