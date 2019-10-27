import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },

  theme: {
    themes: {
      light: {
        primary: '#fcbf43',
        secondary: '#cf2930',
      },
    },
  },
});
