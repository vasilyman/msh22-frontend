import RegionsApi from '@/api/RegionsApi';

export default {
  namespaced: true,

  state: {
    list: [],
  },

  mutations: {
    setList(state, data) {
      state.list = data;
    },
  },

  actions: {
    async fetchList({ commit }) {
      try {
        const { data } = await RegionsApi.getColumns();
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
  },
};
