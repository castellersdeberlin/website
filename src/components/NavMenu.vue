<template>
  <div>
    <v-app-bar app
               :prominent="!reduced"
               :short="reduced"
               :absolute="!reduced"
               dense
               elevation="5"
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
                 :max-height="logoSize"
                 :max-width="logoSize">
          </v-img>
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="link in links"
               :key="link.name"
               :to="{ name: link.path }"
               text
               exact
               class="font-weight-black theme--light">
            {{ $t(link.name) }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <LanguageSelector/>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"
                          class="hidden-sm-and-up"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      class="hidden-sm-and-up">
      <v-list dense
              nav>
        <v-list-item/>
        <v-list-item>
          <v-btn to="/"
                 text
                 exact
                 width="100%"
                 class="theme--light">
            {{ $t('home') }}
          </v-btn>
        </v-list-item>
        <v-list-item v-for="link in links"
                            :key="link.name">
          <v-btn :to="{ name: link.path }"
                 text
                 exact
                 width="100%"
                 class="theme--light">
            {{ $t(link.name) }}
          </v-btn>
        </v-list-item>
        <v-list-item/>
        <v-list-item>
          <LanguageSelector/>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';

export default {
  components: { LanguageSelector },

  data: () => ({
    drawer: false,
    links: [
      { path: 'about', name: 'about' },
      { path: 'calendar', name: 'calendar' },
      { path: 'content', name: 'content' },
    ],
  }),

  computed: {
    logoSize() {
      return this.reduced ? 50 : 90;
    },

    reduced() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
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
  home: "Startseite"
  about: "Über uns"
  calendar: "Kalender"
ca:
  home: "Inici"
  about: "Qui som"
  calendar: "Calendari"
</i18n>
