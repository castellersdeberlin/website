<template>
  <v-card min-height="250"
          class="social-media-item">
    <v-card-title class="title">
      <v-btn :href="url" x-large width="100%" depressed>
        <v-icon class="primary--text">{{ icon }}</v-icon> {{ name }}
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-lazy transition="fade-transition"
              class="media">
        <slot/>
      </v-lazy>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['icon', 'name', 'url'],
};
</script>

<style lang="scss">
.social-media-item {
  padding: 2px;

  .v-icon {
    margin-right: 10px;
    font-size: 30px;
  }

  .media {
    background-color: white;
  }

  iframe {
    width: 100% !important;
    max-width: unset !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
  }
}
</style>
