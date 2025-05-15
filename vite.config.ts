// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const repoName = env.VITE_REPO_NAME || ''; // Из deploy.yml
  const viteBase = mode === 'production' && repoName ? `/${repoName}/` : '/';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: viteBase,
    // Добавляем переменные окружения, доступные в клиентском коде
    define: {
      'import.meta.env.VITE_BASE_PATH': JSON.stringify(viteBase)
    },
    server: { /* ... */ },
    build: { /* ... */ }
  }
})
