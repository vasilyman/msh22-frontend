import Vue from 'vue';
import Vuex from 'vuex';

import App from '@/store/modules/app';
import User from '@/store/modules/user';
import Product from '@/store/modules/Product';
import RegionPredict from '@/store/modules/RegionPredict';
import ClientData from '@/store/modules/ClientData';
import Regions from '@/store/modules/Regions';
import ChannelBag from '@/store/modules/ChannelBag';

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
    Product,
    RegionPredict,
    ClientData,
    Regions,
    ChannelBag,
  },
});
