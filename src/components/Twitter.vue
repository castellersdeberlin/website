<template>
  <SocialMedia name="Twitter"
               url="https://twitter.com/CastellsBerlin"
               icon="mdi-twitter">
    <Timeline :options="{ tweetLimit: '1' }"
              id="CastellsBerlin"
              sourceType="profile">
      <div class="spinner"></div>
    </Timeline>
  </SocialMedia>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    SocialMedia,
    Timeline,
  },
};
</script>
