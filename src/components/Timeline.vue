<template>
  <div class="timeline">
    <v-timeline align-top
                :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item v-for="n in items"
                       :key="n"
                       :color="lightenColor(color(n))">
        <v-card :color="lightenColor(color(n))" dark>
          <v-card-title class="overline font-weight-black">
            {{ $t(`${n}.date`) }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <h2 class="headline font-weight-light"
                :class="`${color(n)}--text`">
              {{ $t(`${n}.title`) }}
            </h2>
            {{ $t(`${n}.event`) }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: 8,
  }),

  methods: {
    lightenColor(color) {
      return `${color}`;
    },
    color(i) {
      switch (i % 7) {
        case 1: return 'purple';
        case 2: return 'blue';
        case 3: return 'cyan';
        case 4: return 'green';
        case 5: return 'amber';
        case 6: return 'orange';
        default: return 'red';
      }
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
    1:
      date: 10th January 2018
      title: Foundation
      event: Castellers de Berlin was founded by a small but enthusiastic group.
    2:
      date: 15th April 2018
      title: First rehearsal
      event: We met and started training the first set of "espatlleres".
    3:
      date: 4th September 2018
      title: Vgg. Adler 1912
      event: We joined the Adler family, our sport club.
    4:
      date: 22nd September 2018
      title: Joan Miró Workshop
      event: Our first public performance along with a small workshop for the kids.
    5:
      date: 28th February 2019
      title: Castellers on Air
      event: "We appeared in TV, in RBB's show \"ZIBB: Zuhause in Berlin und Brandenburg\"."
    6:
      date: 1st March 2019
      title: Bizim Beatz
      event: First pd4 in a public performance, in front of a great audience.
    7:
      date: 8th April 2019
      title: III International Human Tower Festival
      event: We participated in Copenhagen and achieved 3d5 and 3d5a for the first time.
    8:
      date: 4th March 2020
      title: ALBA Berlin vs FC Barcelona
      event: We raised a 3d5 in front of thousands of spectators during the halftime of the
              EuroLeague Basketball match.
  de:
    1:
      date: 10. Januar 2018
      title: Gründung
      event: Die Castellers de Berlin werden gegründet.
    2:
      date: 15. April 2018
      title: Erste Probe
      event: Wir organisieren unsere erste Probe mit Übungen an der senkrechten Stange.
    3:
      date: 4. September 2018
      title: Vgg. Adler 1912
      event: Wir treten als Gruppe in die Vereinigung Adler 1912 e.V. ein.
    4:
      date: 22. September 2018
      title: Joan Miró Workshop
      event: Wir bieten unsere erste öffentliche Aufführung mit einem kleinen Workshop für die
              Kinder der Grundschule Joan Miró.
    5:
      date: 28. Februar 2019
      title: Castellers on Air
      event: "Der RBB sendet einen Beitrag in der Sendung \"ZIBB: Zuhause in Berlin und
              Brandenburg\"."
    6:
      date: 1. März 2019
      title: Bizim Beatz
      event: Wir schaffen unsere erste Vierer-Säule (pd4) bei einer öffentlichen Aufführung.
    7:
      date: 8. April 2019
      title: III International Human Tower Festival
      event: Wir nehmen am Treffen in Kopenhagen teil und schaffen zum ersten Mal einen Dreier-Turm
              auf 5 Ebenen (3d5) und einen Dreier-Turm auf 5 Ebenen mit Nadel (3d5a).
    8:
      date: 4. März 2020
      title: ALBA Berlín vs FC Barcelona
      event: Wir schaffen zur Halbzeit des Euroleague-Basketballspiels vor Tausenden von Zuschauern
              einen Dreier-Turm auf 5 Ebenen (3d5).
  ca:
    1:
      date: 10 Gener 2018
      title: Fundació
      event: La nostra colla va ser fundada per un petit grup d'entusiastes.
    2:
      date: 15 Abril 2018
      title: Primer assaig
      event: Ens vam trobar i vam començar a practicar les primeres espatlleres!
    3:
      date: 4 Setembre 2018
      title: Vgg. Adler 1912
      event: Vam unir-nos a la familia Adler, el nostre club esportiu.
    4:
      date: 22 Setembre 2018
      title: Workshop Joan Miró
      event: La nostra primera actuació, amb un petit workshop per la canalla.
    5:
      date: 28 Febrer 2019
      title: Castellers on Air
      event: "Vam aparèixer a la TV, al show de la RBB \"ZIBB: Zuhause in Berlin und Brandenburg\"."
    6:
      date: 1 Març 2019
      title: Bizim Beatz
      event: El nostre primer pd4 en una actuació pública davant d'un gran públic.
    7:
      date: 8 Abril 2019
      title: III International Human Tower Festival
      event: Vam participar a Copenhagen i vam aconseguir el 3d5 i el 3d5a per primer cop.
    8:
      date: 4 Març 2020
      title: ALBA Berlín vs FC Barcelona
      event: Vam elevar un 3d5 davant de milers d'espectadors a la mitja part del partit
              d'Eurolliga de Bàsquet.
</i18n>
