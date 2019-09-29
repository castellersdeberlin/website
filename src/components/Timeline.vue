<template>
  <div class="timeline">
    <v-timeline align-top
                :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color">
        <v-card
          :color="item.color"
          dark>
          <v-card-title class="title">{{ item.year }}</v-card-title>
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
        color: 'cyan',
        year: 'Jan 2018',
        title: 'Foundation',
        event: 'Castellers de Berlin was founded',
      },
      {
        color: 'green',
        year: '15th Apr 2018',
        title: 'First rehearsal',
        event: 'We met and started to train, yeah!',
      },
      {
        color: 'pink',
        year: '22nd Sep 2018',
        title: 'Joan Miró Workshop',
        event: 'Our first public performance',
      },
      {
        color: 'amber',
        year: '28th Feb 2019',
        title: 'Castellers on Air',
        event: 'A rehearsal appears in RBB\'s show "ZIBB: Zuhause in Berlin und Brandenburg"',
      },
      {
        color: 'orange',
        year: '1st Mar 2019',
        title: 'Bizim Beatz',
        event: 'First pd4 in a public performance',
      },
      {
        color: 'red',
        year: '8th Apr 2019',
        title: 'III International Human Tower Festival',
        event: 'We participated in Copenhagen and achieved 3d5 and 3d5a for the first time',
      },
    ],
  }),
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
