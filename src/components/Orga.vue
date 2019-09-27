<template>
  <div class="orga">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ $i18n.locale }}
        </v-card>
      </v-col>
    </v-row>
    <div class="column">
      <div class="department">{{ $t('tecnica') }}</div>
      <ul>
        <li><div class="team">{{ $t('capcolla') }}</div> Xarli S.</li>
        <li><div class="team">{{ $t('sotscapcolla') }}</div> Eloi M.</li>
        <li>
          <div class="team">{{ $t('canalla') }}</div>
          <div class="head">{{ $t('head') }}: Meri O., Íngrid S.</div>
          Míriam P., Berta C.
        </li>
        <li>
          <div class="team">{{ $t('troncs') }}</div>
          <div class="head">{{ $t('head') }}: Eloi M.</div>
          Laura B., Sílvia M.
        </li>
        <li>
          <div class="team">{{ $t('pinya') }}</div>
          <div class="head">{{ $t('head') }}: Andreu</div>
          Joachim, Albert, Benjamí
        </li>
      </ul>
    </div>
    <div class="column">
      <div class="department">{{ $t('junta') }}</div>
      <ul>
        <li><div class="team">{{ $t('presidenta') }}</div> Anna M.</li>
        <li><div class="team">{{ $t('vicepresidenta') }}</div> Laura L.</li>
        <li><div class="team">{{ $t('vocal') }}</div> Mercè A.</li>
        <li><div class="team">{{ $t('tresorer') }}</div> Róman D.</li>
        <li><div class="team">{{ $t('secretari') }}</div> Adrià M.</li>
        <li><div class="team">{{ $t('socialmedia') }}</div> Dennis B., Míriam P., Héctor B.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.orga {
  margin: auto;
  text-align: center;
}
ul {
  list-style-type: none;
  li {
    margin: 15px 0;
  }
  span {
    display: block;
  }
}
.column {
  &:first-child {
    float: right;
  }
  &:last-child {
    float: left;
  }
  width: 50%;
}
.department {
  text-transform: uppercase;
  margin-top: 50px;
  padding: 5px;
  text-align: center;
  /*border-bottom: 2px solid $secondary-color;*/
  /*color: $secondary-color;*/
  font-weight: bold;
}
.team {
  font-weight: bold;
}
.head {
  text-decoration: underline;
}
</style>

<i18n>
en:
  head: "Head"
  tecnica: "Technical team"
  capcolla: "Cap of Colla"
  sotscapcolla: "Deputy Cap of Colla"
  canalla: "Team of Canalla"
  troncs: "Team of Troncs"
  pinya: "Team of Pinyes"
  junta: "Board"
  presidenta: "President"
  vicepresidenta: "Vice-President"
  vocal: "Vocal"
  tresorer: "Treasury"
  secretari: "Secretary"
  socialmedia: "Social Media Team"
de:
  head: "Head"
  tecnica: "Technical team"
  capcolla: "Cap der Colla"
  sotscapcolla: "Stellvertretender Cap der Colla"
  canalla: "Team der Canalla"
  troncs: "Team der Troncs"
  pinya: "Team der Pinyes"
  junta: "Board"
  presidenta: "President"
  vicepresidenta: "Vice-President"
  vocal: "Vocal"
  tresorer: "Treasury"
  secretari: "Secretary"
  socialmedia: "Social Media Team"
ca:
  head: "Cap"
  tecnica: "Tècnica"
  capcolla: "Cap de Colla"
  sotscapcolla: "Sotscap de Colla"
  canalla: "Equip de Canalla"
  troncs: "Equip de Troncs"
  pinya: "Equip de Pinyes"
  junta: "Junta"
  presidenta: "Presidenta"
  vicepresidenta: "Vicepresidenta"
  vocal: "Vocal"
  tresorer: "Tresorer"
  secretari: "Secretari"
  socialmedia: "Equip de Xarxes Socials"
</i18n>
