import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import date from '@/plugins/date';
import { isMocked } from '@/utils/env';
import mockWorker from '@/mocks/browser';

Vue.config.productionTip = false;

Vue.use(date);

if (isMocked()) {
  mockWorker.start({
    serviceWorker: {
      options: {
        scope: '/',
      },
    },
  });
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
