<template>
  <div id="twitter-feed">
    <Timeline :options="{ tweetLimit: '5' }"
              id="CastellsBerlin"
              sourceType="profile"
              data-width="190">
      <div class="spinner"></div>
    </Timeline>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';

export default {
  components: {
    Timeline,
  },
};
</script>

<style lang="scss">
#twitter-feed {
  iframe {
    width: auto !important;
  }
}
</style>
