<template>
  <div>
    <v-row
      column
      justify-center
      align-center
      class="text-center"
    >
      <v-col
        xs12
        sm8
        md6
      >
        <p>これまでの作品などをご紹介します。</p>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-row row wrap>
        <v-col v-for="item in contents" :key="item.id" xs12 sm6 md4>
          <ProductCard :title="item.title" :content="item.detail" :tags="item.tags" />
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
    console.log("env:"+process.env.API_BASE)
    const contents = await app.$axios.$get(process.env.API_BASE+'/api/contents?category=products')
    return { contents }
  },
}
</script>
