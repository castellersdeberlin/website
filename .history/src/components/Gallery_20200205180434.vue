<template>
<v-container>
  <h2 class="py-5">
    {{ $t('seccio2') }}
  </h2>
  <v-row>
      <v-col
        v-for="(image, index) in this.galleries"
        :key="index"
        cols=4
        class="col-12 col-md-4 col-lg-3"
      >
        <v-card
            height="100%"
            @click="openGallery(index)"
            :key="index"
        >
          <v-img
            :src="image[0].thumb"
            :key="index"
            class="mx-auto"
            width="360"
            height="240"
          >
          </v-img>
          <v-card-title class="g-title">
            {{ image[0].caption }}
          </v-card-title>
          <v-card-text class="g-text">
            {{ image[0].date }}
          </v-card-text>
        </v-card>
      </v-col>
  </v-row>
  <LightBox
    :images="this.currentGallery[0]"
    ref="lightbox"
    :show-caption="true"
    :show-light-box="true"
  >
  </LightBox>

</v-container>
</template>

<script>
import LightBox from 'vue-image-lightbox';
import siteLoading from './siteloading.gif';

export default {
  components: {
    LightBox,
  },
  data() {
    return {
      currentGallery: [[]],
      galleries: {},
      siteLoading,
    };
  },
  created() {
    return this.fetchData;
  },
  methods: {
    openGallery(index) {
      this.imagesN(index);
      this.$refs.lightbox.showImage(0);
    },
    log(e) {
      console.log(e.currentTarget);
      console.log(e);
    },
    imagesN(index) {
      this.$set(this.currentGallery, 0, Object.values(this.$t('galleries')[index]));
      return this.currentGallery;
    },
  },
  computed: {
    fetchData() {
      // this.galleries = Object.assign({}, this.galleries, this.$t('galleries'));
      this.galleries = { ...this.$t('galleries') };
      // return this.galleries;
    },
  },
};
</script>


<i18n>
en:
  seccio2: "Gallery"
  galleries:
    -
      -
          thumb: '/img/media/galleries/190911_diada/055-thumb.jpg'
          src: '/img/media/galleries/190911_diada/055.jpg'
          caption: 'Performance at FAZ Atrium'
          date: '11th September 2019'
      -
          thumb: '/img/media/galleries/190911_diada/059-thumb.jpg'
          src: '/img/media/galleries/190911_diada/059.jpg'
          caption: 'Performance at FAZ Atrium'
          date: '11th September 2019'
      -
          thumb: '/img/media/galleries/190911_diada/074-thumb.jpg'
          src: '/img/media/galleries/190911_diada/074.jpg'
          caption: 'Performance at FAZ Atrium'
          date: '11th September 2019'
      -
          thumb: '/img/media/galleries/190911_diada/065-thumb.jpg'
          src: '/img/media/galleries/190911_diada/065.jpg'
          caption: 'Performance at FAZ Atrium'
          date: '11th September 2019'
      -
          thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
          src: '/img/media/galleries/190911_diada/066.jpg'
          caption: 'Performance at FAZ Atrium'
          date: '11th September 2019'
      -
          thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
          src: '/img/media/galleries/190911_diada/088.jpg'
          caption: 'Performance at FAZ Atrium'
          date: '11th September 2019'
    -
      -
          thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
          src: '/img/media/galleries/190911_diada/088.jpg'
          caption: ''
          date: ''
    -
      -
          thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
          src: '/img/media/galleries/190911_diada/088.jpg'
          caption: ''
          date: ''
    -
      -
          thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
          src: '/img/media/galleries/190911_diada/088.jpg'
          caption: ''
          date: ''
    -
      -
          thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
          src: '/img/media/galleries/190911_diada/088.jpg'
          caption: ''
          date: ''
de:
  seccio2: "Galerie"
  galleries:
    -
      -
        thumb: '/img/media/galleries/190911_diada/055-thumb.jpg'
        src: '/img/media/galleries/190911_diada/055.jpg'
        caption: 'Aufführung am FAZ Atrium'
        date: '11. September 2019'
      -
        thumb: '/img/media/galleries/190911_diada/059-thumb.jpg'
        src: '/img/media/galleries/190911_diada/059.jpg'
        caption: 'Aufführung am FAZ Atrium'
        date: '11. Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/074-thumb.jpg'
        src: '/img/media/galleries/190911_diada/074.jpg'
        caption: 'Aufführung am FAZ Atrium'
        date: '11. Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/065-thumb.jpg'
        src: '/img/media/galleries/190911_diada/065.jpg'
        caption: 'Aufführung am FAZ Atrium'
        date: '11. Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: 'Aufführung am FAZ Atrium'
        date: '11. Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: 'Aufführung am FAZ Atrium'
        date: '11. Setembre 2019'
    -
      -
        thumb: '/img/media/galleries/190911_diada/099-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
    -
      -
        thumb: '/img/media/galleries/190911_diada/099-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
    -
      -
        thumb: '/img/media/galleries/190911_diada/099-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
    -
      -
        thumb: '/img/media/galleries/190911_diada/099-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
