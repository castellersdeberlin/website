<template>
  <v-sheet class="social-media-item primary">
    <v-subheader class="headline">
      <v-icon>{{ icon }}</v-icon> {{ name }}
    </v-subheader>
    <v-lazy transition="fade-transition"
            class="media">
      <slot/>
    </v-lazy>
  </v-sheet>
</template>

<script>
export default {
  props: ['icon', 'name'],
};
</script>

<style lang="scss">
.social-media-item {
  padding: 2px;

  .v-icon {
    margin-right: 10px;
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
