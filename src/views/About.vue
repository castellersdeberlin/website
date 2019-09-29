<template>
  <div>
    <Timeline/>
    <v-parallax src="../assets/banners/pd3.jpeg"
                height="300"/>
    <Orga/>
  </div>
</template>

<script>
import Orga from '../components/Orga.vue';
import Timeline from '../components/Timeline.vue';

export default {
  components: {
    Timeline,
    Orga,
  },
};
</script>

<style scoped>

</style>
