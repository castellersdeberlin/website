<template>
  <v-carousel id="main-banner"
              height="700"
              cycle
              hide-delimiter-background
              show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides"
                     :key="i"
                     :src="`/img/gallery/landscape/${slide.img}`">
      <v-overlay absolute
                 opacity="0.25"
                 color="grey">
        <div class="display-3 banner-text font-weight-bold text-uppercase">
          <p>CASTELLERS</p>
          <p>DE BERLIN</p>
        </div>
        <div class="display-5 banner-author">
          {{ slide.author }}
        </div>
      </v-overlay>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          img: '1.jpg',
        },
        {
          img: '2.jpg',
        },
        {
          img: '3.jpg',
          author: '© Carlos Collado',
        },
        {
          img: '4.jpg',
          author: '© Carlos Collado',
        },
        {
          img: '5.jpg',
          author: '© Carlos Collado',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#main-banner {
  .v-overlay__content {
    width: 100%;
    height: 100%;
    padding: 50px;
  }
  .banner-text {
    text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
  }
  .banner-author {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
