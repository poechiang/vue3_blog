import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@pages': resolve(__dirname, './src/pages'),
            '@common': resolve(__dirname, './src/common'),
            '@components': resolve(__dirname, './src/components'),
            '@images': resolve(__dirname, './src/assets/images'),
            '@styles': resolve(__dirname, './src/assets/styles'),
        },

        extensions: ['less', '.js', '.vue', '.json', '.ts', '.d.ts', '.tsx', '.less'],
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    server: {
        host: '127.0.0.1',
        port: 3002,
        strictPort: true,
        hmr: { clientPort: 3002 },
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
