<template>
  <div>
    <div>
      <v-container>
        <v-row class="section-title">
          <v-col>
            <div>
              {{ $t('ourHistory') }}
            </div>
            <v-divider class="black"/>
          </v-col>
        </v-row>
        <v-row class="pl-12 pr-12">
          <p>{{ $t('about1') }}</p>
          <p>{{ $t('about2') }}</p>
          <p>{{ $t('about3') }}</p>
        </v-row>
        <v-row>
          <v-col>
            <Timeline/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="theme--light secondary">
      <v-container>
        <v-row class="section-title">
          <v-col>
            <div class="white--text">
              {{ $t('organization') }}
            </div>
            <v-divider class="white"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <BoardTeam/>
          </v-col>
          <v-col>
            <TechnicalTeam/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import BoardTeam from '../components/BoardTeam.vue';
import TechnicalTeam from '../components/TechnicalTeam.vue';
import Timeline from '../components/Timeline.vue';

export default {
  components: {
    Timeline,
    BoardTeam,
    TechnicalTeam,
  },
};
</script>


<i18n>
en:
  ourHistory: Our history
  organization: Organization chart
  about1: "Castellers de Berlin is a group founded in 2018 by people who wanted to bring
    a piece of this century-long Catalan tradition to the German Capital. There have been other
    groups of Castellers in Germany but this is the first and only group in Berlin."
  about2: "The group is established as an apolitical multicultural organisation, welcoming people
    from all over the world. The goal is to promote the tradition of \"castells\" in Berlin
    by making public performances in the city."
  about3: "Castellers de Berlin have been training regularly since its foundation and have shown
    a strong will to rehearse, as it is no easy task to build castells. Put shortly: building
    castells can only be achieved with teamwork, trust in each other and the will to be better
    every day."
de:
  ourHistory: Unsere Geschichte
  organization: Organigramm
  about1: "Castellers de Berlin wurde im Januar 2018 von Personen gegründet, die ein Stück dieser
    katalanischen Tradition in die deutsche Hauptstadt bringen wollten. Früher gab es andere
    Castellers Gruppen in Deutschland, aber diese ist die erste und einzige in Berlin."
  about2: "Die Gruppe ist eine unpolitische multikulturelle Organisation, in der Menschen aus der
    ganzen Welt willkommen sind. Das Ziel ist, die \"Castell\" Tradition in Berlin zu fördern: fürs
    Erste durch Proben und durch öffentliche Aufführungen."
  about3: "Castellers de Berlin haben seit der Gründung regelmäßig trainiert, und haben einen
    starken Lernwillen gezeigt, da es keine einfache Aufgabe ist, Castells zu bauen. Kurz gesagt:
    das Bauen von Castells wird durch Teamarbeit, Vertrauen und den Willen, jeden Tag besser zu
    werden, erreicht!"
ca:
  ourHistory: La nostra història
  organization: Organigrama
  about1: "Al 2018 un grup de gent que volia portar la tradició castellera a la capital alemanya va
    fundar els Castellers de Berlín. Hi ha hagut altres colles castelleres a Alemanya, però aquesta
    és la primera i única colla castellera a Berlín."
  about2: "Els grup s'ha creat com una organització multicultural que acull a gent d'arreu i està
    lliure de lligams polítics. L'objectiu és promoure el fet casteller a Berlín tot organitzant
    actuacions públiques."
  about3: "Els Castellers de Berlín assagen de forma regular des de la fundació de la colla, i ja
    s'ha demostrat la voluntat d'assajar fort per fer castells. De forma breu, fer castells
    s'aconsegueix amb bon treball d'equip, confiança dels uns amb els altres i la voluntat de
    ser millors cada dia."
</i18n>
