<template>
<v-container>
  <h2 class="py-5">
    Gallery
  </h2>
  <v-row>
    <v-col
      v-for="(image, i) in images"
      :key="i"
      cols="4"
      class="col-12 col-md-4 col-lg-4"
    >
      <v-card height="100%">
        <v-img
          :src="image.src"
          :key="i"
          class="mx-auto"
          width="600"
          height="300"
        >
        </v-img>
        <v-card-title>
          {{ image.title }}
        </v-card-title>
        <v-card-text class="title font-weight-light">
          {{ image.content }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>


<script>
export default {
  data() {
    return {
      images: [
        {
          src: 'https://picsum.photos/id/33/400/300?grayscale',
          title: 'Spargel Fest Aufführung',
          content: 'Some description',
        },
        {
          src: 'https://picsum.photos/id/53/400/300?grayscale',
          title: 'Diada de Catalunya',
          content: 'Vam tenir l\'oportunitat d\'actuar a la Diada de Catalunya',
        },
        {
          src: 'https://picsum.photos/id/83/400/300?grayscale',
          title: 'Kürbis Fest',
          content: 'Some description',
        },
        {
          src: 'https://picsum.photos/id/63/400/300?grayscale',
          title: 'Some Title',
          content: 'Some description',
        },
        {
          src: 'https://picsum.photos/id/13/400/300?grayscale',
          title: 'Some Title',
          content: 'Some description',
        },
        {
          src: 'https://picsum.photos/id/23/400/300?grayscale',
          title: 'Some Title',
          content: 'Some description',
        },
        {
          src: 'https://picsum.photos/id/28/400/300?grayscale',
          title: 'Some Title',
          content: 'Some description',
        },
        {
          src: 'https://picsum.photos/id/183/400/300?grayscale',
          title: 'Some Title',
          content: 'Some description',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
