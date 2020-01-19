import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
});

i18n.vm.$watch('locale', (locale) => {
  document.documentElement.lang = locale;
  localStorage.setItem('lang', locale);
});

export default i18n;
