<template>
  <v-container>
    <v-row class="section-title">
      <v-col>
        <v-tabs v-model="tab">
          <v-tab v-for="tab in tabItems"
            :key="tab.index"
          >
          {{ tab.name }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row>
      <v-col>

        <template v-if="tab === 0">
          <AttendanceList
            :itemsDates="this.tableDates"
            :members="this.tableMembers"
          />
        </template>

        <template v-if="tab === 1">
          <DatesList :propDates="this.tableDates"
            @updateList="getDates"
            />
        </template>

        <template v-if="tab === 2">
          <MemberList
            :members="this.tableMembers"
            @llisteners="setMembers"
          />
        </template>

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
    tableDates: [],
    tab: 0,
    tabItems: [
      { index: 0, name: 'Attendance' },
      { index: 1, name: 'Dates' },
      { index: 2, name: 'Members' },
    ],
    tableMembers: [],
  }),
  created() {
    this.initParse();
    this.getDates();
    this.getMembers();
  },
  methods: {
    initParse() {
      Parse.initialize(process.env.VUE_APP_B4APPID, process.env.VUE_APP_B4AJAVASCRIPTKEY);
      Parse.serverURL = process.env.VUE_APP_SERVERURL;
      // console.log('Initializing Application', process.env.VUE_APP_B4APPID);
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
        this.datesToTable();
      }).catch((error) => {
        console.log(`Error ${error.code} with message: ${error.message}`);
      });
    },
    datesToTable() {
      const tDates = [];
      this.dates.map((item) => {
        const ob = {};
        ob.sessiondate = item.get('sessiondate');
        // console.log('typeof', ob.sessiondate);
        ob.type = item.get('type');
        ob.name = item.get('name');
        ob.comments = item.get('comments');
        ob.location = item.get('location');
        ob.attendancelist = item.get('attendancelist');
        tDates.push(ob);
        // this.$emit('importDates', tDates);
        return null;
      });
      // console.log('tDates: ', tDates);
      this.tableDates = tDates;
    },
    setMembers(value) {
      console.log('value: ', value);
      this.members = value;
    },
    updateDates() {
      console.log('triggered');
      this.getDates();
    },
    getMembers() {
      const query = new Parse.Query('CdbMember');
      query.find().then((items) => {
        if (items) {
          this.members = items;
        } else {
          console.log('Nothing found, please try again');
        }
      }).then(() => {
        this.toTableMembers();
      }).catch((error) => {
        console.log(`Error: ${error.code} / ${error.message}`);
      });
    },
    toTableMembers() {
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
      this.tableMembers = tItems;
      // this.$emit('getMembersFromChild', this.tableMembers);
    },
    updateList() {
      this.getMembers();
    },
  },
  computed: {
    // datesList() {
    //   const ds = [];
    //   this.tableDates.map((item) => {
    //     const dob = {};
    //     dob.sessiondate = item.sessiondate;
    //     ds.push(dob);
    //     return null;
    //   });
    // console.log('ds: ', ds);
    // return ds;
    // },
  },
};
</script>

<style scoped>
</style>

<i18n>
en:
de:
ca:
</i18n>

//TODO: conditional icons on tables (members, attendance, based on value)
//TODO: date format on input field in DatesForm
//TODO: attendance formular
//TODO: update member list on adding or updating members
