<template>
  <v-container fluid class="footer">
    <v-container>
      <v-row>
      <v-col class="col-12 col-md-4 v-center">
        <b-link href="" class="white--text">
          <router-link :to="{ name: 'home' }">
            {{ $t('impressum') }}
          </router-link>
        </b-link>
      </v-col>

      <v-col class="col-12 col-md-4 v-center">
        <a href="https://facebook.com/castellersdeberlin"
            target="_blank"
            class="mx-5">
              <v-icon>mdi-facebook</v-icon>
        </a>
        <a href="https://instagram.com/castellersdeberlin"
            target="_blank"
            class="mx-5">
          <v-icon>mdi-instagram</v-icon>
        </a>
        <a href="https://twitter.com/CastellsBerlin"
            target="_blank"
            class="mx-5">
          <v-icon>mdi-twitter</v-icon>
        </a>
      </v-col>

      <v-col class="col-12 col-md-4 v-center">
        <v-img :src="require('../assets/escut.svg')"
              class="mx-3"
               alt="Castellers de Berlin"
               max-height="90"
               max-width="90">
        </v-img>

        <v-img :src="require('../assets/adler-logo.png')"
              class="mx-3 invert"
               alt="Castellers de Berlin"
               max-height="90"
               max-width="90">
        </v-img>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
  .footer {
    background: #000;
  }

  .v-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .theme--light.v-icon {
    color: #fcbf43;
  }

  .invert {
    filter: invert(100%);
  }

</style>

<i18n>
en:
  impressum: "Legal notice"
de:
  impressum: "Impressum"
ca:
  impressum: "Avís Legal"
</i18n>
