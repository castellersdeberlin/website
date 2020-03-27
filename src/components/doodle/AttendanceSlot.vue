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
        <v-btn
          @click="readThenUpdate"
        >
        Update
        </v-btn>
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
      radioGroup: undefined,
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
      console.log(att);

      const existing = att.map((item) => item.name);

      if (!existing.indexOf(this.member)) {
        console.log('new entry');
        const nw = {
          name: this.member,
          value: this.radioGroup,
        };
        att.push(nw);
        // console.log(att);
      } else {
        console.log('entry existed');
        att.map((item, i) => {
          if (item.name === this.member) {
            att[i].value = this.radioGroup;
          }
          return null;
        });
      }

      console.log('att: ', att);
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
