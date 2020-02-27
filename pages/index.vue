<template>

  <v-row
    justify="space-around"
    align="center"
    class="text-center"
  >
    <v-col
      xs12
      sm8
      md6
      class="pa-0"
    >
      <v-img
        :src="image_src"
        :lazy-src="lazy_src"
      />
    </v-col>
    <v-col
      xs12
      sm8
      md6
      class="pl-0 pr-0"
    >
      <v-card>
        <v-card-text>
          <template
            v-for="item in sortedTop"
          >
            <p>{{item.detail}}</p>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ app }) {
    console.log("env:"+process.env.API_BASE)
    const top = await app.$axios.$get(process.env.API_BASE+'/api/contents?category=top')
    return { top }
  },
  data() {
    return {
      image_src: require("~/assets/sun_and_bluesky.jpg"),
      lazy_src:  require("~/assets/sun_and_bluesky_light.jpg"),
    }
  },
  computed: {
    sortedTop(){
      return this.top.sort((a, b) => {
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
</style>