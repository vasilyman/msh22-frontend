export default {
  namespaced: true,

  state: {
    title: 'Рекомендательный сервис УРАЛСИБ',
    drawer: false,
    drawerRight: false,
    menu: [
      {
        name: 'index',
        text: 'Главная',
      },
      {
        name: 'channels',
        text: 'Каналы',
      },
      {
        name: 'combine',
        text: 'Создать кампанию',
      },
      {
        name: 'region',
        text: 'Региональный анализ',
      },
      {
        name: 'contacts',
        text: 'Контакты',
      },
    ],
    currentMenu: 'index',
    drawerRightComponent: null,
    drawerRightProps: {},
  },

  mutations: {
    setTitle(state, data) {
      state.title = data;
    },
    setDrawer(state, data) {
      state.drawer = data;
    },
    setDrawerRight(state, data) {
      state.drawerRight = data;
    },
    setDrawerRightComponent(state, data) {
      state.drawerRightComponent = data;
    },
    setDrawerRightProps(state, data) {
      state.drawerRightProps = data || {};
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
    getDrawerRight(state) {
      return state.drawerRight;
    },
    getMenu(state) {
      return state.menu;
    },
    getCurrentMenu(state) {
      return state.currentMenu;
    },
    getDrawerRightComponent(state) {
      return state.drawerRightComponent;
    },
    getDrawerRightProps(state) {
      return state.drawerRightProps;
    },
  },
};
