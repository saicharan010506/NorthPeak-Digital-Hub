import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';

/**
 * Post-build plugin: injects <link rel="preload"> for above-fold woff2 fonts.
 * Preloading Inter 400 (body) and Manrope 800 (hero heading) means the browser
 * fetches them in parallel with CSS during HTML parsing, eliminating the
 * Font-flash window that inflates Speed Index.
 */
function npFontPreloadPlugin(): Plugin {
  let base = '/';
  let outDir = '';

  return {
    name: 'np-font-preload',
    apply: 'build',
    configResolved(config) {
      base = config.base || '/';
      outDir = config.build.outDir as string;
    },
    async closeBundle() {
      const { promises: fsp } = await import('node:fs');
      const htmlPath = path.join(outDir, 'index.html');
      let html = await fsp.readFile(htmlPath, 'utf-8');

      const assetsDir = path.join(outDir, 'assets');
      const files = await fsp.readdir(assetsDir);

      // Only preload the two fonts rendered above the fold
      const criticalPatterns = [
        /^inter-latin-400-normal-.+\.woff2$/,   // body / nav text
        /^manrope-latin-800-normal-.+\.woff2$/, // hero H1 (font-extrabold)
      ];

      const preloads = files
        .filter(f => criticalPatterns.some(re => re.test(f)))
        .map(
          f =>
            `  <link rel="preload" as="font" type="font/woff2" crossorigin href="${base}assets/${f}">`,
        )
        .join('\n');

      if (preloads) {
        html = html.replace('</head>', `${preloads}\n</head>`);
        await fsp.writeFile(htmlPath, html);
        console.log('[np-font-preload] injected font preload hints');
      }
    },
  };
}

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    npFontPreloadPlugin(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
