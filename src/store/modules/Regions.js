import regionsData from '@/mocks/Regions/RegionsData.json';

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
        // const { data } = await RegionsApi.getList();
        const data = await new Promise((res) => {
          setTimeout(() => res(regionsData), 300);
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
  },
};
