<template>
  <div>
    <Videos/>
    <Gallery/>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';
import Videos from '../components/Videos.vue';

export default {
  components: {
    Gallery,
    Videos,
  },
};
</script>
