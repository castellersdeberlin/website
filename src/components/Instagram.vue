<template>
  <SocialMedia name="Instagram"
               url="https://www.instagram.com/castellersdeberlin/"
               icon="mdi-instagram">
    <v-img
      max-height="350"
      max-width="340"
      src="/img/mercedesArenaCdB.jpg">
    </v-img>
  </SocialMedia>
</template>

<script>
// import InstagramEmbed from 'vue-instagram-embed';
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    SocialMedia,
    // InstagramEmbed,
  },

  // this cannot work due to insta api changes
  // TODO: delete and find another dynamic option?
/*   data: () => ({
    pics: [
      'B4k5Q_lHDH4',
      'B366yzdo9l4',
      'B2PjyhlItrJ',
      'B1J1qJ1oSQJ',
      'BzNoNYioiKM',
      'By5Ez_PoJAH',
      'Bysv5A6oZwy',
      'BygB1ttofPB',
      'ByIWLX7oGDe',
      'Bx0FBIKIHsL',
      'BxkmYMhIdKl',
      'BxU-e9YhGBr',
      'BxCc9q9hpzX',
      'BwpRsTphuFC',
      'BwIDFLpBB0o',
      'BvzL-f4BU-G',
      'BvkAmsRBZGF',
      'BvAEOFhFo2S',
      'BurLcTlBFUJ',
      'BuZMVu-hzzL',
      'BuHM8BfhJML',
      'Bt1JndyFHXR',
      'BtjILpphYns',
      'BtRLeoeheAp',
      'Bs_HrL4ln3o',
      'BstKq_JF4s1',
    ],
  }),

  computed: {
    randomPic() {
      return this.pics[Math.floor(Math.random() * this.pics.length)];
    },
  }, */
};
</script>
