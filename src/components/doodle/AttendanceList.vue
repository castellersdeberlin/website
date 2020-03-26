<template>
  <v-container>
    <v-data-table
      :headers="this.tableHeaders"
      :items="this.tableAttendance"
      hide-default-footer
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
            <AddEntry
              :headers="tableHeaders"
              :members="members"
              :dates="itemsDates"
              :editMode="editFormMode"
              :titleForm="titleForm"
              />
          </v-dialog>
        </v-toolbar>
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


  </v-container>
</template>

<script>
import AddEntry from './AddEntry.vue';

export default {
  name: 'AttendanceList',
  components: {
    AddEntry,
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
      titleForm: 'Add',
    };
  },
  created() {
  },
  methods: {
    closeDialog() {
      this.dialog = false;
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
    tableHeaders() {
      const headerob = [];
      headerob[0] = { text: 'Name', value: 'name' };
      this.itemsDates.map((dateItem) => {
        const ob = {
          text: dateItem.sessiondate.toLocaleString('de-De'),
          value: `${dateItem.name}.value`,
        };
        headerob.push(ob);
        return null;
      });
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
              ob[`${itemRef}.value`] = cst.value;
              Att.push(ob);
            } else {
              // find index of object with name === cst.name
              // assign new property to Att[foundindex]
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
</style>

<i18n>
  en:
    formName: 'Attendance'
    tableTitle: 'Members'
  de:
    formName: 'Anwesenheit'
    tableTitle: 'Mitglieder'
  cat:
    formName: 'Assistència'
    tableTitle: 'Membres'
</i18n>
