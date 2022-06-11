import ClientDataApi from '@/api/ClientDataApi';

export default {
  namespaced: true,

  state: {},

  mutations: {},

  actions: {
    async uploadFile(file) {
      try {
        const data = new FormData();
        data.append('file', file);
        await ClientDataApi.upload(data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {},
};
