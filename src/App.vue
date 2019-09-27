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
