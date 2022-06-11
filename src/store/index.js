import Vue from 'vue';
import Vuex from 'vuex';

import App from '@/store/modules/app';
import User from '@/store/modules/user';
import ProductData from '@/store/modules/ProductData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    App,
    User,
    ProductData,
  },
});
