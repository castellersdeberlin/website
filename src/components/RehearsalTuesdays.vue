<template>
  <Rehearsal :title="$t('title')"
             time="18:00 - 20:30"
             address="Lobeckstraße 62, 10969"
             url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.1921983583239!2d13.404225807926638!3d52.50142469433206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fd1af5619b7%3A0xf8defcd8c0c9d381!2sCastellers%20de%20Berlin%20-%20Dienstag!5e0!3m2!1sen!2sde!4v1573312184243!5m2!1sen!2sde">
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
  title: Every Tuesday
  text: "Don't cross the parking area and turn to the right, to where the football fields are.
    Then find the big door to the sports hall on your right and knock. We'll open as soon as
    we hear you."
de:
  title: Jeden Dienstag
  text: "Überquert den Parkplatz und dann rechts, dort wo die Fußballfelder sind.
    Dort findet ihr eine größere Metalltür zur Sporthalle zu Eurer Rechten. Klopft und wir
    machen Euch auf sobald wir Euch hören."
ca:
  title: Cada dimarts
  text: "Creua l'aparcament de cotxes i gira a la dreta, cap a on són els camps
    de futbol. Busca la gran porta metàl·lica del gimnàs a la teva dreta i pica la porta.
    T'obrirem tan bon punt et sentim."
</i18n>
