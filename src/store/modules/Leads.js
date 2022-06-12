import countBy from 'lodash/countBy';
import dayjs from '@/utils/date';
import leads from '../../../data/leads.json';

export default {
  namespaced: true,

  state: {
    title: 'Заявки',
    subtitle: '',
    list: [],
    columns: [
      {
        name: 'segment',
        text: 'Доля в портфеле',
        sortable: true,
      },
    ],
    exportLink: '#',
    filter: {},
    countBySource: [],
  },

  mutations: {
    setCountBySource(state, data) {
      state.countBySource = data;
    },
    setColumns(state, data) {
      state.columns = data;
    },
  },

  actions: {
    async fetchCountBySource({ commit }, { dateFrom, dateTo }) {
      try {
        // const { data } = await RegionsApi.getList();
        let filtered = leads;
        if (dateFrom && dateTo) {
          filtered = leads.filter((item) => dayjs(item.date).isBetween(dateFrom, dateTo, 'day', []));
        }
        const countBySource = countBy(filtered, 'utm_source');
        const data = await new Promise((res) => {
          setTimeout(() => res(countBySource), 300);
        });
        commit('setCountBySource', data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getCountBySource(state) {
      return state.countBySource;
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
