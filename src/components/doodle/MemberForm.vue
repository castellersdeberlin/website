<template>
    <v-form class="form-addcasteller"
      dense
      >
        <h1 class="h3 mb-3 font-weight-normal">{{ this.titleForm }}</h1>
        <v-text-field v-model="added.name"
            type="input"
            label="Name"
            id="inputNom"
            class="form-control"
            required
            autofocus>
        </v-text-field>
        <v-text-field v-model="added.shoulders"
            type="number"
            label="Shoulders (cm)"
            id="inputShoulders"
            required>
        </v-text-field>
        <v-text-field v-model="added.arm"
            type="number"
            label="Arm (cm)"
            id="inputArm"
            class="form-control"
            required>
        </v-text-field>
        <v-text-field v-model="added.weight"
            type="number"
            label="Weight (Kg)"
            id="inputWeight"
            class="form-control"
            required>
        </v-text-field>
        <v-row>
          <v-col cols="12" md="4">
            <v-checkbox v-model="added.member"
                class="form-checkb"
                type="checkbox"
                label="Member"
                dense
            >
            </v-checkbox>
          </v-col>
          <v-col cols="12" md="4">
            <v-checkbox v-model="added.regular"
                class="form-checkb"
                type="checkbox"
                label="Regular"
                dense
            >
            </v-checkbox>
          </v-col>
          <v-col cols="12" md="4">
            <v-checkbox v-model="added.adult"
                class="form-checkb"
                type="checkbox"
                label="Adult"
                dense
            >
            </v-checkbox>
          </v-col>
        </v-row>

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
  name: 'MemberForm',
  props: {
    info: {
      type: Object,
    },
    titleForm: {
      type: String,
      default: 'Add Member',
    },
    editMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      added: this.info,
      defaultItem: {
        name: '',
        shoulders: null,
        arm: null,
        weight: null,
        adult: false,
        member: false,
        regular: false,
      },
    };
  },
  methods: {
    close() {
      this.$emit('dialogIsOpen', false);
      setTimeout(() => {
        this.editedItem = this.defaultItem;
        this.editedIndex = -1;
      }, 300);
    },
    editItem(item) {
      this.editedIndex = this.tableItems.indexOf(item);
      this.editedItem = item;
    },
    savePost() {
      const Cst = Parse.Object.extend('CdbMember');
      const casteller = new Cst();

      casteller.set(this.added);
      casteller.set('shoulders', parseInt(this.added.shoulders, 10));
      casteller.set('weight', parseInt(this.added.weight, 10));
      casteller.set('arm', parseInt(this.added.arm, 10));

      casteller.save()
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
      const query = new Parse.Query('CdbMember');
      query.equalTo('name', this.added.name);
      query.first().then((membr) => {
        if (membr) {
          console.log(`Member found with name: ${membr.get('name')}`);
          this.update(membr);
        } else {
          console.log('Nothing found, please try again');
        }
      }).catch((error) => {
        console.log(`Error: ${error.code} + ${error.message}`);
      });
    },
    siblingUpdateList() {
      this.$emit('updateList', true);
    },
    update(membrfound) {
      membrfound.set(this.added);
      membrfound.set('shoulders', parseInt(this.added.shoulders, 10));
      membrfound.set('weight', parseInt(this.added.weight, 10));
      membrfound.set('arm', parseInt(this.added.arm, 10));

      membrfound.save().then((membr) => {
        console.log(`Member updated! Name: ${membr.get('name')}`);
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
  .form-addcasteller {
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
  .form-addcasteller .v-label,
  .form-checkb {
    font-size: .65rem;
    font-weight: 400;
  }
</style>
