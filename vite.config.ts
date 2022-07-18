import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: [
            { find: '::root', replacement: 'src' },
            { find: '@pages', replacement: 'src/pages' },
            {
                find: '@assets',
                replacement: 'src/assets',
            },
        ],
    },
    server: {
        host: '127.0.0.1',
        port: 3002,
        strictPort: true,
        open: true,
        proxy: {
            '^/api/.*': {
                target: 'http://api.jeffrey.me',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
