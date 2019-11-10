<template>
  <v-card>
    <v-card-title class="primary">
      {{ $t('junta') }}
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
      { role: 'presidenta', who: ['Anna M.'] },
      { role: 'vicepresidenta', who: ['Laura L.'] },
      { role: 'vocal', who: ['Mercè A.'] },
      { role: 'tresorer', who: ['Róman D.'] },
      { role: 'secretari', who: ['Adrià M.'] },
      { role: 'socialmedia', who: ['Dennis B.', 'Míriam P.', 'Héctor B.'] },
    ],
  }),
};
</script>

<i18n>
en:
  junta: "Board"
  presidenta: "President"
  vicepresidenta: "Vice-President"
  vocal: "Vocal"
  tresorer: "Treasury"
  secretari: "Secretary"
  socialmedia: "Social Media Team"
de:
  junta: "Board"
  presidenta: "President"
  vicepresidenta: "Vice-President"
  vocal: "Vocal"
  tresorer: "Treasury"
  secretari: "Secretary"
  socialmedia: "Social Media Team"
ca:
  junta: "Junta"
  presidenta: "Presidenta"
  vicepresidenta: "Vicepresidenta"
  vocal: "Vocal"
  tresorer: "Tresorer"
  secretari: "Secretari"
  socialmedia: "Equip de Xarxes Socials"
</i18n>
