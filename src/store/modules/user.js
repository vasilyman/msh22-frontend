import UserApi from '@/api/UserApi';

export default {
  namespaced: true,

  state: {
    user: {},
  },

  mutations: {
    setUser(state, data) {
      state.user = data;
    },
  },

  actions: {
    async fetchUser({ commit }, id) {
      try {
        const res = await UserApi.getUser(id);
        commit('setUser', res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getFullname(state) {
      const { firstname, lastname } = state.user;
      return [firstname, lastname].join(' ');
    },
    getAvatar(state) {
      return state.user.avatar;
    },
    getIsAuthenticated(state) {
      return !!state.user.id;
    },
  },
};
