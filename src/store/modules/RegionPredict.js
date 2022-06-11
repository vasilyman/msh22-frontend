import RegionPredictApi from '@/api/RegionPredictApi';

export default {
  namespaced: true,

  state: {
    title: 'Дефицит присутствия банка в городах',
    subtitle: 'Оценка потенциального объема региональных рынков',
    list: [],
    count: null,
    limit: null,
    pages: null,
    columns: [
      {
        name: 'position',
        text: 'Позиция',
        sortable: true,
      },
      {
        name: 'city',
        text: 'Город',
      },
      {
        name: 'currentClientIndex',
        text: 'Клиентов на 10тыс жителей',
        sortable: true,
      },
      {
        name: 'predictClientIndex',
        text: 'Прогноз на 10 тыс.жителей',
        sortable: true,
      },
      {
        name: 'predictArpu',
        text: 'Прогноз прироста ARPU, млн.руб',
        sortable: true,
      },
    ],
    exportLink: '#',
    filter: {},
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
    setFilterSearch(state, search) {
      state.filter = { ...state.filter, search };
    },
    setFilterTheme(state, theme) {
      state.filter = { ...state.filter, theme };
    },
    setFilterType(state, type) {
      state.filter = { ...state.filter, type };
    },
  },

  actions: {
    async fetchList({ commit }, query) {
      try {
        const { data } = await RegionPredictApi.getList(query);
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
    getFilterSearch(state) {
      return state.filter.search;
    },
    getFilterTheme(state) {
      return state.filter.theme;
    },
    getFilterType(state) {
      return state.filter.type;
    },
    getFilter(state) {
      return state.filter;
    },
  },
};
