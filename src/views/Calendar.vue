<template>
  <div>
    <!-- You can modify loading the default CSS below and use your own CSS if you want -->
    <!--<link rel="stylesheet" type="text/css" href="https://zetabee.com/icaljs/res/embed.css" />-->
    <!-- Move this div where you want to insert the calendar -->
    <!--<div id="icjs"></div>-->
    <!--{{ calendar() }}-->
  </div>
</template>

<script>
export default {
  methods: {
    calendar() {
      // Customize these as you wish
      const pastdays = 0; // # of past days to show (0 to 30)
      const futuredays = 60; // # of future days to show (0 to 365)
      const cachemins = 10; // # of minutes to wait before refreshing calendar data (2 to 1440)
      const container = 'icjs'; // ID of div to embed calendar into

      // Do not change anything below this
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = `https://zetabee.com/icaljs/embed?calid=VmFJL2UyNlBWYjlVdDZhM1B1VUxHZz09&offset=0&cachemins=${cachemins}&futuredays=${futuredays}&pastdays=${pastdays}&container=${container}`;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
    },
  },
};
</script>
