<template>
    <v-container class="my-0">
        <v-radio-group v-model="radioGroup">
            <v-radio
                v-for="(item, i) in this.options"
                :key="i"
                :label="item.text"
                :value="item.value"
            ></v-radio>
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
    member: {
      type: String,
    },
  },
  data() {
    return {
      radioGroup: this.dataProps.value,
      options: [
        { text: 'no', value: 0 },
        { text: 'yes', value: 1 },
        { text: 'maybe', value: 2 },
      ],
    };
  },
  methods: {
    readThenUpdate() {
      const query = new Parse.Query('CdbSession');
      const val = this.dataProps.value.split('.')[0];
      console.log('val: ', val);
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

      if (!existing.indexOf(this.member)) {
        const nw = {
          name: this.member,
          value: this.radioGroup,
        };
        att.push(nw);
      } else {
        att.map((item, i) => {
          if (item.name === this.member) {
            att[i].value = this.radioGroup;
          }
          return null;
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
};
</script>

<style scoped>

</style>
