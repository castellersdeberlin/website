<template>
  <div class="timeline">
    <v-timeline align-top
                :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item v-for="(item, i) in items"
                       :key="i"
                       :color="lightenColor(item.color)">
        <v-card :color="lightenColor(item.color)" dark>
          <v-card-title class="overline font-weight-black">{{ item.date }}</v-card-title>
          <v-card-text class="white text--primary">
            <h2 class="headline font-weight-light"
                :class="`${item.color}--text`">
              {{ item.title }}
            </h2>
            {{ item.event }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'purple',
        date: '10. Jan 2018',
        title: 'Gründung',
        event: 'Die Castellers de Berlin werden gegründet',
      },
      {
        color: 'cyan',
        date: '15. Apr 2018',
        title: 'Erstes Training',
        event: 'Wir haben unser erstes Training begonnen, yeah!',
      },
      {
        color: 'blue',
        date: '4. Sep 2018',
        title: 'Vgg. Adler 1912',
        event: 'Wir sind Teil der Adler Familie geworden',
      },
      {
        color: 'green',
        date: '22nd Sep 2018',
        title: 'Joan Miró Workshop',
        event: 'Unsere erste öffentliche Aufführung',
      },
      {
        color: 'amber',
        date: '28. Feb 2019',
        title: 'Castellers on Air',
        event: 'Ein Beitrag über uns läuft in der RBB-Sendung "ZIBB: Zuhause in Berlin und Brandenburg"',
      },
      {
        color: 'orange',
        date: '1. Mär 2019',
        title: 'Bizim Beatz',
        event: 'Erster pd4 bei einer öffentlichen Aufführung',
      },
      {
        color: 'red',
        date: '8. Apr 2019',
        title: 'III International Human Tower Festival',
        event: 'Wir nehmen am Treffen in Kopenhagen teil und schaffen zum ersten Mal einen 3d5 und 3d5a',
      },
    ],
  }),

  methods: {
    lightenColor(color) {
      return `${color}`;
    },
  },
};
</script>

<style lang="scss">
.timeline {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1000px;

  .v-card__text {
    padding: 16px !important;
  }
}
</style>
