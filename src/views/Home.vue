<template>
  <div>
    <Carousel/>
    <InstagramFeed/>
    <TwitterFeed/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import InstagramFeed from '../components/InstagramFeed.vue';
import TwitterFeed from '../components/TwitterFeed.vue';

export default {
  components: {
    Carousel,
    TwitterFeed,
    InstagramFeed,
  },
};
</script>
