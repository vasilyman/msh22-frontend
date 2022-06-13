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
        name: 'theme',
        text: 'Тематика',
        sortable: true,
      },
      {
        name: 'nSubscribers',
        text: 'Аудитория',
        sortable: true,
      },
    ],
    exportLink: '#',
    filter: {
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
    setFilterSubscribers(state, nSubscribers) {
      state.filter = { ...state.filter, nSubscribers };
    },
    setFilterTheme(state, theme) {
      const oldFilter = { ...state.filter };
      if (theme) {
        state.filter = { ...oldFilter, theme };
      } else {
        delete oldFilter.theme;
        state.filter = oldFilter;
      }
    },
  },

  actions: {
    async fetchList({ commit }, query) {
      try {
        const data = uniqBy((await ChannelsApi.getList(query)).data, 'name_id')
          .map((item) => ({
            ...item,
            theme: item.category,
            nSubscribers: item.n_subscribers,
          }));
        delete data.category;
        delete data.n_subscribers;
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
    getFilterSubscribers(state) {
      return state.filter.nSubscribers;
    },
    getFilter(state) {
      return state.filter;
    },
    getMinMaxSub(state) {
      const list = state.list
        ?.map((item) => item.nSubscribers)
        .filter((item) => Number.isInteger(item))
        || [];
      let result = [0, 100];
      if (list.length > 0) {
        result = [Math.min(...list), Math.max(...list)];
      }
      return result;
    },
  },
};
