<template>
  <v-app-bar app
             prominent
             dense
             absolute
             class="primary"
             id="app-bar">
    <v-toolbar-items>
      <v-btn to="/"
             exact
             depressed
             exact-active-class="logo-active"
             class="v-btn--flat">
        <v-img :src="require('../assets/escut.svg')"
               alt="Castellers de Berlin"
               max-height="90"
               max-width="90">
        </v-img>
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn text
             exact
             :to="{ name: 'about' }"
             class="font-weight-black theme--light">
          {{ $t('about') }}
      </v-btn>
      <v-btn text
             exact
             :to="{ name: 'calendar' }"
             class="font-weight-black theme--light">
          {{ $t('calendar') }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <v-toolbar-items>
      <LanguageSelector/>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';

export default {
  components: { LanguageSelector },
};
</script>

<style lang="scss">
  #app-bar {
    .v-toolbar__content {
      background-repeat: repeat;
      background-size: auto 50px;
      padding-top: 0;
    }

    .v-toolbar__items a {
      text-decoration: none;
    }

    .logo-active {
      color: transparent !important;
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
