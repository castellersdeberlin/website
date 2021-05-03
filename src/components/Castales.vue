<template>
    <div>
      <v-container id="castales">
        <v-row class="section-title">
          <v-col>
            <div>
              {{ $t('title') }}
            </div>
            <v-divider class="black"/>
          </v-col>
        </v-row>
        <v-row class="pl-12 pr-12">
          <v-col class="mb-12">
            <span class="text-with-break-lines">{{ $t('subject') }}</span>
          </v-col>
        </v-row>
        <v-row class="pl-12 pr-12">
          <v-col cols="12" sm="6" md="4" lg="3"
            v-for="n in items"
            :key="n"
            >
              <v-card
                  class="card-container"
                  :color="lightenColor(color(n))"
                  >
                    <v-card-title class="font-weight-bold" color="white">
                      {{ $t(`content[${n}].title`) }}
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <span class="text-with-break-lines t-bold">
                      {{ $t(`content[${n}].subtitle`) }}
                      </span>
                      <a
                        v-if="link(n).length > 0"
                        v-bind:href="link(n)"
                        target="_blank"
                        class="content-link"
                        >
                        <v-icon
                          color="black"
                          center
                          class="v-icon"
                          x-large
                          >
                          {{icon(n)}}
                        </v-icon>
                      </a>
                    </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Collection',
  data: () => ({
    // control the number of posts to display
    items: 8,
  }),
  methods: {
    lightenColor(color) {
      return `${color}`;
    },
    color(i) {
      switch (i % 9) {
        case 1: return 'rgb(252, 191, 67)';
        case 2: return 'rgb(252, 191, 67)';
        default: return '#eee';
      }
    },
    icon(i) {
      switch (i % 9) {
        case 1: return 'mdi-open-in-new';
        case 2: return 'mdi-open-in-new';
        default: return 'mdi-open-in-new';
      }
    },
    link(i) {
      switch (i % 9) {
        case 1: return 'https://docs.google.com/presentation/d/1Z6nPTEOI6A_E2gaT76E1WMwRV_vXVwzFmLxKZKZevPA/edit?usp=sharing_eip&ts=6090433b';
        case 2: return 'https://docs.google.com/presentation/d/1Z6nPTEOI6A_E2gaT76E1WMwRV_vXVwzFmLxKZKZevPA/edit?usp=sharing_eip&ts=6090433b';
        case 3: return '';
        case 4: return '';
        default: return '';
      }
    },
  },
};
</script>

<style lang="scss">
  .card-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    text-transform: initial;
    margin-bottom: 2rem;
    padding-right: 24px;
    height: 100%;
    padding-bottom: 3rem;
  }
  .card-container:last-child {
    margin-bottom: 0;
  }
  i.v-icon {
    width: 100%;
    height: 100%;
  }
  .content-link {
    position: absolute;
    bottom: 1rem;
    max-width: 40px;
    display: block;
    margin-bottom: 0;
    margin-top: 4rem;
    transition: all .2s ease;
    &:hover {
      transform: translateX(10px);
    }
  }
  .pb-0 {
    padding-bottom: 0;
  }
  .pt-0 {
    padding-top: 0;
  }
  .text-with-break-lines {
    white-space: pre-line;
  }
  .t-bold {
    font-weight: 700;
  }
</style>

<i18n>
en:
  title: CasTales
  subject: "CasTales explanation"
  content:
    1:
      title:
      subtitle:
      body:
    2:
      title:
      subtitle:
      body:
de:
  title: CasTales
  subject: "CasTales explanation"
  content:
    1:
      title:
      subtitle:
      body:
    2:
      title:
      subtitle:
      body:
ca:
  title: CasTales
  subject: >
    CasTales és una sèrie de trobades mensuals d'una hora de durada dirigides per
    membres de Junta o Tècnica sobre temes relacionats amb la tècnica i la
    cultura castelleres. Les llengües seran l'alemany i l'anglès (en alternança).
  content:
    1:
      title: CasTales 1
      subtitle: >
        MARÇ

        Posicions i seguretat als castells
      body:
    2:
      title: CasTales 2
      subtitle: >
        ABRIL

        Història i significat dels castells
      body:
    3:
      title: CasTales 3
      subtitle: >
        MAIG

        Les dones al món casteller
      body:
    4:
      title: CasTales 4
      subtitle: >
        JUNY

        Tècnica i seguretat
      body:
    5:
      title: CasTales 5
      subtitle: >
        JULIOL

        Colles universitàries, festes i "folklore"
      body:
    6:
      title: CasTales 6
      subtitle: >
        AGOST

        Canalla castellera
      body:
    7:
      title: CasTales 7
      subtitle: >
        SETEMBRE

        Valors castellers
      body:
    8:
      title: CasTales 8
      subtitle: >
        OCTUBRE

        Valors dels Castellers de Berlin
      body:
</i18n>
