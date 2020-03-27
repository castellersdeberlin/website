<template>
    <v-form class="attendance-form p-5">
      <v-container>
          <h1 class="px-5">
            {{ this.titleForm }}
          </h1>
          <v-row class="px-5">
              <v-col cols="4" md="3" xl="2">
                  <v-autocomplete
                  v-model="memberToAdd"
                  v-if="editFormMode"
                  :items="this.memberList"
                  placeholder="Select Member"
                  >
                  </v-autocomplete>
                  <h3
                    v-if="!editFormMode"
                  >
                    {{ this.attendance.name }}
                  </h3>
              </v-col>
          </v-row>
          <v-row class="px-5 my-0">
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
    attendance: {
      type: Object,
      required: true,
      default: () => {},
    },
    dates: {
      type: Array,
      required: true,
      default: () => [],
    },
    editFormMode: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    headers: {
      type: Array,
      required: true,
      default: () => [],
    },
    members: {
      type: Array,
      required: true,
      default: () => [],
    },
    titleForm: {
      type: String,
      required: true,
      default: () => 'Add Item',
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
    };
  },
  created() {

  },
  methods: {
    addNew() {
      this.$refs.attslot.forEach((item) => item.readThenUpdate());
    },
    close() {
      this.$emit('close');
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
