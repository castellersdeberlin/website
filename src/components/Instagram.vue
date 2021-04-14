<template>
  <SocialMedia name="Instagram"
               url="https://www.instagram.com/castellersdeberlin/"
               icon="mdi-instagram">
    //not working at the moment
    //<instagram-embed :url="`https://www.instagram.com/p/${randomPic}/`"/>
    //mercedes arena post
    <instagram-embed :url="`https://www.instagram.com/p/CEpVR7gIlTq/`"/>
  </SocialMedia>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed';
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    SocialMedia,
    InstagramEmbed,
  },

//TODO: make this work since it displays nothing like this
/*
  data: () => ({
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
  },
*/
};
</script>
