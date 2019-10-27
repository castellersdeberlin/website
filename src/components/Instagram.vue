<template>
  <SocialMedia name="Instagram"
               :icon="svgPath">
    <instagram-embed :url="`https://www.instagram.com/p/${randomPic}/`"/>
  </SocialMedia>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed';
import { mdiInstagram } from '@mdi/js';
import SocialMedia from './SocialMedia.vue';

export default {
  components: { SocialMedia, InstagramEmbed },

  data: () => ({
    svgPath: mdiInstagram,
    pics: [
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
};
</script>
