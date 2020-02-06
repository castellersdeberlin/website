<template>
  <div>
    <Gallery/>
    <Videos/>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';
import Videos from '../components/Videos.vue';
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);

export default {
  components: {
    Gallery,
    Videos,
  },
};
</script>
