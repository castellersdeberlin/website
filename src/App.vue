<template>
  <v-app>
    <NavMenu/>

    <v-content>
      <router-view/>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';

export default {
  components: { NavMenu, Footer },
};
</script>

<style>
.v-parallax img {
  box-shadow: inset 0 0 10px 8px rgba(0, 0, 0, 0.5);
}
</style>
