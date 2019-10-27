<template>
  <div>
    <Carousel/>
    <v-container>
      <v-subheader class="display-1 text-center">
        {{ $t('followUs') }}
      </v-subheader>
      <v-row class="theme--dark">
        <v-col>
          <Twitter id="twitter-post"/>
        </v-col>
        <v-col>
          <Facebook id="facebook-post"/>
        </v-col>
        <v-col>
          <Instagram id="instagram-post"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Instagram from '../components/Instagram.vue';
import Twitter from '../components/Twitter.vue';
import Facebook from '../components/Facebook.vue';

export default {
  components: {
    Carousel,
    Twitter,
    Instagram,
    Facebook,
  },
};
</script>

<i18n>
en:
  followUs: Follow us
de:
  followUs: Folge uns
ca:
  followUs: Segueix-nos
</i18n>
