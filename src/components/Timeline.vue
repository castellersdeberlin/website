<template>
  <div class="timeline">
    <v-timeline align-top
                :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item v-for="(color, i) in colors"
                       :key="i"
                       :color="lightenColor(color)">
        <v-card :color="lightenColor(color)" dark>
          <v-card-title class="overline font-weight-black">
            {{ $t(`${color}.date`) }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <h2 class="headline font-weight-light"
                :class="`${color}--text`">
              {{ $t(`${color}.title`) }}
            </h2>
            {{ $t(`${color}.event`) }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: ['purple', 'cyan', 'blue', 'green', 'amber', 'orange', 'red'],
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

<i18n>
  en:
    purple:
      date: 10th January 2018
      title: Foundation
      event: Castellers de Berlin was founded by a small but enthusiastic group
    cyan:
      date: 15th April 2018
      title: First rehearsal
      event: We met and started training the first set of "espatlleres"
    blue:
      date: 4th September 2018
      title: Vgg. Adler 1912
      event: We joined the Adler family, our sport club
    green:
      date: 22nd September 2018
      title: Joan Miró Workshop
      event: Our first public performance along with a small workshop for the kids
    amber:
      date: 28th February 2019
      title: Castellers on Air
      event: "We appeared in TV, in RBB's show \"ZIBB: Zuhause in Berlin und Brandenburg\""
    orange:
      date: 1st March 2019
      title: Bizim Beatz
      event: First pd4 in a public performance, in front of a great audience
    red:
      date: 8th April 2019
      title: III International Human Tower Festival
      event: We participated in Copenhagen and achieved 3d5 and 3d5a for the first time
  de:
    purple:
      date: 10. Januar 2018
      title: Gründung
      event: Die Castellers de Berlin werden gegründet
    cyan:
      date: 15. April 2018
      title: Erstes Training
      event: Wir haben unser erstes Training begonnen, also unsere ersten "espatlleres"
    blue:
      date: 4. September 2018
      title: Vgg. Adler 1912
      event: Wir sind Teil der Adler Familie geworden, unsere Verein
    green:
      date: 22. September 2018
      title: Joan Miró Workshop
      event: Unsere erste öffentliche Aufführung, mit ein kleines Workshop für die Kinder
    amber:
      date: 28. Februar 2019
      title: Castellers on Air
      event: "Ein Beitrag über uns läuft in der RBB-Sendung
              \"ZIBB: Zuhause in Berlin und Brandenburg\""
    orange:
      date: 1. März 2019
      title: Bizim Beatz
      event: Erster pd4 bei einer öffentlichen Aufführung
    red:
      date: 8. April 2019
      title: III International Human Tower Festival
      event: Wir nehmen am Treffen in Kopenhagen teil und schaffen zum ersten Mal einen 3d5 und 3d5a
  ca:
    purple:
      date: 10 Gener 2018
      title: Fundació
      event: La nostra colla va ser fundada per un petit grup d'entusiastes
    cyan:
      date: 15 Abril 2018
      title: Primer assaig
      event: Ens vam trobar i vam començar a practicar les primeres espatlleres!
    blue:
      date: 4 Setembre 2018
      title: Vgg. Adler 1912
      event: Vam unir-nos a la familia Adler, el nostre club esportiu
    green:
      date: 22 Setembre 2018
      title: Workshop Joan Miró
      event: La nostra primera actuació, amb un petit workshop per la canalla
    amber:
      date: 28 Febrer 2019
      title: Castellers on Air
      event: "Vam aparèixer a la TV, al show de la RBB \"ZIBB: Zuhause in Berlin und Brandenburg\""
    orange:
      date: 1 Març 2019
      title: Bizim Beatz
      event: El nostre primer pd4 en una actuació pública davant d'un gran públic
    red:
      date: 8 Abril 2019
      title: III International Human Tower Festival
      event: Vam participar a Copenhagen i vam aconseguir el 3d5 i el 3d5a per primer cop
</i18n>
