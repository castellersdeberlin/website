<template>
    <v-data-table
      :headers="this.tableHeaders"
      :items="this.tableAttendance"
      :dateCols="this.datesElements"
      hide-default-footer
      class="dates-table"
      >

      <template v-slot:top>
        <v-toolbar flat color="#fff">
          <v-toolbar-title
            color="white"
          >
          {{ $t('tableTitle') }}
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="90%"
            elevation-10
            overlay-color="yellow"
          >
            <template v-slot:activator="{ on }">
              <v-btn color="secondary"
                dark class="mb-2"
                v-on="on"
                @click="setFormMode(true)"
              >
                Add
              </v-btn>
            </template>
            <AttendanceForm
              :headers="datesElements"
              :members="members"
              :dates="itemsDates"
              :editFormMode="editFormMode"
              :titleForm="titleForm"
              :attendance="editedItem"
              class="attendance-dialog"
              @close="closeDialog"
              />
          </v-dialog>
        </v-toolbar>
      </template>

      <template class="sloty"
        v-for="(colmn, i) in this.datesElements" #[`item.${colmn.value}`]="{ item }">
          <div :key="i">
              <v-icon v-if="item[`${colmn.value}`] === 0" color="red">
                close
              </v-icon>
              <v-icon v-if="item[`${colmn.value}`] === 1" color="green">
                done
              </v-icon>
              <v-icon v-if="item[`${colmn.value}`] === 2" color="#e2e2e2">
                help
              </v-icon>
            </div>
      </template>


      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          color="#999"
          @click="editItem(item); setFormMode(false)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="readThenDelete(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
</template>

<script>
import AttendanceForm from './AttendanceForm.vue';

export default {
  name: 'AttendanceList',
  components: {
    AttendanceForm,
  },
  props: {
    itemsDates: {
      type: Array,
      required: true,
      default: () => [],
    },
    members: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      dates: this.itemsDates,
      dialog: false,
      editedItem: {},
      defaultItem: {},
      editFormMode: false,
      titleForm: 'Add Item',
      attending: [],
      notAttending: [],
      maybeAttending: [],
    };
  },
  created() {
    this.getTotals();
  },
  methods: {
    closeDialog() {
      this.dialog = false;
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
    editItem(item) {
      this.editedItem = { ...item };
      this.setFormMode(false);
      this.dialog = true;
    },
    setFormMode(mode) {
      this.editFormMode = mode;
      if (this.editFormMode) {
        this.editedItem = this.defaultItem;
        this.titleForm = 'Add';
      } else {
        this.titleForm = 'Edit';
      }
    },
  },
  computed: {
    datesElements() {
      const headerob = [];
      this.itemsDates.map((dateItem) => {
        const ob = {
          text: dateItem.sessiondate.toLocaleString('de-De'),
          value: `${dateItem.name}value`,
        };
        headerob.push(ob);
        return null;
      });
      return headerob;
    },
    tableHeaders() {
      const ob = [];
      ob[0] = { text: 'Name', value: 'name' };
      const headerob = ob.concat(this.datesElements);
      headerob.push({ text: 'Actions', value: 'actions' });
      return headerob;
    },
    tableAttendance() {
      const Att = [];
      const names = [];
      this.itemsDates.map((item) => {
        const itemRef = item.name;
        // if attendance entry for the date exists
        if (item.attendancelist) {
          item.attendancelist.map((cst) => {
            if (names.indexOf(cst.name) === -1) {
              names.push(cst.name);
              const ob = {};
              ob.name = cst.name;
              ob[`${itemRef}value`] = cst.value;
              Att.push(ob);
            } else {
              // find index of object with name === cst.name
              // assign new property to Att[foundindex]
              Att.map((attItem, i) => {
                if (attItem.name === cst.name) {
                  Att[i][`${itemRef}value`] = cst.value;
                }
                return null;
              });
            }
            return null;
          });
        }
        return null;
      });
      return Att;
    },
  },
  watch: {
    itemsDatesWatch() {
      this.dates = this.itemsDates;
    },
  },
};
</script>

<style scoped>
  .dates-table {
    text-transform: capitalize;
    font-weight: 300;
  }
  .sloty {
    background: yellow !important;
    border: 2px dashed black;
  }
</style>

<i18n>
  en:
    formName: 'Attendance'
    tableTitle: 'Attendance'
  de:
    formName: 'Anwesenheit'
    tableTitle: 'Anwesenheit'
  cat:
    formName: 'Assistència'
    tableTitle: 'Assistència'
</i18n>

//TODO: v-slot convert number to icon
