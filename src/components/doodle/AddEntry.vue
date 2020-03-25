<template>
    <v-container
    >
        <v-row>
            <v-col cols="12">
                <v-data-table
                    hide-default-footer
                    :headers="this.headers"
                />
            </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(colName, i) in this.headers"
          :key="i"
          >
            {{ colName.text }}
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="2">
                <v-autocomplete
                :items="this.memberList"
                placeholder="Add Name"
                >
                </v-autocomplete>
            </v-col>
            <v-col v-for="(date, i) in this.dates"
            :key="i"
            >
            <!-- {{ date.attendancelist }} -->
            </v-col>
            <v-col>
                <v-btn @click="addNew"
                >
                    Add
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Parse from 'parse';

export default {
  name: 'AddEntry',
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
      singleDate: undefined,
      attendancelist: [
        { name: 'Mercè', ref: '200416_r_tuesday', value: 0 },
        { name: 'Judit', ref: '200416_r_tuesday', value: 1 },
        { name: 'Benja', ref: '200416_r_tuesday', value: 0 },
        { name: 'Xarli', ref: '200416_r_tuesday', value: 2 },
      ],
      options: ['no', 'yes', 'maybe', undefined],
    };
  },
  methods: {
    addNew() {
      const newAdded = new Parse.Query('CdbSession');
      newAdded.equalTo('name', '200416_r_tuesday');
      newAdded.first().then((resp) => {
        if (resp) {
          this.update(resp);
        } else {
          console.log('Something went wrong');
        }
      }).catch((error) => {
        console.log(error.message);
      });
    },
    update(resp) {
      resp.set('attendancelist', this.attendancelist);
      resp.save().then(() => {
        console.log('Success!');
      }).catch((error) => {
        console.log(error.message);
      });
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
</style>
