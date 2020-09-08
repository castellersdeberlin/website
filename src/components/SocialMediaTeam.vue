<template>
  <v-card>
    <v-card-title class="primary">
      {{ $t('socialmedia') }}
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
      { role: '', who: ['Dennis B.', 'Míriam P.', 'Héctor B.'] },
    ],
  }),
};
</script>

<i18n>
en:
  socialmedia: "Social Media team"
de:
  socialmedia: "Social Media team"
ca:
  socialmedia: "Equip de Xarxes Socials"
</i18n>
