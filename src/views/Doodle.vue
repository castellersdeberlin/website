<template>
  <v-container>
    <v-row>
      <v-col>

        <v-tabs v-model="tab">
          <v-tab v-for="tab in tabItems"
            :key="tab.index"
          >
          {{ $t(`tabTitle${tab.index}`) }}
          </v-tab>
        </v-tabs>

      </v-col>
    </v-row>

    <v-row>
      <v-col>

        <AttendanceList
          :itemsDates="this.tableDates"
          :members="this.tableMembers"
          @updateDates="this.getDates"
          v-if="tab === 0"
        />

        <DatesList
         :propDates="this.tableDates"
          @updateDates="this.getDates"
          v-if="tab === 1"
          />

        <MemberList
          :members="this.tableMembers"
          @updateMemberList="getMembers"
          v-if="tab === 2"
        />

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AttendanceList from '../components/doodle/AttendanceList.vue';
import DatesList from '../components/doodle/DatesList.vue';
import MemberList from '../components/doodle/MemberList.vue';

const Parse = require('parse');

export default {
  name: 'Doodle',
  components: {
    AttendanceList,
    DatesList,
    MemberList,
  },

  data: () => ({
    dates: [],
    members: [],
    tab: 1,
    tabItems: [
      { index: 0, name: 'Attendance' },
      { index: 1, name: 'Dates' },
      { index: 2, name: 'Members' },
    ],
  }),

  created() {
    this.initParse();
    this.getMembers();
    this.getDates();
  },

  methods: {

    initParse() {
      Parse.initialize(process.env.VUE_APP_B4APPID, process.env.VUE_APP_B4AJAVASCRIPTKEY);
      Parse.serverURL = process.env.VUE_APP_SERVERURL;
    },

    getDates() {
      const datesQuery = new Parse.Query('CdbSession');
      datesQuery.find().then((items) => {
        if (items) {
          this.dates = items;
        } else {
          console.log('Nothing found, please try again');
        }
      }).then(() => {
        console.log('Dates updated');
        // this.tableDates();
      }).catch((error) => {
        console.log(`Error ${error.code} with message: ${error.message}`);
      });
    },

    getMembers() {
      const query = new Parse.Query('CdbMember');
      query.find().then((items) => {
        if (items) {
          this.members = items;
        } else {
          console.log('Nothing found, please try again');
        }
      }).catch((error) => {
        console.log(`Error: ${error.code} / ${error.message}`);
      });
    },

  },

  computed: {

    tableDates() {
      const tDates = [];
      this.dates.map((item) => {
        const ob = {};
        ob.sessiondate = item.get('sessiondate');
        ob.year = item.get('sessiondate').toISOString().slice(0, 4);
        ob.month = item.get('sessiondate').toISOString().slice(5, 2);
        if (item.get('sessionTime') !== undefined) {
          ob.sessiontime = new Date().toISOString().slice(11, 15);
        } else {
          ob.sessiontime = '00:00';
        }
        ob.type = item.get('type');
        ob.name = item.get('name');
        ob.comments = item.get('comments');
        ob.location = item.get('location');
        ob.attendancelist = item.get('attendancelist');
        ob.show = item.get('show');

        tDates.push(ob);
        return null;
      });
      return tDates.sort((a, b) => b.sessiondate - a.sessiondate);
    },

    tableMembers() {
      const tItems = [];
      this.members.map((member) => {
        const ob = {};
        ob.name = member.get('name');
        ob.shoulders = member.get('shoulders');
        ob.weight = member.get('weight');
        ob.arm = member.get('arm');
        ob.regular = member.get('regular');
        ob.member = member.get('member');
        tItems.push(ob);
        return null;
      });
      return tItems;
    },
  },

  watch: {

  },
};
</script>

<i18n>
en:
  tabTitle0: 'Attendance'
  tabTitle1: 'Dates'
  tabTitle2: 'Members'
de:
  tabTitle0: 'Anwesenheit'
  tabTitle1: 'Dates'
  tabTitle2: 'Mitglieder'
ca:
  tabTitle0: 'Assistència'
  tabTitle1: 'Dates'
  tabTitle2: 'Membres'
</i18n>

//TODO: date format on input field in DatesForm >> on edit
//TODO: update lists when adding or updating member
