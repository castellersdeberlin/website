<template>
  <div>
   <v-data-table
      class="memberlist"
      :headers="this.colNames"
      :items="this.tableItems"
      :items-per-page="50"
      item-key="name"
      hide-default-footer
      :search="search"
    >

      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px"
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
                  mdi-account
              </v-icon>
              </v-btn>
            </template>

              <MemberForm
                :info="editedItem"
                :editMode="editFormMode"
                :titleForm="titleForm"
                :memberList="memberList"
                @dialogIsOpen="closeDialog"
                @updateMemberList="updateMemberList"
              />

          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.member="{ item }">
          <v-icon v-if="item.member" :color="getBkg(item.member)" class="center">
          mdi-check
          </v-icon>
          <v-icon v-else :color="getBkg(item.member)" class="center">
          close
          </v-icon>
      </template>

      <template v-slot:item.regular="{ item }">
          <v-icon v-if="item.regular" :color="getBkg(item.regular)">
          mdi-check
          </v-icon>
          <v-icon v-else :color="getBkg(item.regular)">
          close
          </v-icon>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon
          class="pl-5"
          color="amber"
          medium
          @click="editItem(item); setFormMode(false)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          class="pl-5"
          color="amber"
          medium
          @click="readThenDelete(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    </div>
</template>

<script>
import Parse from 'parse';
import MemberForm from './MemberForm.vue';

export default {
  name: 'MemberList',
  components: {
    MemberForm,
  },
  props: {
    members: {
      type: Array,
    },
  },
  data() {
    return {
      dialog: false,
      tableItems: this.members,
      colNames: [
        {
          text: 'name',
          weight: '700',
          value: 'name',
          align: 'start',
          sortable: false,
        },
        { text: 'sho.', value: 'shoulders' },
        { text: 'arm.', value: 'arm' },
        { text: 'wei.', value: 'weight' },
        { text: 'adu.', value: 'adult' },
        { text: 'mem.', value: 'member' },
        { text: 'act.', value: 'regular' },
        {
          text: 'actions',
          value: 'actions',
          sortable: false,
          align: 'end',
        },
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        shoulders: null,
        arm: null,
        weight: null,
        adult: false,
        member: false,
        regular: false,
      },
      defaultItem: {
        name: '',
        shoulders: null,
        arm: null,
        weight: null,
        adult: false,
        member: false,
        regular: false,
      },
      search: '',
      toDelete: {},
      titleForm: 'Add Member',
      editFormMode: false,
    };
  },
  created() {
  },
  methods: {

    closeDialog() {
      this.dialog = false;
    },

    delete(member) {
      member.destroy().then(() => {
        console.log(`Member ${member.get('name')} erased successfully`);
      }).then(() => {
        this.$emit('updateMemberList', true);
      }).catch((response, error) => {
        console.log(`Error: ${error.message}`);
      });
    },

    editItem(item) {
      this.editedItem = { ...item };
      this.setFormMode(false);
      this.dialog = true;
    },

    getBkg(val) {
      if (val === true) {
        return '#fcbf43';
      }
      if (val === false) {
        return 'red';
      }
      return '#efefef';
    },

    setFormMode(mode) {
      this.editFormMode = mode;
      if (this.editFormMode) {
        this.editedItem = this.defaultItem;
        this.titleForm = 'Add Item';
      } else {
        this.titleForm = 'Edit Item';
      }
    },

    readThenDelete(item) {
      this.toDelete = item.name;
      const query = new Parse.Query('CdbMember');
      query.equalTo('name', this.toDelete);
      query.first().then((member) => {
        if (member) {
          console.log(`Member found with name: ${member.get('name')}`);
          this.delete(member);
        } else {
          console.log('Nothing found, please try again');
        }
      }).catch((error) => {
        console.log(`Error: ${error.code} + ${error.message}`);
      });
    },

    updateMemberList(val = true) {
      this.$emit('updateMemberList', val);
    },
  },

  computed: {
    memberList() {
      return this.tableItems.map((item) => item.name);
    },
  },

  watch: {
    members() {
      this.tableItems = this.members;
    },
  },
};
</script>

<style scoped>
    .memberlist {
      font-size: .4rem;
      font-weight: 300;
      text-transform: capitalize;
    }
</style>

<i18n>
en:
  addButtonText: '+'
  tableTitle: 'Members'
de:
  addButtonText: '+'
  tableTitle: 'Mitglieder'
ca:
  addButtonText: '+'
  tableTitle: 'Membres'
</i18n>
