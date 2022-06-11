import ChannelBag from '@/mocks/ChannelBag/listData.json';

export default {
  namespaced: true,

  state: {
    title: 'Страница подбора',
    subtitle: '',
    list: [],
    columns: [
      {
        name: 'segment',
        text: 'Доля в портфеле',
        sortable: true,
      },
      {
        name: 'source',
        text: 'Площадка',
        sortable: true,
      },
      {
        name: 'channel',
        text: 'Канал',
        sortable: true,
      },
      {
        name: 'cpm',
        text: 'CPM, стоимость 1000 просмотров',
        sortable: true,
      },
      {
        name: 'posts',
        text: 'Закупка постов/страниц, шт.',
        sortable: true,
      },
      {
        name: 'cpl',
        text: 'CPL, Стоимость заявки',
        sortable: true,
      },
      {
        name: 'appliedFormCountPrediction',
        text: 'Ожидается заявок',
        sortable: true,
      },
    ],
    exportLink: '#',
    filter: {},
  },

  mutations: {
    setList(state, data) {
      state.list = data;
    },
    setColumns(state, data) {
      state.columns = data;
    },
  },

  actions: {
    async fetchList({ commit }) {
      try {
        // const { data } = await RegionsApi.getList();
        const data = await new Promise((res) => {
          setTimeout(() => res(ChannelBag), 300);
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
    getColumns(state) {
      return state.columns;
    },
    getTitle(state) {
      return state.title;
    },
    getSubtitle(state) {
      return state.subtitle;
    },
    getExportLink(state) {
      return state.exportLink;
    },
  },
};
