import ChannelsApi from '@/api/ChannelsApi';
import uniqBy from 'lodash/uniqBy';

export default {
  namespaced: true,

  state: {
    title: 'Аналитика каналов продвижения',
    subtitle: '',
    list: [],
    count: null,
    limit: null,
    pages: null,
    columns: [
      {
        name: 'name',
        text: 'Канал',
        sortable: true,
      },
      {
        name: 'category',
        text: 'Тематика',
        sortable: true,
      },
      {
        name: 'n_subscribers',
        text: 'Аудитория',
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
        const { data } = await ChannelsApi.getList(query);
        commit('setList', uniqBy(data, 'name_id'));
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
