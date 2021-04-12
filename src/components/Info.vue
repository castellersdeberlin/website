<template>
    <div>
      <v-container id="info">
        <v-row>
          <v-col>
            <v-card v-for="n in items"
                  :key="n"
                  class="card-container"
                  outlined
                  color="rgb(252, 191, 67)"
                  >
                  <v-row>
                    <v-col cols="2">
                      <v-icon
                        color="black"
                        center
                        class="v-icon"
                        x-large
                        >
                        mdi-information-outline
                      </v-icon>
                    </v-col>
                    <v-col cols="10" class="card-content">
                        <v-card-title class="font-weight-bold" color="white">
                          {{ $t(`info[${n}].title`) }}
                        </v-card-title>
                        <v-card-text>
                          {{ $t(`info[${n}].date`) }}
                        </v-card-text>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                    <v-col cols="10">
                        <v-card-text>
                          {{ $t(`info[${n}].body`) }}
                        </v-card-text>
                    </v-col>
                </v-row>
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
    items: 1,
  }),
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
  .card-content {
    padding: .5rem;
  }
  i.v-icon {
    width: 100%;
    height: 100%;
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
        Due to current restrictions imposed by COVID-19, Castellers de Berlin is not carrying out face-to-face activities at the moment. We will inform you in due course about upcoming activities.
de:
  header: Informationen zu den Aktivitäten während Covid-19
  info:
    1:
      date: 29. März 2021
      title: Informationen zu den Aktivitäten während Covid-19
      body: >
        Aufgrund der derzeitigen Beschränkungen in der COVID-19-Pandemie führt Castellers de Berlin im Moment keine Vor-Ort-Aktivitäten durch. Wir werden euch hier rechtzeitig über wieder stattfindende Veranstaltungen informieren.
ca:
  header: Informació sobre les activitats durant la Covid-19
  info:
    1:
      date: 29 de març de 2021
      title: Informació sobre les activitats durant la Covid-19
      body: >
        A causa de les restriccions imposades actualment per la covid-19, Castellers de Berlin no duu a terme activitats presencials en aquests moments. Us informarem sobre properes activitats quan la situació ho permeti.
</i18n>