ca:
  seccio2: "Galeria"
  galleries:
    -
      -
        thumb: '/img/media/galleries/190911_diada/055-thumb.jpg'
        src: '/img/media/galleries/190911_diada/055.jpg'
        caption: 'Actuació al FAZ Atrium'
        date: '11 Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/059-thumb.jpg'
        src: '/img/media/galleries/190911_diada/059.jpg'
        caption: 'Actuació al FAZ Atrium'
        date: '11 Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/074-thumb.jpg'
        src: '/img/media/galleries/190911_diada/074.jpg'
        caption: 'Actuació al FAZ Atrium'
        date: '11 Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/065-thumb.jpg'
        src: '/img/media/galleries/190911_diada/065.jpg'
        caption: 'Actuació al FAZ Atrium'
        date: '11 Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: 'Actuació al FAZ Atrium'
        date: '11 Setembre 2019'
      -
        thumb: '/img/media/galleries/190911_diada/088-thumb.jpg'
        src: '/img/media/galleries/190911_diada/088.jpg'
        caption: 'Actuació al FAZ Atrium'
        date: '11 Setembre 2019'
    -
      -
        thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
    -
      -
        thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
    -
      -
        thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
    -
      -
        thumb: '/img/media/galleries/190911_diada/066-thumb.jpg'
        src: '/img/media/galleries/190911_diada/066.jpg'
        caption: ''
        date: ''
</i18n>

<style lang="scss">

.g-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  padding-bottom: .5rem;
  padding-left: 0;
}

.g-text {
  font-size: .875rem;
  padding-left: 0;
}

.v-image__image {
  filter: grayscale(20%);
}

.v-card {
  border: 0;
  box-shadow: none;
}

/* lightbox */
.vue-lb-box {
  width: 100%;
}

.vue-lb-container {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0px;
  padding: 10px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 2000;
  -webkit-align-items: center;
  -moz-box-sizing: border-box;
  -webkit-justify-content: center;
  -ms-flex-align: center;
  -webkit-box-align: center;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
}

.vue-lb-content {
  margin-bottom: 60px;
  max-width: 1024px;
  position: relative;
}

.vue-lb-header {
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  height: 40px;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
}

.vue-lb-button-close {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  top: 0px;
  vertical-align: bottom;
  height: 40px;
  margin-right: -10px;
  padding: 10px;
  width: 40px;
}

.vue-lb-figure {
  margin: 0px;
  display: block;
  position: relative;
}

img.vue-lb-modal-image {
  cursor: pointer;
  max-height: calc(100vh - 140px);
  cursor: pointer;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.vue-lb-info {
  visibility: initial;
  position: absolute;
  bottom: 25px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  height: 40px;
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: center;
}


.vue-lb-footer {
  box-sizing: border-box;
  color: white;
  cursor: auto;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  left: 0px;
  line-height: 1.3;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
  -moz-box-sizing: border-box;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
}

.vue-lb-footer-info {
  display: block;
  flex: 1 1 0;
  -webkit-flex: 1 1 0;
  -ms-flex: 1 1 0;
}

.vue-lb-footer-count {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85em;
  padding-left: 1em;
}

.vue-lb-thumbnail {
  bottom: 10px;
  height: 50px;
  padding: 0 50px;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
  position: relative;
}

.vue-lb-modal-thumbnail {
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.2);
  cursor: pointer;
  display: inline-block;
  height: 50px;
  margin: 2px;
  overflow: hidden;
  width: 50px;
}

.vue-lb-modal-thumbnail-active {
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px white;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  margin: 2px;
  overflow: hidden;
  width: 50px;
}

.vue-lb-thumbnail-arrow {
  height: 54px;
  width: 40px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  position: absolute;
  top: 50%;
  -webkit-touch-callout: none;
  user-select: none;
  height: 50px;
  margin-top: -25px;
  width: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.vue-lb-thumbnail-left {
  left: 10px;
}

.vue-lb-thumbnail-right {
  right: 10px;
}

.vue-lb-arrow {
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  position: absolute;
  top: 50%;
  -webkit-touch-callout: none;
  user-select: none;
  height: 120px;
  margin-top: -60px;
  width: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.vue-lb-left {
  left: 10px;
}

.vue-lb-right {
  right: 10px;
}

.vue-lb-open {
  overflow: hidden;
}

.vue-lb-thumbnail-wrapper {
  bottom: 10px;
  height: 50px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: auto;
}

@media (min-width: 500px) {
  .vue-lb-thumbnail-arrow {
    width: 40px;
  }
}

@media (min-width: 768px) {
  .vue-lb-arrow {
      width: 70px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.no-scroll {
  overflow-y: hidden;
}
</style>
