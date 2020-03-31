<template>
  <v-form class="attendance-form p-5">
    <v-container
      fluid
      >
      <v-row class="px-5">
        <v-col cols="4" md="3" xl="2">
      <h1 class="amber--text">
        {{ this.titleForm }}
      </h1>
          <v-autocomplete
            v-if="editFormMode"
            v-model="memberToAdd"
            :items="this.memberList"
            placeholder="Select Member"
          >
          </v-autocomplete>
          <h3 v-if="!editFormMode">
            {{ this.editedItem.name }}
          </h3>
        </v-col>
      </v-row>
      <v-row class="px-5 my-0">
        <v-col v-for="(colName, i) in this.headers"
        :key="i"
        >
          <div>
            {{ colName.text }}
          </div>
          <AttendanceSlot
            :dataProps="colName"
            :member="editedItem.name"
            :memberToAdd="memberToAdd"
            :itemData="editedItem"
          />
        </v-col>
      </v-row>
      <v-container
        class="py-0"
        fluid
      >
      <v-row class="px-5">
        <v-col cols="12" md="6">
        </v-col>
        <v-col cols="12" md="3">
          <v-btn @click.prevent="saveForm"
            type="submit"
            block
            class="btn mb-2 amber darken-2 white--text"
          >
            Save
          </v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn
            type="submit"
            block
            class="btn mb-2 white grey--text"
          >
            Cancel
          </v-btn>
        </v-col>
      </v-row>
      </v-container>
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
    editedItem: {
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
      memberToAdd: this.editedItem.name,
      singleDate: undefined,
      options: ['no', 'yes', 'maybe', undefined],
    };
  },
  methods: {

    saveForm() {
      this.$refs.attslot.forEach((item) => item.readThenUpdate());
      this.close();
    },

    close() {
      this.$emit('dialogIsOpen', false);
      setTimeout(() => {
        this.$emit('updateDates', true);
      }, 300);
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
  }
</style>

<i18n>
  en:
    formName: 'Attendance'
    tableTitle: 'Attendance'
  de:
    formName: 'Anwesenheit'
    tableTitle: 'Anwesenheit'
  ca:
    formName: 'Assistència'
    tableTitle: 'Assistència'
</i18n>
