<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <p>プロフィールをご紹介します。</p>
      </v-col>
    </v-row>
    <v-row row wrap>
      <v-col v-for="item in sortedProfile">
        <ProductCard :title="item.title" :content="item.detail" :tags="item.tags" />
      </v-col>
    </v-row>
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
    const profile = await app.$axios.$get(process.env.API_BASE+'/api/contents?category=profile')
    return { profile }
  },
  computed: {
    sortedProfile(){
      return this.profile.sort((a, b) => {
        return a.sequence - b.sequence
      });
    },
  },
}
</script>

<style>
p span{
  display: inline-block;
  white-space: nowrap;
}
.v-chip {
  margin: 8px;
}
</style>