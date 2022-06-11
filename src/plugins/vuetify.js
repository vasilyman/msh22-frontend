import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    themes: {
      light: {
        primary: '#0063CE',
        secondary: '#EAEFFC',
        accent: '#0E3263',
        base: '#0E3263',
      },
    },
  },
});
