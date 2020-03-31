<template>
  <div>
  <v-data-table
    :headers="this.tableHeaders"
    :items="this.tableAttendance"
    :dateCols="this.datesElements"
    items-per-page=1000
    hide-default-footer
    class="dates-table"
  >
    <template v-slot:top>
      <v-toolbar flat>
          <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="90%"
          elevation-10
          overlay-color="amber"
        >
          <template v-slot:activator="{ on }">
            <v-btn
                class="amber darken-2 white--text"
                v-on="on"
                @click="setFormMode(true)"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
              <v-icon color="white" class="ml-4">
                event
              </v-icon>
              <v-icon color="white" class="ml-4">
                mdi-account-question
              </v-icon>
            </v-btn>
          </template>
          <AttendanceForm
            :headers="datesElements"
            :members="members"
            :dates="itemsDates"
            :editFormMode="editFormMode"
            :titleForm="titleForm"
            :editedItem="editedItem"
            @dialogIsOpen="closeDialog"
            @updateDates="getDates"
            class="attendance-dialog"
          />
        </v-dialog>
      </v-toolbar>
    </template>

    <template
      v-for="(colmn, i) in this.datesElements"
      #[`item.${colmn.value}`]="{ item }">
      <div :key="i">
        <v-icon
          v-if="item[`${colmn.value}`] === 0"
          color="red"
          class="center">
          close
        </v-icon>
        <v-icon
          v-if="item[`${colmn.value}`] === 1"
          color="green"
          class="center">
          done
        </v-icon>
        <v-icon
          v-if="item[`${colmn.value}`] === 2"
          class="center grey--text">
          mdi-account-question
        </v-icon>
        <v-icon
          v-if="item[`${colmn.value}`] === undefined"
          color="#e2e2e2"
          class="center">
          mdi-minus
        </v-icon>
      </div>
    </template>

    <template v-for="(h, i) in this.tableHeaders"
      #[`header.${h.text}`]="{ header }"
      >
      <div :key="i" class="baux center">
        <div>
          {{ header.text.split(', ')[0] }}
        </div>
        <div>
          some
        </div>
      </div>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        medium
        color="amber darken-2"
        class="ml-5"
        @click="editItem(item); setFormMode(false)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        medium
        color="amber darken-2"
        class="ml-5"
        @click="readThenDelete(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>

  <v-divider color="#000" />

  <v-data-table
    :headers="this.tableHeaders"
    :items="this.totals"
    hide-default-footer
    class="results-table"
    >

    <template #item.name="{ item }">
      <div>
        <v-icon v-if="item.name == 0" color="red">
          close
        </v-icon>
        <v-icon v-if="item.name == 1" color="green">
          done
        </v-icon>
        <v-icon v-if="item.name == 2" color="#e2e2e2">
          help
        </v-icon>
      </div>
    </template>

  </v-data-table>
  </div>
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
      attendance: [],
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    editItem(item) {
      this.editedItem = { ...item };
      this.setFormMode(false);
      this.dialog = true;
    },
    getDates() {
      this.$emit('updateDates', true);
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
    getTotals() {
      const attendanceLoop = [];

      this.itemsDates.map((date) => {
        const attDate = {
          name: date.name,
          attending: [],
          notattending: [],
          maybeattending: [],
        };

        date.attendancelist.map((item) => {
          if (item.value === 0) {
            attDate.notattending.push(item.name);
            return attDate;
          }
          if (item.value === 1) {
            attDate.attending.push(item.name);
            return attDate;
          }
          if (item.value === 2) {
            attDate.maybeattending.push(item.name);
            return attDate;
          }
          return null;
        });
        attendanceLoop.push(attDate);
        return null;
      });
      this.attendance = attendanceLoop;
      // return this.totals;
    },
  },
  computed: {
    totals() {
      this.getTotals();

      const totalItems = [
        {
          pos: 0,
          name: '0',
        },
        {
          pos: 1,
          name: '1',
        },
        {
          pos: 2,
          name: '2',
        },
      ];
      this.attendance.map((attitem) => {
        const name = `${attitem.name}.value`;
        totalItems.map((titem, i) => {
          if (titem.pos === 0) {
            totalItems[i][name] = attitem.notattending.length;
          }
          if (titem.pos === 1) {
            totalItems[i][name] = attitem.attending.length;
          }
          if (titem.pos === 2) {
            totalItems[i][name] = attitem.maybeattending.length;
          }
          return null;
        });
        return totalItems;
      });
      return totalItems;
    },

    datesElements() {
      const headerob = [];
      const datesShow = this.itemsDates.filter((filt) => filt.show === true);

      datesShow.sort((a, b) => a.sessiondate - b.sessiondate);

      datesShow.map((dateItem) => {
        const ob = {
          text: dateItem.sessiondate.toLocaleString('de-De').split(',')[0],
          value: `${dateItem.name}.value`,
          align: 'center',
        };
        headerob.push(ob);
        return null;
      });
      return headerob;
    },

    tableHeaders() {
      const ob = [];
      ob[0] = { text: '', value: 'name', width: '100' };
      const headerob = ob.concat(this.datesElements);
      headerob.push({
        text: '',
        value: 'actions',
        align: 'end',
        width: '120',
      });
      return headerob;
    },

    tableAttendance() {
      const Att = [];
      const names = [];
      this.itemsDates.map((item) => {
        const itemRef = item.name;
        if (item.attendancelist) {
          item.attendancelist.map((cst) => {
            if (names.indexOf(cst.name) === -1) {
              names.push(cst.name);
              const ob = {};
              ob.name = cst.name;
              ob[`${itemRef}.value`] = cst.value;
              Att.push(ob);
            } else {
              Att.map((attItem, i) => {
                if (attItem.name === cst.name) {
                  Att[i][`${itemRef}.value`] = cst.value;
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
  .results-table {
    border-top: 4px #fcbf43 solid;
    border-bottom: 4px #fcbf43 solid;
  }
  .center {
    display: flex;
    justify-content: center;
  }
</style>

<i18n>
  en:
    formName: 'Attendance'
    tableTitle: 'Attendance'
    addButtonText: '+'
  de:
    formName: 'Anwesenheit'
    tableTitle: 'Anwesenheit'
    addButtonText: '+'
  ca:
    formName: 'Assistència'
    tableTitle: 'Assistència'
    addButtonText: '+'
</i18n>

//TODO: v-slot convert number to icon
