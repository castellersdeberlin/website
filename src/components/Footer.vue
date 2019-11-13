<template>
  <v-footer padless class="black pt-5 pb-5">
    <v-row no-gutters>
      <v-col>
        <v-row class="justify-center">
          <v-btn v-for="link in links"
                 :key="link.url"
                 :href="link.url"
                 class="mx-4 white--text"
                 icon>
            <v-icon size="24px">{{ link.icon }}</v-icon>
          </v-btn>
        </v-row>
        <v-row class="justify-center">
          <LegalNotice/>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import LegalNotice from './LegalNotice.vue';

export default {
  components: { LegalNotice },
  data: () => ({
    links: [
      { icon: 'mdi-facebook', url: 'https://www.facebook.com/CastellersdeBerlin/' },
      { icon: 'mdi-instagram', url: 'https://www.instagram.com/castellersdeberlin/' },
      { icon: 'mdi-twitter', url: 'https://twitter.com/CastellsBerlin' },
      { icon: 'mdi-meetup', url: 'https://www.meetup.com/Castellers-de-Berlin/' },
    ],
  }),
};
</script>
