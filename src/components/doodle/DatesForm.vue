<template>
    <v-form class="form-adddate"
      dense
      >
      <h1 class="h3 mb-3 font-weight-normal">{{ this.titleForm }}</h1>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >

        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="added.sessiondate"
            label="Date"
            prepend-icon="event"
            hint="DD/MM/YYYY"
            persistent-hint
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="added.sessiondate"
          @input="menu2 = false"
        >
        </v-date-picker>
      </v-menu>

        <v-text-field v-model="added.name"
            type="text"
            label="Ref"
            required>
        </v-text-field>
        <v-text-field v-model="added.type"
            type="text"
            label="Type"
            required>
        </v-text-field>
        <v-text-field v-model="added.comments"
            type="text"
            label="Comments"
            required>
        </v-text-field>

        <template class="baux" v-slot:added.sessiondate="{ item }">
          <div class="baux">
            {{ item.toLocaleString('de-De') }}
          </div>
        </template>

        <v-row>
          <v-col cols="12" md="4" v-if="this.editMode">
            <v-btn v-on:click="this.savePost"
                class="btn btn-lg btn-primary mb-2"
                block
                type="button">
                    Add
            </v-btn>
          </v-col>
          <v-col cols="12" md="4" v-if="!this.editMode">
            <v-btn v-on:click="this.readThenUpdate"
                class="btn btn-lg btn-secondary mb-2"
                block
                type="button">
                    Update
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn
              @click="this.close"
              block
              class="btn btn-lg btn-primary mb-2"
            >
                Cancel
              </v-btn>
          </v-col>
        </v-row>
    </v-form>

</template>

<script>
import Parse from 'parse';

export default {
  name: 'DatesForm',
  props: {
    info: {
      type: Object,
    },
    titleForm: {
      type: String,
      default: 'Add Date',
    },
    editMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      added: this.info,
      modal: false,
      menu: false,
      menu2: false,
      defaultItem: {
        sessiondate: '',
        type: '',
        comments: '',
      },
    };
  },
  methods: {
    close() {
      this.$emit('dialogIsOpen', false);
      setTimeout(() => {
        this.added = this.defaultItem;
        this.editedIndex = -1;
      }, 300);
    },
    editItem(item) {
      this.editedIndex = this.tableItems.indexOf(item);
      this.added = item;
    },
    savePost() {
      const CdbS = Parse.Object.extend('CdbSession');
      const sessionDate = new CdbS();

      sessionDate.set(this.added);
      sessionDate.set('sessiondate', new Date(this.added.sessiondate));

      sessionDate.save()
        .then((res) => {
          console.log(`New object created with objectId: ${res.id}`);
        }, (error) => {
          console.log(`Failed to create new object, with error code: ${error.message}`);
        });
      this.$set(this.added, this.defaultItem);
      this.close();
      this.siblingUpdateList();
    },
    readThenUpdate() {
      const query = new Parse.Query('CdbSession');
      query.equalTo('sessiondate', this.added.sessiondate);
      query.first().then((sess) => {
        if (sess) {
          console.log(`Date found with name: ${sess.get('name')}`);
          this.update(sess);
        } else {
          console.log('Nothing found, please try again');
        }
      }).catch((error) => {
        console.log(`Error: ${error.code} + ${error.message}`);
      });
    },
    siblingUpdateList() {
      this.$emit('updateDates', true);
    },
    update(sessFound) {
      sessFound.set(this.added);

      sessFound.save().then(() => {
        console.log('Date updated!');
      }).catch((error) => {
        console.log(`Error: ${error.message}`);
      });
      this.close();
      this.siblingUpdateList();
    },
  },
  watch: {
    info() {
      this.added = this.info;
    },
  },
};
</script>

<style scoped>
  .form-adddate {
    font-size: .65rem;
    background-color: #fff;
    font-weight: 400;
    max-width: 100%;
    margin: 0 auto;
    border-left: 1px solid gray;
    padding: 2rem;
  }
  input {
    padding: .25rem .5rem .25rem 2rem;
  }
  .form-adddate .v-label,
  .form-checkb {
    font-size: .65rem;
    font-weight: 400;
  }
  .baux {
    background: yellow;
    border: 3px gray dashed;
  }
</style>
