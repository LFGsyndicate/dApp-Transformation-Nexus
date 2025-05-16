
// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'; // или @vitejs/plugin-react, если вы используете его
import path from 'path';

export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения для текущего режима
  // Третий параметр '' означает, что все переменные будут загружены, а не только те, что начинаются с VITE_
  const env = loadEnv(mode, process.cwd(), '');

  // Получаем имя репозитория из переменной окружения VITE_REPO_NAME (установленной в deploy.yml)
  // Если переменная не установлена (например, при локальной разработке), repoName будет пустой строкой.
  const repoName = env.VITE_REPO_NAME || 'dApp-Transformation-Nexus';

  // Определяем базовый URL для Vite.
  // Если режим 'production' и repoName задан, то base будет '/<repoName>/'.
  // В противном случае (локальная разработка) base будет '/'.
  const viteBase = mode === 'production' && repoName ? `/${repoName}/` : '/';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Устанавливаем базовый URL для сборки
    base: viteBase,
    // Определяем переменные окружения, которые будут доступны в клиентском коде
    // через import.meta.env.VITE_BASE_PATH
    define: {
      'import.meta.env.VITE_BASE_PATH': JSON.stringify(viteBase)
    },
    server: {
      host: '::', // Для доступности в локальной сети, если нужно
      port: 8080, // Можете изменить на свой порт
    },
    build: {
      outDir: 'dist', // Папка для сборки (по умолчанию 'dist')
      assetsDir: 'assets', // Папка для статических ресурсов (по умолчанию 'assets')
      sourcemap: false, // Отключаем sourcemap в production для уменьшения размера сборки
      // Оптимизируем сборку для лучшей производительности на мобильных устройствах
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['@radix-ui/react-slider', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          },
        },
      },
      // Улучшаем сжатие для оптимизации загрузки
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // Ограничиваем размер изображений для оптимальной загрузки
      assetsInlineLimit: 4096, // 4kb
    },
  };
});
