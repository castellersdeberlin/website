<template>
  <v-container>
    <v-row class="section-title">
      <v-col>
        <div class="black--text">
          {{ $t('calendar') }}
        </div>
        <v-divider class="black"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <iframe :src="`https://calendar.google.com/calendar/embed?wkst=2&amp;bgcolor=%23fafafa&amp;ctz=Europe%2FBerlin&amp;src=cTFuY2xtNGEwOThqcXE3b2Q3aTExdThzbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OGthcjluZ21oNzZzdW8zYm42Y2xobWxtMGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cnBicmkxdmo0NWZubmhrMGdqb2k0M2s3c29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239D7000&amp;color=%23329262&amp;color=%23871111&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;showTz=1&amp;hl=${$i18n.locale}`"
                style="border: 0"
                width="100%"
                height="550"
                frameborder="0"
                scrolling="no">
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<i18n>
en:
  calendar: Rehearsals and performances
de:
  calendar: Proben und Aufführungen
ca:
  calendar: Assajos i actuacions
</i18n>
