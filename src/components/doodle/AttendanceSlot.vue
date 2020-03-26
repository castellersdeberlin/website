<template>
    <v-container>
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
      console.log('attendance for this session: ', att);
      console.log('member to add: ', this.member);
      const nw = {
        name: this.member,
        ref: this.dataProps.value.split('.')[0],
        value: this.radioGroup,
      };
      att.push(nw);
      console.log(att);

      sess.set('attendancelist', att);

      sess.save().then(() => {
        console.log('Session updated!');
      }).catch((error) => {
        console.log(`Error: ${error.message}`);
      });
      // this.close();
      // this.siblingUpdateList();
    },
  },
};
</script>

<style scoped>

</style>
