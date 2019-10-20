<template>
  <div>
      <v-container fluid>
        <v-row row wrap>
          <v-col v-for="item in contents" v-bind:key="item.id" xs12 sm6 md4>
            <ProductCard v-bind:title="item.title" v-bind:content="item.detail"/>
          </v-col>
        </v-row>
      </v-container>
<!--    <div v-for="item in contents">{{ item }}</div> -->
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data() {
    return {
        contents: "",
    };
  },
  methods: {
    async getJSON() {
      try {
        const response = await this.$axios.$get('/api/contents')
        this.contents = response
      } catch (e) {
        console.error(e)
      }
    }
  },
  mounted(){
    this.getJSON()
  }
}
</script>
