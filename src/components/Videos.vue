<template>
<v-container>
  <h2 class="py-5">
    {{ $t('seccio') }}
  </h2>
  <v-row>
    <v-col
      v-for="(video, i) in videos"
      :key="i"
      cols="3"
      class="col-3 col-md-3 col-lg-4"
      >
      <v-card
      >
        <youtube
          class="video-container"
          :video-id="video.url"
          :key="i"
          player-width="100%"
        ></youtube>
        <v-card-title
          class="v-title"
        >
        {{ video.text }}
        </v-card-title>
        <v-card-text
          class="v-text"
        >
        {{ video.text }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>


<script>
import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed);
export default {
  data() {
    return {
      videos: [
        { url: 'MtzhaRs6Xzs', text: 'RBB Probe' },
        { url: 'LVL7WHGnGqU', text: 'Probe am 6.11.2018' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.col:even {
  .v-card {
    opacity: .4;
  }
}

.video-container {
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  background-color: #000;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: .9;
  background-color: #fcbf43;
}

.v-text {
  font-size: .875rem;
  background-color: #fcbf43;
}

</style>

<i18n>
en:
  seccio: "Videos"
de:
  seccio: "Videos"
ca:
  seccio: "Videos"
</i18n>
