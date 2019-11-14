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

<style lang="scss">
.v-parallax img {
  box-shadow: inset 0 0 10px 8px rgba(0, 0, 0, 0.5);
}

.v-application {
  .container {
    padding-top: 80px !important;
    padding-bottom: 80px !important;

    .section-title {
      font-weight: 900 !important;
      color: rgba(0, 0, 0, 0.8) !important;
      letter-spacing: 0.14em !important;
      text-transform: uppercase !important;
      line-height: 2rem !important;
      font-size: 1.5rem !important;
      padding-bottom: 50px !important;
      text-align: center !important;

      .v-divider {
        opacity: 40% !important;
        margin-top: 10px !important;
      }
    }
  }

  .v-btn {
    color: rgba(0, 0, 0, 0.8) !important;
    letter-spacing: 0.192em !important;
  }

  .title {
    color: rgba(0, 0, 0, 0.65) !important;
  }
}
</style>
