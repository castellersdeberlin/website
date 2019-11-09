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
de:
  ourHistory: Unsere Geschichte
  organization: Organigramm
ca:
  ourHistory: La nostra història
  organization: Organigrama
</i18n>
