<template>
  <Rehearsal :title="$t('title')"
             time="18:00 - 20:30"
             address="Manteuffelstraße 79, 10999"
             url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.9726399321753!2d13.424443315706734!3d52.49773484563162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f0b71ac8c03%3A0x8f420937069487b8!2sCastellers%20de%20Berlin%20-%20Freitag!5e0!3m2!1sen!2sde!4v1573312719069!5m2!1sen!2sde">
    {{ $t('text') }}
  </Rehearsal>
</template>

<script>
import Rehearsal from './Rehearsal.vue';

export default {
  components: { Rehearsal },
};
</script>

<i18n>
en:
  title: Every Friday
  text: "Enter the school grounds and turn to the left once you reach the building with round
    stairs. Walk a few meters and you will see the sports hall is on your left, in front of the
    football field. Go inside and you'll find us in the rightmost hall."
de:
  title: Jeden Freitag
  text: "Geht auf das Schulgelände und geht dann nach links wo ihr einen runden Gebäudeaufgang
    findet. Geht ein paar Schritte weiter und ihr findet sie Sporthalle zu Eurer Linken, gegenüber
    vom Fußballfeld. Geht rein und ihr werdet uns in der letzten (rechten) der drei Hallen."
ca:
  title: Cada divendres
  text: "Entra a l'escola i gira a l'esquerra un cop arribis a l'edifici amb les escales rodones.
    Camina uns pocs metres i veuràs el gimnàs a la teva esquerra, davant del camp de futbol.
    Vés a dins i ens trobaràs a la sala que està més a la dreta."
</i18n>
