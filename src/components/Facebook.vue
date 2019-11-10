<template>
  <SocialMedia name="Facebook"
               url="https://www.facebook.com/CastellersdeBerlin/"
               icon="mdi-facebook">
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCastellersdeBerlin%2Fposts%2F686462381750187&width=500"
            width="100%"
            height="724"
            style="overflow:hidden;border:none"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media">
    </iframe>
  </SocialMedia>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
  components: { SocialMedia },
};
</script>
