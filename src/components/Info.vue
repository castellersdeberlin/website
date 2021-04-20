<template>
    <div>
      <v-container id="info">
        <v-row>
          <v-col>
            <v-card v-for="n in items"
                  :key="n"
                  class="card-container"
                  :color="lightenColor(color(n))"
                  >
                  <v-container class="pt-0 pb-0">
                  <v-row>
                    <v-col cols="2">
                      <v-icon
                        color="black"
                        center
                        class="v-icon"
                        x-large
                        >
                        {{icon(n)}}
                      </v-icon>
                    </v-col>
                    <v-col cols="10">
                        <v-card-title class="font-weight-bold" color="white">
                          {{ $t(`info[${n}].title`) }}
                        </v-card-title>
                        <v-card-text class="pt-0">
                          {{ $t(`info[${n}].date`) }}
                        </v-card-text>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                    <v-col cols="10" class="pt-0">
                        <v-card-text class="pt-0">
                          <span class="text-with-break-lines">
                            {{ $t(`info[${n}].body`) }}
                          </span>
                        </v-card-text>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Info',
  data: () => ({
    // control the number of posts to display
    items: 2,
  }),
  methods: {
    lightenColor(color) {
      return `${color}`;
    },
    color(i) {
      switch (i % 3) {
        case 1: return 'rgb(252, 191, 67)';
        case 2: return '#eee';
        default: return '#eee';
      }
    },
    icon(i) {
      switch (i % 3) {
        case 1: return 'mdi-information-outline';
        case 2: return 'mdi-contacts-outline';
        default: return 'mdi-information-outline';
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
  }
  .card-container:last-child {
    margin-bottom: 0;
  }
  i.v-icon {
    width: 100%;
    height: 100%;
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
</style>

<i18n>
en:
  header: Information about the activities during Covid-19
  info:
    1:
      date: 29th March 2021
      title: Information about the activities during Covid-19
      body: >
        Due to current restrictions imposed by COVID-19, Castellers de
        Berlin is not carrying out face-to-face activities at the moment.
        We will inform you in due course about upcoming activities.
    2:
      date: 20th April 2021
      title: CasTales | 3rd Week of Month | 18:30-19:30
      body: >
        Online CasTales is a series of monthly online meetings of 1 hour chaired by a member of
        Junta or Tècnica on various topics concerning Castells culture and techniques. The
        languages will be English and German (alternating).


        What's up in the next month? Here the calender for CasTales:


        MARCH: positions and security of the castells

        APRIL: history and importance of the castells

        MAY: women in the castellers world

        JUNE: technique and security

        JULY: University collas, festivities and und "folklore"

        AUGUST: canalla of the castells

        SEPTEMBER: values of the castellers

        OCTOBER: values of the Castellers de Berlin


        Everything will take place in the 3rd week of the month, either tuesday or friday, on Zoom.
        We will update the calender: https://castellers.berlin/calendar


        Since the meetings are open for everyone, feel free to invite more people!


        18:15 - room opening

        18:30 - start

        19:30 - We finish and go to the online Späti
de:
  header: Informationen zu den Aktivitäten während Covid-19
  info:
    1:
      date: 29. März 2021
      title: Informationen zu den Aktivitäten während Covid-19
      body: >
        Aufgrund der derzeitigen Beschränkungen in der COVID-19-Pandemie
        führt Castellers de Berlin im Moment keine Vor-Ort-Aktivitäten durch.
        Wir werden euch hier rechtzeitig über wieder stattfindende Veranstaltungen informieren.
    2:
      date: 20. April 2021
      title: CasTales | 3. Woche im Monat | 18:30-19-30
      body: >
        CasTales ist eine Reihe monatlicher Treffen, die eine Stunde dauern und unter der
        Leitung von Mitgliedern des Vorstands oder der Tècnica Themen zu Technik und Kultur der
        Castells behandeln. Die Sprachen werden Deutsch und Englisch sein (abwechselnd).


        Was erwartet uns in den nächten Monaten? Hier findet ihr den Kalender für CasTales:


        MÄRZ: Positionen und Sicherheit der Castells

        APRIL: Geschichte und Bedeutung der Castells

        MAI: Frauen in der Castells Welt

        JUNI: Technik und Sicherheit

        JULI: Universitäts-Collas, Feierlichkeiten und "Folklore"

        AUGUST: Canalla der Castells

        SEPTEMBER: Werte der Castellers

        OKTOBER: Werte der Castellers de Berlin


        Es wird alles in der dritten Woche des Monats, entweder Dienstag oder Freitag, auf Zoom
        stattfinden. Wir werden den Kalender aktualisieren: https://castellers.berlin/calendar


        Da die Treffen offen für alle sind, könnt ihr gerne mehr Menschen dazu einladen!


        18:15 - Raum öffnet.

        18:30 - CasTales beginnt.

        19:30 - Wir beenden das Treffen und gehen zum virtuellen Späti.
ca:
  header: Informació sobre les activitats durant la Covid-19
  info:
    1:
      date: 29 de març de 2021
      title: Informació sobre les activitats durant la Covid-19
      body: >
        A causa de les restriccions imposades actualment per la covid-19,
        Castellers de Berlin no duu a terme activitats presencials en aquests moments.
        Us informarem sobre properes activitats quan la situació ho permeti.
    2:
      date: 20 d'Abril de 2021
      title: CasTales | 3a setmana del mes | 18:30-19:30
      body: >
        CasTales és una sèrie de trobades mensuals d'una hora de durada dirigides per
        membres de la junta o la tècnica sobre temes relacionats amb la tècnica i la
        cultura castellera. Les llengües seran alemany i anglès (en alternància).


        I què ens espera en els propers mesos? Aquí teniu el calendari de CasTales:


        MARÇ: posicions i seguretat dels castells\n

        ABRIL: història i significat dels castells

        MAIG: dones al món casteller

        JUNY: tècnica i seguretat

        JULIOL: colles universitàries, festes i "folklore"

        AGOST: canalla castellera

        SETEMBRE: valors castellers

        OCTUBRE: valors dels Castellers de Berlín


        Serà sempre a la tercera setmana del mes, o bé dimarts o bé divendres, a la plataforma
        Zoom. Anirem actualitzant el calendari: https://castellers.berlin/calendar


        Com que les sessions són obertes a tothom, us podeu apuntar i convidar més gent!


        18:15 - obrim

        18:30 - comencem

        19:30 - acabem i anem cap al späti virtual
</i18n>