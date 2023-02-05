import { router } from '@pages/router';
// import '@styles/index.less';
import { createApp } from 'vue';
import App from './App';

createApp(App).use(router).mount('#app');
