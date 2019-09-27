<template>
  <v-parallax :src="url"/>
  <!--<v-parallax fixed="true"-->
            <!--speedFactor="1">-->
    <!--<img :src="url"/>-->
  <!--</v-parallax>-->
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
img {
  box-shadow: inset 0 0 10px 8px rgba(0, 0, 0, 0.5);
  /*height: 150px;*/
}
</style>
