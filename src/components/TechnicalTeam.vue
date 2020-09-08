<template>
  <v-card>
    <v-card-title class="primary">
      {{ $t('tecnica') }}
    </v-card-title>
    <v-card-text>
      <v-list disabled>
        <v-list-item-group color="primary">
          <v-list-item v-for="item in items"
                       :key="item.role">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ $t(item.role) }}
              </v-list-item-title>
              <div v-for="(person, index) in item.who"
                   :key="index">
                {{ person.name }}
                <span v-if="person.label">({{ $t(person.label) }})</span>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { role: 'capcolla', who: [{ name: 'Xarli S.' }] },
      { role: 'sotscapcolla', who: [{ name: 'Sílvia M.' }] },
      {
        role: 'canalla',
        who: [
          { name: 'Míriam P.', label: 'headf' },
        ],
      },
      {
        role: 'troncs',
        who: [
          { name: 'Sílvia M.', label: 'headf' },
          { name: 'Cristina M.' },
          { name: 'Laura B.' },
        ],
      },
      {
        role: 'pinya',
        who: [
          { name: 'Andreu E.', label: 'headm' },
          { name: 'Javi O.' },
        ],
      },
    ],
  }),
};
</script>

<i18n>
en:
  headf: "Head"
  headm: "Head"
  tecnica: "Technical team"
  capcolla: "Cap of Colla"
  sotscapcolla: "Deputy Cap of Colla"
  canalla: "Team of Canalla"
  troncs: "Team of Troncs"
  pinya: "Team of Pinyes"
de:
  headf: "Leiterin"
  headm: "Leiter"
  tecnica: "Technisches Team"
  capcolla: "Leiter"
  sotscapcolla: "Stellvertretende Leiterin"
  canalla: "Kinderteam (Canalla)"
  troncs: "Stammteam (Troncs)"
  pinya: "Zapfenteam (Pinyes)"
ca:
  headf: "Cap"
  headm: "Cap"
  tecnica: "Tècnica"
  capcolla: "Cap de Colla"
  sotscapcolla: "Sots-Cap de Colla"
  canalla: "Equip de Canalla"
  troncs: "Equip de Troncs"
  pinya: "Equip de Pinyes"
</i18n>
