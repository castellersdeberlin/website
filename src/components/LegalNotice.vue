<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on"
             text
             class="transparent overline white--text">
        {{ $t('impressum') }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">{{ $t('impressum') }}</v-card-title>
      <v-card-text>
        <div class="overline font-weight-black">{{ $t('responsible') }}</div>
        <div>Laura Luiz Escoriza</div>
        <div>castellersdeberlin@gmail.com</div>
      </v-card-text>
      <v-card-text>
        <div class="overline font-weight-black">{{ $t('liability') }}</div>
        {{ $t('liabilityText') }}
      </v-card-text>
      <v-card-text>
        <div class="overline font-weight-black">{{ $t('dataProtection') }}</div>
        {{ $t('dataProtectionText') }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="dialog = false"
               color="primary"
               text>
          {{ $t('close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

<i18n>
en:
  impressum: Legal notice
  responsible: Verantwortlich für die Inhalte
  liability: Haftungshinweis
  liabilityText: "Trotz sorgfältiger inhaltlicher Kontrolle kann keine Haftung für die Inhalte
    externer Links übernommen werden. Für den Inhalt der verlinkten Seiten sind ausschließlich
    die betreibenden Personen verantwortlich."
  dataProtection: Datenschutz
  dataProtectionText: "Über den Webhosting-Dienst Netlify Inc. (\"Netlify\") werden
    nicht-personenbezogene Daten erhoben. Nach Auskunft des Dienstes werden in den Logfiles
    folgende Daten gespeichert, die nicht bestimmten Personen zuordenbar sind: Browsertyp/
    Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
    Uhrzeit der Serveranfrage, pseudonymisierte IP Adresse. Die Speicherung der Daten dienst
    ausschließlich der Traffic-Analyse der Website zu Optimierungszwecken. Es werden keine Daten
    an Dritte weitergegeben."
  close: Close
de:
  impressum: Impressum
ca:
  impressum: Avís Legal
</i18n>
