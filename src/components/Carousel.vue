<template>
  <v-carousel cycle
              height="700"
              hide-delimiter-background
              show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides"
                     :key="i"
                     :src="`/img/gallery/landscape/${slide}`">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
      ],
    };
  },
};
</script>

<style scoped>

</style>
