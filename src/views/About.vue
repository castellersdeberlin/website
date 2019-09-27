<template>
  <div>
    <p>{{ $t('about1') }}</p>
    <Orga/>
  </div>
</template>

<script>
import Orga from '../components/Orga.vue';

export default {
  components: {
    Orga,
  },
};
</script>

<style scoped>

</style>

<i18n>
en:
  about1: "We are a colla castellera born in Berlin on January 2018.
    We celebrate our anniversary on the 15h April, coincidiendo with the date of our first
    rehearsal."
ca:
  about1: "Som una colla castellera fundada a Berlín el gener del 2018. Celebrem el nostre
    aniversari el 15 d'abril, coincidint amb la data del nostre primer assaig."
</i18n>
