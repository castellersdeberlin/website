<template>
  <v-app>
    <NavMenu/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  components: { NavMenu },
};
</script>

<style>
.v-parallax img {
  box-shadow: inset 0 0 10px 8px rgba(0, 0, 0, 0.5);
}
</style>
