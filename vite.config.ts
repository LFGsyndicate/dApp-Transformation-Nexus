// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения для текущего режима
  const env = loadEnv(mode, process.cwd(), '');

  // Определяем имя репозитория из переменной окружения VITE_REPO_NAME,
  // если она не установлена, то используем пустую строку (для локальной разработки)
  // или можно установить значение по умолчанию, если вы хотите.
  const repoName = env.VITE_REPO_NAME || '';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: mode === 'production' && repoName ? `/${repoName}/` : '/',
    server: {
      host: '::',
      port: 8080,
    },
    build: {
      outDir: 'dist',
    }
  }
})
