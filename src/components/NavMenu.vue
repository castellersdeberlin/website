<template>
  <v-app-bar app
             prominent
             id="app-bar">
    <v-img :src="require('../assets/escut.svg')"
           alt="Castellers de Berlin"
           max-height="130"
           max-width="130">
    </v-img>
    <div class="flex-grow-1"></div>
    <v-toolbar-items>
      <v-btn text>
        <router-link :to="{ name: 'home' }"
                     class="font-weight-black white--text">
          {{ $t('home') }}
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link :to="{ name: 'about' }"
                     class="font-weight-black white--text">
          {{ $t('about') }}
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link :to="{ name: 'media' }"
                     class="font-weight-black white--text">
          {{ $t('media') }}
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link :to="{ name: 'calendar' }"
                     class="font-weight-black white--text">
          {{ $t('calendar') }}
        </router-link>
      </v-btn>
    </v-toolbar-items>
    <div class="flex-grow-1"></div>
    <v-sheet color="transparent">
      <v-row>
        <v-select v-model="$root.$i18n.locale"
                  :items="languages"
                  dark
                  full-width
                  dense
                  hide-selected
                  prepend-inner-icon="language"
                  class="toolbar-language">
        </v-select>
      </v-row>
    </v-sheet>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    languages: [
      { text: 'Deutsch', value: 'de' },
      { text: 'English', value: 'en' },
      { text: 'Català', value: 'ca' },
    ],
  }),
};
</script>

<style lang="scss">
  #app-bar {
    .v-toolbar__content {
      background-image: url('../assets/mocador.jpg');
      background-repeat: repeat;
      background-size: auto 50px;
      background-image: linear-gradient(90deg, transparent 0%,
        rgba(240,56,56, 0.85) 35%, rgba(240,56,56, 0.85) 100%), url('../assets/mocador.jpg');
      padding-top: 0;
    }

    .v-select {
      .v-select__slot {
        display: none
      }
    }
  }
</style>

<i18n>
en:
  home: "Home"
  about: "About us"
  media: "Media"
  calendar: "Calendar"
de:
  home: "Home"
  about: "Über uns"
  media: "Media"
  calendar: "Kalendar"
ca:
  home: "Home"
  about: "Qui som"
  media: "Media"
  calendar: "Calendari"
</i18n>
