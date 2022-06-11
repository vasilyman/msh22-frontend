export default {
  namespaced: true,

  state: {
    title: 'Рекомендательный сервис УРАЛСИБ',
    drawer: false,
    menu: [
      {
        name: 'index',
        text: 'Главная',
      },
      {
        name: 'region',
        text: 'Региональный анализ',
      },
      {
        name: 'about',
        text: 'О проекте',
      },
      {
        name: 'contacts',
        text: 'Контакты',
      },
    ],
    currentMenu: 'index',
  },

  mutations: {
    setTitle(state, data) {
      state.title = data;
    },
    setDrawer(state, data) {
      state.drawer = data;
    },
    setCurrentMenu(state, data) {
      state.currentMenu = data;
    },
  },

  actions: {},

  getters: {
    getTitle(state) {
      return state.title;
    },
    getDrawer(state) {
      return state.drawer;
    },
    getMenu(state) {
      return state.menu;
    },
    getCurrentMenu(state) {
      return state.currentMenu;
    },
  },
};
