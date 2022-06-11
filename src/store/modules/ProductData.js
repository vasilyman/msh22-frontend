import ProductDataApi from '@/api/ProductDataApi';

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
    setList(state, { items, limit, count }) {
      const pages = (count / limit) - (count % limit);

      state.list = items;
      state.count = count;
      state.limit = limit;
      state.pages = pages;
    },
    setColumns(state, data) {
      state.columns = data;
    },
  },

  actions: {
    async fetchList({ commit }, query) {
      try {
        const { data } = await ProductDataApi.getList(query);
        commit('setList', data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchColumns({ commit }) {
      try {
        const { data } = await ProductDataApi.getColumns();
        commit('setColumns', data);
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
    getColumns(state) {
      return state.columns;
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
  },
};
