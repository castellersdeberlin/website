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
                  ref="attslot"
              />
            </v-col>
          </v-row>
          <v-row>
              <v-col cols="2">
                  <v-btn @click.prevent="addNew"
                    type="submit"
                    class="btn btn-lg btn-primary mb-2"
                  >
                      Add Attendance
                  </v-btn>
              </v-col>
          </v-row>
        </v-container>
    </v-form>
</template>

<script>
// import Parse from 'parse';
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
      options: ['no', 'yes', 'maybe', undefined],
      attending: [],
      notAttending: [],
      maybeAttending: [],
    };
  },
  created() {

  },
  methods: {
    addNew() {
      this.$refs.attslot.forEach((item) => item.readThenUpdate());
    },
    getTotals() {
      const att0 = [];
      const att1 = [];
      const att2 = [];
      this.members.map((member) => {
        if (member.value === 0) {
          att0.push(member);
        }
        if (member.value === 1) {
          att1.push(member);
        }
        if (member.value === 2) {
          att2.push(member);
        }
        return null;
      });
      this.notAttending = att0;
      this.attending = att1;
      this.maybeAttending = att2;
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
