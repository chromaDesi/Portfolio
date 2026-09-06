import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    modulePreload: {
      // The Spline/physics chunks are only ever rendered behind a runtime
      // check (desktop + hover-capable + no reduced-motion, see
      // src/hooks/use-media-query.js). Vite's static analysis can't see
      // that guard: it was listing the ~2MB spline chunk as a dependency
      // of the (always-loaded) Home chunk, so both the static
      // <link rel="modulepreload"> in index.html AND the runtime
      // __vitePreload() helper eagerly fetched it for every visitor,
      // including mobile. Strip spline/physics from every preload
      // dependency list — the real import() call still fetches it on
      // demand the moment a qualifying visitor's component renders it.
      resolveDependencies: (filename, deps) =>
        deps.filter((dep) => !/spline|physics/.test(dep)),
    },
    rollupOptions: {
      output: {
        // NOTE: @splinetool/react-spline is deliberately NOT force-chunked
        // here. It's only ever reached through a dynamic import() gated by
        // a runtime device check (see src/hooks/use-media-query.js). Object
        // -form manualChunks forces a module into one shared named chunk
        // unconditionally, which made Rollup emit *static* `import` side
        // -effect statements pulling that chunk into unrelated chunks
        // (e.g. Aboutme) just to preserve execution order — defeating the
        // runtime gating and shipping ~2MB to every visitor regardless of
        // device. Leaving it out lets Rollup's default splitting keep it
        // as a true on-demand chunk, fetched only by the dynamic import()
        // call sites that actually render it.
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
