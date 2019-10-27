<template>
  <v-app-bar app
             prominent
             dense
             class="primary"
             id="app-bar">
    <v-img :src="require('../assets/escut.svg')"
           alt="Castellers de Berlin"
           max-height="90"
           max-width="90">
    </v-img>
    <div class="flex-grow-1"></div>
    <v-toolbar-items id="menu-items">
      <v-btn text>
        <router-link :to="{ name: 'home' }"
                     class="font-weight-black theme--light v-subheader">
          {{ $t('home') }}
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link :to="{ name: 'about' }"
                     class="font-weight-black theme--light v-subheader">
          {{ $t('about') }}
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link :to="{ name: 'calendar' }"
                     class="font-weight-black theme--light v-subheader">
          {{ $t('calendar') }}
        </router-link>
      </v-btn>
    </v-toolbar-items>
    <div class="flex-grow-1"></div>
    <v-sheet color="transparent">
      <v-row>
        <v-select v-model="$root.$i18n.locale"
                  :items="languages"
                  light
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
      background-repeat: repeat;
      background-size: auto 50px;
      padding-top: 0;
    }

    .v-toolbar__items {
      a {
        text-decoration: none;
      }
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
