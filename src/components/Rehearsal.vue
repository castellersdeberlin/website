<template>
  <v-card class="rehearsal-item">
    <v-card-title class="title">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-list disabled
              dense>
        <v-subheader class="text-uppercase">
          {{ $t('howTo') }}
        </v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ time }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-map</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ address }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <slot/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-lazy transition="fade-transition"
              class="media">
        <iframe :src="url"
                width="100%"
                height="300"
                frameborder="0"
                style="border:0;"
                allowfullscreen="">
        </iframe>
      </v-lazy>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['url', 'title', 'time', 'address'],
};
</script>

<style scoped>

</style>

<i18n>
en:
  howTo: How to find us
de:
  howTo: Wie Ihr uns findet
ca:
  howTo: Com trobar-nos
</i18n>
