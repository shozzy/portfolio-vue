<template>
  <div>
      <v-container fluid>
        <v-row row wrap>
          <v-col v-for="item in contents" v-bind:key="item.id" xs12 sm6 md4>
            <ProductCard v-bind:title="item.title" v-bind:content="item.detail"/>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  async asyncData({ app }) {
    const contents = await app.$axios.$get('/api/contents')
    return { contents }
  },
}
</script>
