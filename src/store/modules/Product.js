// import RegionPredictApi from '@/api/RegionPredictApi';
import ProductList from '@/mocks/Products/listData.json';

export default {
  namespaced: true,

  state: {
    list: [],
    count: null,
    limit: null,
    pages: null,
    columns: [],
    exportLink: '#',
  },

  mutations: {
    setList(state, items) {
      state.list = items;
    },
    setColumns(state, data) {
      state.columns = data;
    },
    setItem(state, data) {
      state.item = data;
    },
  },

  actions: {
    async fetchList({ commit }) {
      try {
        // const { data } = await RegionPredictApi.getList(query);
        const data = await new Promise((res) => {
          setTimeout(() => res(ProductList), 200);
        });
        commit('setList', data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getList(state) {
      return state.list;
    },
    getCount(state) {
      return state.count;
    },
    getLimit(state) {
      return state.limit;
    },
    getPages(state) {
      return state.pages;
    },
    getExportLink(state) {
      return state.exportLink;
    },
    getTitle(state) {
      return state.title;
    },
    getSubtitle(state) {
      return state.subtitle;
    },
    getItem(state) {
      return state.item;
    },
    getItemName(state) {
      return state.item?.name;
    },
    getColumns(state) {
      return state.columns;
    },
  },
};
