<template>
  <v-container>
    <h2 class="py-5">
      {{ $t('seccio') }}
    </h2>
    <v-row>
      <v-col v-for="(video, i) in this.videos"
             :key="i"
             cols="3"
             class="col-3 col-md-4 col-lg-3">
        <v-card>
          <youtube :video-id="video.url"
                   :key="i"
                   player-width="100%"
                   class="video-container"/>
          <v-card-title class="v-title">
            {{ video.text }}
          </v-card-title>
          <v-card-text class="v-text">
            {{ video.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
    };
  },
  created: {
    this.fetchData;
  },
  computed: {
    fetchData(){
      const tvideos = this.$t('videos');
      return this.videos = [...tvideos];
    },
  }
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
    padding-bottom: 150%;
    position: relative;
    background-color: #000;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }

  .v-title {
    font-size: 1rem;
    font-weight: 700;
    line-height: .9;
  }

  .v-text {
    font-size: .875rem;
  }

  .v-card {
    border: 0;
    box-shadow: none;
  }
</style>

<i18n>
en:
  seccio: "Videos"
  videos:
    -
      url: 'MtzhaRs6Xzs'
      text: 'RBB Performace'
    -
      url: 'LVL7WHGnGqU'
      text: 'Rehearsal 6.11.2018'
de:
  seccio: "Videos"
  videos:
    -
      url: 'MtzhaRs6Xzs'
      text: 'RBB Aufführung'
    -
      url: 'LVL7WHGnGqU'
      text: 'Probe 6.11.2018'
ca:
  seccio: "Videos"
  videos:
    -
      url: 'MtzhaRs6Xzs'
      text: 'Actuació RBB'
    -
      url: 'LVL7WHGnGqU'
      text: 'Assaig 6.11.2018'
</i18n>
