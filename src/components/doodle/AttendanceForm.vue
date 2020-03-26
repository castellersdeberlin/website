<template>
    <v-form class="attendance-form p-5">
      <v-container>
          <v-row>
              <v-col cols="4" md="3" xl="2">
                  <v-autocomplete
                  v-model="memberToAdd"
                  :items="this.memberList"
                  placeholder="Add Name"
                  >
                  </v-autocomplete>
              </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(colName, i) in this.headers"
            :key="i"
            >
              <div>
              {{ colName.text}}
              </div>
              <AttendanceSlot
                  :dataProps="colName"
                  :member="memberToAdd"
              />
            </v-col>
          </v-row>
          <v-row>
              <v-col cols="2">
              </v-col>
              <v-col hidden>
                  <v-btn @click="addNew"
                  >
                      Add
                  </v-btn>
              </v-col>
          </v-row>
        </v-container>
    </v-form>
</template>

<script>
import Parse from 'parse';
import AttendanceSlot from './AttendanceSlot.vue';

export default {
  name: 'AttendanceForm',
  components: {
    AttendanceSlot,
  },
  props: {
    members: {
      type: Array,
      required: true,
      default: () => [],
    },
    dates: {
      type: Array,
      required: true,
      default: () => [],
    },
    headers: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
      memberToAdd: '',
      singleDate: undefined,
      attendancelist: [
        { name: 'Mercè', ref: '200416_r_tuesday', value: 0 },
        { name: 'Judit', ref: '200416_r_tuesday', value: 1 },
        { name: 'Benja', ref: '200416_r_tuesday', value: 0 },
        { name: 'Xarli', ref: '200416_r_tuesday', value: 2 },
      ],
      options: ['no', 'yes', 'maybe', undefined],
    };
  },
  methods: {
    addNew() {
      const newAdded = new Parse.Query('CdbSession');
      newAdded.equalTo('name', '200416_r_tuesday');
      newAdded.first().then((resp) => {
        if (resp) {
          this.update(resp);
        } else {
          console.log('Something went wrong');
        }
      }).catch((error) => {
        console.log(error.message);
      });
    },
    update(resp) {
      resp.set('attendancelist', this.attendancelist);
      resp.save().then(() => {
        console.log('Success!');
      }).catch((error) => {
        console.log(error.message);
      });
    },
  },
  computed: {
    memberList() {
      return this.members.map((m) => m.name);
    },
  },
};
</script>

<style scoped>
  .attendance-form {
    background: #fff;
    width: 100%;
    padding: 0;
    /* margin: 0 -1.5rem; */
    /* width: 100%; */
  }
</style>
