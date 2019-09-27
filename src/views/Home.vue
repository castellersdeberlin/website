<template>
  <div>
    <InstagramFeed/>
    <TwitterFeed/>
  </div>
</template>

<script>
import InstagramFeed from '../components/InstagramFeed.vue';
import TwitterFeed from '../components/TwitterFeed.vue';

export default {
  components: { TwitterFeed, InstagramFeed },
};
</script>
