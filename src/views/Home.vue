<template>
  <div>
    <Banner/>
    <div>
      <Info/>
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
    <div class="theme--light secondary hidden-xs-only">
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
    <div class="theme--light primary">
      <v-container>
        <v-row class="section-title">
          <v-col>
            <div class="black--text">
              {{ $t('withSupport') }}
            </div>
            <v-divider class="black"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center invert">
            <v-btn v-for="sponsor in sponsors"
                   :key="sponsor.url"
                   :href="sponsor.url"
                   text
                   height="150"
                   width="150"
                   class="ml-5 mr-5">
              <v-img :src="require(`../assets/${sponsor.icon}`)"
                     :alt="sponsor.name"
                     height="140"
                     width="140">
              </v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Instagram from '../components/Instagram.vue';
import Twitter from '../components/Twitter.vue';
import Facebook from '../components/Facebook.vue';
import RehearsalTuesdays from '../components/RehearsalTuesdays.vue';
import RehearsalFridays from '../components/RehearsalFridays.vue';
import Info from '../components/Info.vue';

export default {
  components: {
    RehearsalFridays,
    RehearsalTuesdays,
    Banner,
    Twitter,
    Instagram,
    Facebook,
    Info,
  },

  data: () => ({
    sponsors: [
      {
        icon: 'adler.png',
        name: 'Vgg. Adler 1912',
        url: 'https://www.adler1912.de/',
      },
      {
        icon: 'kasal.png',
        name: 'Katalanisches Salon',
        url: 'https://www.katalanischer-salon.de/',
      },
    ],
  }),
};
</script>

<i18n>
en:
  joinUs: Join us
  followUs: Follow us
  withSupport: With the support of
de:
  joinUs: Komm und bau mit uns
  followUs: Folge uns
  withSupport: Mit der Unterstützung von
ca:
  joinUs: Uneix-te a nosaltres
  followUs: Segueix-nos
  withSupport: Amb el suport de
</i18n>
