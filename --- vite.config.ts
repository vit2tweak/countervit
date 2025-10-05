import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Include .tsx files
      include: "**/*.{jsx,tsx}",
    })
  ],
  
  // Development server configuration
  server: {
    port: 5173,
    host: true, // Allow external connections
    open: true, // Automatically open browser
    cors: true,
    // HMR configuration
    hmr: {
      overlay: true
    }
  },

  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    // Generate sourcemaps for production debugging
    sourcemap: true,
    // Minify using esbuild (faster than terser)
    minify: 'esbuild',
    // Target modern browsers
    target: 'esnext',
    // Rollup options
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          let extType = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          } else if (/woff|woff2/.test(extType)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        // Entry file naming
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000
  },

  // Preview server configuration (for production build preview)
  preview: {
    port: 4173,
    host: true,
    open: true
  },

  // Path resolution
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types')
    }
  },

  // CSS configuration
  css: {
    // CSS modules configuration
    modules: {
      localsConvention: 'camelCase'
    },
    // PostCSS configuration
    postcss: {},
    // CSS preprocessing
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    },
    // Development source maps
    devSourcemap: true
  },

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },

  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: []
  },

  // ESBuild configuration
  esbuild: {
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // JSX configuration
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },

  // Base public path
  base: './',

  // Public directory
  publicDir: 'public',

  // Clear screen on rebuild
  clearScreen: false,

  // Log level
  logLevel: 'info'
})