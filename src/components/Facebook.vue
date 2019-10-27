<template>
  <SocialMedia name="Facebook"
               :icon="svgPath">
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCastellersdeBerlin%2Fposts%2F686462381750187&width=500"
            width="100%"
            height="734"
            style="overflow:hidden;border:none"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media">
    </iframe>
  </SocialMedia>
</template>

<script>
import { mdiFacebook } from '@mdi/js';
import SocialMedia from './SocialMedia.vue';

export default {
  data: () => ({
    svgPath: mdiFacebook,
  }),
  components: { SocialMedia },
};
</script>
