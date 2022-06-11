import date from '@/utils/date';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$date = date;
  },
};
