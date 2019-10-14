<template>
<v-container>
  <h2 class="py-5">
    Videos
  </h2>
  <v-row>
    <v-col
      v-for="(video, i) in videos"
      :key="i"
      cols="3"
      class="col-3 col-md-3 col-lg-4"
      >
      <v-card
        outlined=true
      >
        <youtube
          class="video-container"
          :video-id="video.url"
          :key="i"
          player-width="100%"
        ></youtube>
        <v-card-title
          class="p-2"
        >
        {{ video.text }}
        </v-card-title>
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
  padding-bottom: 100.25%;
  position: relative;
  padding-top: 30px;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
