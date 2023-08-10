import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/no-named-as-default
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
