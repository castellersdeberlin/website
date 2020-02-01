<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on"
             depressed
             width="100%"
             class="text-uppercase font-weight-black theme--light v-btn--flat">
        <v-icon>language</v-icon>
        &nbsp; {{ $i18n.locale }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="({ text, value }) in sortedLanguages"
                   :key="value"
                   @click="changeLanguage(value)">
        <v-list-item-title class="overline">{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    languages: [
      { text: 'Deutsch', value: 'de' },
      { text: 'English', value: 'en' },
      { text: 'Català', value: 'ca' },
    ],
  }),

  computed: {
    sortedLanguages() {
      const current = this.$i18n.locale;
      return [...this.languages].sort((lang1, lang2) => {
        if (lang1.value === current) return -1;
        if (lang2.value === current) return 1;
        return 0;
      });
    },
  },

  methods: {
    changeLanguage(lang) {
      this.$root.$i18n.locale = lang;
    },
  },
};
</script>
