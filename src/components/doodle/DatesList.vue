<template>
    <v-data-table
        :headers="this.colNames"
        :items="this.propDates"
        hide-default-footer
        sort-by='sessiondate'
        sort-desc
        class="dates-table"
    >
      <template v-slot:item.sessiondate="{ item }">
        <span>{{new Date(item.sessiondate).toLocaleString('de-De')}}</span>
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
        <v-toolbar flat color="#fff">
          <v-toolbar-title
              color="white"
          >
          {{ $t('formName') }}
          </v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          />
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px"
              elevation-10
              overlay-color="yellow"
          >
            <template v-slot:activator="{ on }">
              <v-btn color="secondary"
                dark class="mb-2"
                v-on="on"
                @click="setFormMode(true)"
              >
                Add Date
              </v-btn>
            </template>

            <DatesForm
              :info="editedsession"
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
          defaultSort: 'asc',
        },
        { text: 'Ref', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Location', value: 'location' },
        { text: 'Comments', value: 'comments', sortable: false },
        { text: 'Editable', value: 'show', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
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
        this.$emit('updateList', true);
      }).catch((response, error) => {
        console.log(`Error: ${error.message}`);
      });
    },
    editItem(item) {
      this.editedsession = { ...item };
      console.log(item.sessiondate);
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
    //   console.log('emit in dates list');
      this.$emit('updateList', true);
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
</style>

<i18n>
  en:
    formName: 'Rehearsals'
  de:
    formName: 'Proben'
  cat:
    formName: 'Assajos'
</i18n>
