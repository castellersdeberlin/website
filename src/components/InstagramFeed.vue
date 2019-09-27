<template>
  <div>
    <instagram-embed
      :url="`https://www.instagram.com/p/${randomPic}/`"
      :max-width="100"/>
  </div>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed';

export default {
  components: { InstagramEmbed },

  data: () => ({
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

<style scoped>

</style>
