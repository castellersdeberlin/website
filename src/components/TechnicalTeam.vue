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
                {{ person }}
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
      { role: 'capcolla', who: ['Xarli S.'] },
      { role: 'sotscapcolla', who: ['Sílvia M.'] },
      { role: 'canalla', who: ['Berta C.', 'Marina M.', 'Míriam P.'] },
      { role: 'troncs', who: ['Sílvia M.', 'Cristina M.', 'Laura B.'] },
      { role: 'pinya', who: ['Andreu E.', 'Javi O.'] },
    ],
  }),
};
</script>

<i18n>
en:
  head: "Head"
  tecnica: "Technical team"
  capcolla: "Cap of Colla"
  sotscapcolla: "Deputy Cap of Colla"
  canalla: "Team of Canalla"
  troncs: "Team of Troncs"
  pinya: "Team of Pinyes"
de:
  head: "Head"
  tecnica: "Technical team"
  capcolla: "Anführer"
  sotscapcolla: "Stellvertretender Anführer"
  canalla: "Kinderteam (Canalla)"
  troncs: "Stammteam (Troncs)"
  pinya: "Zapfenteam (Pinyes)"
ca:
  head: "Cap"
  tecnica: "Tècnica"
  capcolla: "Cap de Colla"
  sotscapcolla: "Sots-Cap de Colla"
  canalla: "Equip de Canalla"
  troncs: "Equip de Troncs"
  pinya: "Equip de Pinyes"
</i18n>
