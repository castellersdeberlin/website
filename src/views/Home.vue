<template>
  <div>
    <Carousel/>
    <div>
      <v-container>
        <v-row class="section-title">
          <v-col>
            <div>
              {{ $t('joinUs') }}
            </div>
            <v-divider class="black"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <RehearsalTuesdays/>
          </v-col>
          <v-col>
            <RehearsalFridays/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="theme--light secondary">
      <v-container>
        <v-row class="section-title">
          <v-col>
            <div class="white--text">
              {{ $t('followUs') }}
            </div>
            <v-divider class="white"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <Twitter id="twitter-post"/>
          </v-col>
          <v-col class="text-center">
            <Facebook id="facebook-post"/>
          </v-col>
          <v-col class="text-center">
            <Instagram id="instagram-post"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Instagram from '../components/Instagram.vue';
import Twitter from '../components/Twitter.vue';
import Facebook from '../components/Facebook.vue';
import RehearsalTuesdays from '../components/RehearsalTuesdays.vue';
import RehearsalFridays from '../components/RehearsalFridays.vue';

export default {
  components: {
    RehearsalFridays,
    RehearsalTuesdays,
    Carousel,
    Twitter,
    Instagram,
    Facebook,
  },
};
</script>

<i18n>
en:
  joinUs: Join us
  followUs: Follow us
de:
  joinUs: Begleiten Sie uns
  followUs: Folge uns
ca:
  joinUs: Uneix-te a nosaltres
  followUs: Segueix-nos
</i18n>
