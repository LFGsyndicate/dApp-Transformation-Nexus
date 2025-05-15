// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // или @vitejs/plugin-react, если используете его
import path from 'path'

// Имя вашего репозитория
const REPO_NAME = 'dApp-Transformation-Nexus';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Устанавливаем базовый путь.
    // Для GitHub Pages, если развертывание идет в <username>.github.io/<REPO_NAME>/,
    // base должен быть '/<REPO_NAME>/'.
    // Для локальной разработки base должен быть '/'.
    base: mode === 'production' ? `/${REPO_NAME}/` : '/',
    server: {
      host: '::', // Для доступности в локальной сети
      port: 8080, // Ваш текущий порт
    },
    build: {
      outDir: 'dist', // Папка для сборки (по умолчанию 'dist')
    }
  }
})
