<template>
<v-container>
  <h2 class="py-5">
    Videos
  </h2>
  <v-row>
    <v-col
      v-for="(video, i) in videos"
      :key="i"
      cols="6"
      class="col-12 col-md-3 col-lg-4"
      >
      <v-card
      >
        <youtube
          class="video-container"
          :video-id="video"
          :key="i"
          player-width="100%"
        ></youtube>
        <v-card-title
          class="p-2"
        >
        Title
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
        'MtzhaRs6Xzs',
        'LVL7WHGnGqU',
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
  padding-bottom: 56.25%;
  position: relative;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
opacity: .2;
}
</style>
