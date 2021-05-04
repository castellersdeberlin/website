<template>
  <div id="main-banner">
    <v-parallax v-if="$vuetify.breakpoint.xsOnly"
                height="600"
                :src="`/img/banner/${slidesMobile[mobilePicIndex].img}`">
      <v-row class="white--text banner-mobile">
        <div class="display-1 banner-text font-weight-bold text-uppercase">
          <p>CASTELLERS</p>
          <p>DE BERLIN</p>
        </div>
        <div class="display-5 banner-author">
          {{ slidesMobile[mobilePicIndex].author }}
        </div>
      </v-row>
    </v-parallax>
    <v-carousel v-else
                height="700"
                cycle
                hide-delimiter-background
                show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides"
                       :key="i"
                       :src="`/img/banner/${slide.img}`">
        <v-row class="white--text">
          <div class="display-3 banner-text font-weight-bold text-uppercase">
            <p>CASTELLERS</p>
            <p>DE BERLIN</p>
          </div>
          <div class="display-5 banner-author">
            {{ slide.author }}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
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
      slidesMobile: [
        {
          img: 'mobile-1.jpg',
          author: '© Carlos Collado',
        },
        {
          img: 'mobile-2.jpg',
        },
      ],
      mobilePicIndex: 0,
    };
  },
  created() {
    this.mobilePicIndex = Math.floor(Math.random() * this.slidesMobile.length);
  },
};
</script>

<style lang="scss">
#main-banner {
  .v-icon {
    color: white;
  }
  .row {
    width: 100%;
    height: 100%;
    padding: 50px;
    &.row.banner-mobile {
      padding-left: 20px;
    }
  }
  .banner-text {
    text-shadow: -0.2px 0 grey, 0 0.2px grey, 0.2px 0 grey, 0 -0.2px grey;
  }
  .banner-author {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
