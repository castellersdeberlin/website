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
                          <span class="text-with-break-lines t-bold">
                          {{ $t(`info[${n}].subtitle`) }}
                          </span>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                    <v-col cols="10" class="pt-0">
                        <v-card-text class="pt-0">
                          <span class="text-with-break-lines">
                            {{ $t(`info[${n}].body`) }}
                          </span>
                          <a
                            v-if="link(n).length > 0"
                            v-bind:href="link(n)"
                            target="_blank"
                            class="info-link"
                            >
                            <v-icon
                              color="black"
                              x-large
                            >
                              mdi-file-document-outline
                            </v-icon>
                          </a>
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
    link(i) {
      switch (i % 3) {
        case 1: return '';
        // eslint-disable-next-line
        case 2: return 'https://docs.google.com/forms/d/e/1FAIpQLSfT5KuVsbqG5OS4wodK6inxyBd71GgRsyJjlaSCDEP72JyD_w/viewform';
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
  }
  .card-container:last-child {
    margin-bottom: 0;
  }
  i.v-icon {
    width: 100%;
    height: 100%;
  }
  .info-link {
    max-width: 48px;
    display: block;
    margin-bottom: 24px;
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
  header: Information About Our Activities during COVID-19
  info:
    1:
      subtitle: 21st March 2021
      title: Information About Our Activities during COVID-19
      body: >
        Due to current restrictions imposed by COVID-19, Castellers de
        Berlin is not carrying out face-to-face activities at the moment.
        We will inform you in due course about upcoming activities.
    2:
      subtitle: >
        Next Meeting: Friday 23rd April

        History and importance of Castells
      title: CasTales | 3rd Week of Each Month | 18:30-19:30
      body: >
        Online CasTales is a series of monthly, one-hour long, online meetings chaired by members of
        Junta or Tècnica about different topics concerning the technique and culture of Castells. The
        languages used will be English and German alternately.


        What is coming in the next few months? This is the CasTales calendar:


        MARCH: Positions and Security

        APRIL: History and Importance of Castells

        MAY: Women in the Castells World

        JUNE: Technique and Security

        JULY: University Colles, Festivities and Folklore

        AUGUST: Kids in Castells

        SEPTEMBER: Castells Values

        OCTOBER: Castellers de Berlin Values


        Everything will take place during the 3rd week of the month, either on Tuesday or Friday, on Zoom.
        We will be updating the website calendar accordingly.


        Since the meetings are open to everyone, feel free to invite more people!


        18:15 - Opening

        18:30 - CasTales

        19:30 - End and virtual Späti


        If you are interested in participating but are not a member of Castellers de Berlin, fill
        in and send us the following form:
de:
  header: Informationen zu den Aktivitäten während Covid-19
  info:
    1:
      subtitle: 21. März 2021
      title: Informationen zu den Aktivitäten während Covid-19
      body: >
        Aufgrund der derzeitigen Beschränkungen in der COVID-19-Pandemie
        führt Castellers de Berlin im Moment keine Vor-Ort-Aktivitäten durch.
        Wir werden euch hier rechtzeitig über wieder stattfindende Veranstaltungen informieren.
    2:
      subtitle: >
        Nächstes Treffen: Freitag 23. April

        Geschichte und Bedeutung der Castells

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


        Wenn Du dich für eine Veranstaltung interessierst aber kein Mitglied von Castellers de
        Berlin bist, fülle bitte dieses Formular aus und sende es an uns:
ca:
  header: Informació sobre les activitats durant la Covid-19
  info:
    1:
      subtitle: 21 de març de 2021
      title: Informació sobre les activitats durant la Covid-19
      body: >
        A causa de les restriccions imposades actualment per la covid-19,
        Castellers de Berlin no duu a terme activitats presencials en aquests moments.
        Us informarem sobre properes activitats quan la situació ho permeti.
    2:
      subtitle: >
        Propera trobada: 23 d'abril de 2021

        Història i significat dels castells
      title:
        CasTales | 3a setmana del mes | 18.30-19.30
      body: >
        CasTales és una sèrie de trobades mensuals d'una hora de durada dirigides per
        membres de Junta o Tècnica sobre temes relacionats amb la tècnica i la
        cultura castelleres. Les llengües seran l'alemany i l'anglès (en alternança).


        I què ens espera en els propers mesos? Aquí teniu el calendari de CasTales:


        MARÇ: Posicions i seguretat als castells

        ABRIL: Història i significat dels castells

        MAIG: Les dones al món casteller

        JUNY: Tècnica i seguretat

        JULIOL: Colles universitàries, festes i "folklore"

        AGOST: Canalla castellera

        SETEMBRE: Valors castellers

        OCTUBRE: Valors dels Castellers de Berlin


        La trobada tindrà lloc sempre la tercera setmana de mes, dimarts o divendres, a la plataforma
        Zoom. Anirem actualitzant el calendari d'aquest lloc web amb noves dates.


        Com que les sessions són obertes a tothom, us hi podeu apuntar i convidar-hi més gent!


        18.15 - Obrim la sala

        18:30 - CasTales

        19:30 - Final i Späti virtual


        Si esteu interessats a participar-hi però no formeu part de Castellers de Berlin,
        ompliu i envieu-nos el formulari següent:
</i18n>
