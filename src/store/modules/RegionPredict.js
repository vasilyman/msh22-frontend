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
        text: 'Позиция/Дефицит',
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
    ],
    exportLink: '#',
    filter: {
      type: 'city',
      product: 'debit',
    },
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
    setFilterProduct(state, product) {
      state.filter = { ...state.filter, product };
    },
    setFilterType(state, type) {
      state.filter = { ...state.filter, type };
    },
  },

  actions: {
    async fetchList({ commit }, query) {
      try {
        const { data } = await RegionPredictApi.getList(query);
        const calcPosition = (cur, pred) => {
          const pos = pred ? 100 - (cur || 0 / pred) * 100 : '';
          return Math.round(pos * 100) / 100;
        };
        const addedPosition = data.map((item) => ({
          ...item,
          position: calcPosition(item.currentClientIndex, item.predictClientIndex),
        }));
        commit('setList', addedPosition);
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
    getFilterProduct(state) {
      return state.filter.product;
    },
    getFilterType(state) {
      return state.filter.type;
    },
    getFilter(state) {
      return state.filter;
    },
  },
};
