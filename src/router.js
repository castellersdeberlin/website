import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Calendar from './views/Calendar.vue';
import About from './views/About.vue';
import Banner from './views/Banner.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        banner: Banner,
      },
      props: {
        banner: {
          url: '/img/banners/pd3.jpeg',
        },
      },
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
