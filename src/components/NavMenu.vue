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
        <router-link :to="{ name: 'calendar' }"
                     class="font-weight-black white--text">
          {{ $t('calendar') }}
        </router-link>
      </v-btn>
    </v-toolbar-items>
    <div class="flex-grow-1"></div>
    <template>
      <v-select v-model="$root.$i18n.locale"
                :items="languages"
                rounded
                single-line
                flat
                dense
                dark
                hide-selected
                prepend-icon="language"
                class="toolbar-language">
      </v-select>
    </template>
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
      background-image: linear-gradient(to right, transparent, #F03838 30%),
      url('../assets/mocador.jpg');
      padding-top: 0;
    }

    .v-select {
      flex: none;
      height: 100% !important;
      padding-top: 1% !important;

      input {
        display: none;
      }
      .v-input__slot {
        padding: 0 !important;
      }
    }
  }
</style>

<i18n>
en:
  home: "Home"
  about: "About us"
  calendar: "Calendar"
de:
  home: "Home"
  about: "Über uns"
  calendar: "Kalendar"
ca:
  home: "Home"
  about: "Qui som"
  calendar: "Calendari"
</i18n>
