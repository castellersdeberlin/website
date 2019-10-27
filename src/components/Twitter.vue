<template>
  <SocialMedia name="Twitter"
               :icon="svgPath">
    <Timeline :options="{ tweetLimit: '1' }"
              id="CastellsBerlin"
              sourceType="profile">
      <div class="spinner"></div>
    </Timeline>
  </SocialMedia>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';
import { mdiTwitter } from '@mdi/js';
import SocialMedia from './SocialMedia.vue';

export default {
  data: () => ({
    svgPath: mdiTwitter,
  }),

  components: {
    SocialMedia,
    Timeline,
  },
};
</script>
