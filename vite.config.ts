// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'; // or @vitejs/plugin-react, if you use it
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Load environment variables for the current mode
  // Third parameter '' means all variables will be loaded, not just those prefixed with VITE_
  const env = loadEnv(mode, process.cwd(), '');

  // Get the repository name from the VITE_REPO_NAME environment variable (set in deploy.yml)
  // If the variable is not set (e.g., during local development), repoName will be the default value
  const repoName = env.VITE_REPO_NAME || 'dApp-Transformation-Nexus';

  // Define the base URL for Vite.
  // If mode is 'production' and repoName is set, then base will be '/<repoName>/'.
  // Otherwise (for local development) base will be '/'.
  const viteBase = mode === 'production' && repoName ? `/${repoName}/` : '/';

  return {
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Set base URL for the build
    base: viteBase,
    // Define environment variables that will be available in client-side code
    // through import.meta.env.VITE_BASE_PATH
    define: {
      'import.meta.env.VITE_BASE_PATH': JSON.stringify(viteBase)
    },
    server: {
      host: '::',
      port: 8080,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false, // Disable sourcemaps in production for smaller build size
      minify: 'esbuild', // Use esbuild for minification
      target: 'es2015',
      // Optimize build for better performance
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['@radix-ui/react-slider', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          },
        },
      },
    },
  };
});
