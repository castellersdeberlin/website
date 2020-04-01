<template>
    <v-container class="my-0">
        <h3 class="amber--text">
          {{ this.date }}
        </h3>
        <v-radio-group
          v-model="radioGroup"
          @change="activate"
          >
            <v-radio
                v-for="(item, i) in this.options"
                :key="i"
                :label="item.text"
                :value="item.value"
                color="amber"
            >

        <v-icon
          v-if="this.radioGroup === 0"
          color="red"
          class="center">
          close
        </v-icon>

            </v-radio>
        </v-radio-group>
    </v-container>
</template>

<script>
import Parse from 'parse';

export default {
  name: 'AttendanceSlot',

  props: {
    dataProps: {
      type: Object,
    },
    date: {
      type: String,
    },
    delSlotMode: {
      type: Boolean,
    },
    itemData: {},
    memberToAdd: {
      type: String,
    },
  },

  data() {
    return {
      radioGroup: this.itemData[`${this.dataProps.value}`],
      options: [
        { text: 'no', value: 0 },
        { text: 'yes', value: 1 },
        { text: 'maybe', value: 2 },
      ],
      modified: false,
    };
  },

  methods: {

    activate() {
      this.modified = true;
    },

    readThenUpdate() {
      if (this.modified && this.itemData.name !== 'none') {
        this.beforeUpdate();
      }
      if (this.delSlotMode && this.itemData.name !== 'none') {
        this.beforeUpdate();
      }
      return null;
    },

    beforeUpdate() {
      const query = new Parse.Query('CdbSession');
      query.equalTo('name', this.dataProps.value.split('.')[0]);
      query.first().then((sess) => {
        if (sess) {
          console.log(`Session found with name: ${sess.get('name')}`);
          this.update(sess);
        } else {
          console.log('Nothing found, please try again');
        }
      }).catch((error) => {
        console.log(`Error: ${error.code} + ${error.message}`);
      });
    },

    update(sess) {
      const att = sess.get('attendancelist');
      const existing = att.map((item) => item.name);

      if (existing.indexOf(this.itemData.name) === -1) {
        if (this.delSlotMode) {
          return;
        }
        const nw = {
          name: this.memberToAdd,
          value: this.radioGroup,
        };
        att.push(nw);
      } else {
        att.map((item, i) => {
          if (item.name === this.itemData.name) {
            if (this.delSlotMode) {
              att.splice(i, 1);
            } else {
              att[i].value = this.radioGroup;
            }
          }
          return att;
        });
      }
      sess.set('attendancelist', att);
      sess.save().then(() => {
        console.log('Session updated!');
      }).catch((error) => {
        console.log(`Error: ${error.message}`);
      });
    },

  },

  watch: {
    itemData() {
      this.radioGroup = this.itemData[`${this.dataProps.value}`];
    },
  },
};
</script>

<style scoped>

</style>
