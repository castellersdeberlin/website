<template>
  <div>
   <v-data-table
      class="memberlist"
      :headers="this.propNames"
      :items="this.tableItems"
      :items-per-page="50"
      item-key="name"
      hide-default-footer
      :search="search"
    >

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

      <template v-slot:top>
        <v-toolbar flat color="#fff">
          <v-toolbar-title
            color="white"
          >
            Members
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
                Add Member
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

      <template v-slot:item.actions="{ item }">
        <v-icon
          class="pr-5"
          small
          color="#999"
          @click="editItem(item); setFormMode(false)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          class="pr-4"
          small
          @click="readThenDelete(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-btn @click="updateMemberList"> Update </v-btn>
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
      propNames: [
        {
          text: 'name',
          value: 'name',
          align: 'start',
          sortable: false,
        },
        { text: 'sho.', value: 'shoulders' },
        { text: 'arm.', value: 'arm' },
        { text: 'wei.', value: 'weight' },
        // { text: 'adu.', value: 'adult' },
        { text: 'mem.', value: 'member' },
        { text: 'act.', value: 'regular' },
        { text: 'actions', value: 'actions', sortable: false },
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
