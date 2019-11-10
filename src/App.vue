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
    padding-top: 80px;
    padding-bottom: 80px;

    .section-title {
      font-weight: 900 !important;
      color: rgba(0, 0, 0, 0.8) !important;
      letter-spacing: 0.14em !important;
      text-transform: uppercase !important;
      line-height: 2rem;
      font-size: 1.5rem !important;
      padding-bottom: 50px;
      text-align: center;

      .v-divider {
        opacity: 40%;
        margin-top: 10px;
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
