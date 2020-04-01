<template>
    <v-data-table
        :headers="this.colNames"
        :items="this.propDates"
        :group-by="this.propDates.month"
        hide-default-footer
        :options="this.options"
        class="dates-table"
    >
      <template v-slot:item.sessiondate="{ item }">
        <span>
          {{ new Date(item.sessiondate).toISOString().slice(0, 10)  }}
        </span>
      </template>


      <template v-slot:item.sessiontime="{ item }">
        <span >
          {{ item.sessiontime  }}
        </span>
      </template>

      <template v-slot:item.show="{ item }">
          <v-icon v-if="item.show" color="green" class="center">
          mdi-check
          </v-icon>
          <v-icon v-else color="red" class="center">
          close
          </v-icon>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px"
              elevation-10
              overlay-color="amber"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                @click="setFormMode(true)"
                class="amber darken-2 white--text"
              >
              <v-icon color="white">
                  mdi-plus
              </v-icon>
              <v-icon color="white" class="ml-4">
                  event
              </v-icon>
              </v-btn>
            </template>

            <DatesForm
              :editedSession="editedsession"
              :formatedDate="formatedDate"
              :formatedTime="editedsession.sessiontime"
              :editMode="editFormMode"
              :titleForm="titleForm"
              @dialogIsOpen="closeDialog"
              @updateDates="updateList"
            />

          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon
          medium
          class="mr-5"
          color="amber darken-2"
          @click="editItem(item); setFormMode(false)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          medium
          color="amber darken-2"
          @click="readThenDelete(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
</template>

<script>
import Parse from 'parse';
import DatesForm from './DatesForm.vue';

export default {
  name: 'DatesList',
  components: {
    DatesForm,
  },
  props: {
    propDates: {
      type: Array,
    },
  },
  data() {
    return {
      dates: this.propDates,
      defaultDate: {
        sessiondate: null,
        name: '',
        type: '',
        comments: '',
        show: false,
        attendancelist: [],
      },
      dialog: false,
      editedIndex: -1,
      editedsession: {},
      colNames: [
        {
          text: 'Date',
          value: 'sessiondate',
          align: 'start',
          sortable: true,
        },
        { text: 'Time', value: 'sessiontime' },
        { text: 'Ref', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Location', value: 'location' },
        { text: 'Attending', value: 'attendance' },
        { text: 'Comments', value: 'comments', sortable: false },
        {
          text: 'Editable',
          value: 'show',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          align: 'end',
        },
      ],
      options: {
        'items-per-page': 2,
        'group-by': ['month'],
      },
      titleForm: 'Add Date',
      editFormMode: false,
    };
  },
  methods: {

    closeDialog() {
      this.dialog = false;
    },

    delete(deldate) {
      deldate.destroy().then(() => {
        console.log(`Date ${deldate.get('sessiondate')} erased successfully`);
        this.$emit('updateDates', true);
      }).catch((response, error) => {
        console.log(`Error: ${error.message}`);
      });
    },

    editItem(item) {
      this.editedsession = { ...item };
      this.setFormMode(false);
      this.dialog = true;
    },

    readThenDelete(item) {
      console.log(item.sessiondate);
      const toDelete = item.sessiondate;
      const query = new Parse.Query('CdbSession');
      query.equalTo('sessiondate', toDelete);
      query.first().then((session) => {
        if (session) {
          console.log(`Date found with name: ${session.get('sessiondate')}`);
          this.delete(session);
        } else {
          console.log('Nothing found, please try again');
        }
      }).catch((error) => {
        console.log(`Error: ${error.code} + ${error.message}`);
      });
    },

    setFormMode(mode) {
      this.editFormMode = mode;
      if (this.editFormMode) {
        this.editedsession = this.defaultDate;
        this.titleForm = 'Add Date';
      } else {
        this.titleForm = 'Edit Date';
      }
    },

    updateList() {
      this.$emit('updateDates', true);
    },

  },

  computed: {
    formatedDate() {
      if (this.editedsession.sessiondate) {
        return this.editedsession.sessiondate.toISOString().slice(0, 10);
      }
      return null;
    },
  },

  watch: {
    propDates() {
      this.dates = this.propDates;
    },
  },
};
</script>

<style scoped>
  .dates-table {
    text-transform: capitalize;
    font-weight: 300;
  }
  .center {
    display: flex;
    justify-content: center;
  }
</style>

<i18n>
  en:
    addButtonText: '+'
  de:
    addButtonText: '+'
  ca:
    addButtonText: '+'
</i18n>

//TODO: delete on two steps over form
//TODO: time not updating correctly
//TODO: location > dropdown with options?
//TODO: refactor without ref(name) but parse object id
