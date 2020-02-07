<template>
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
      <template
        v-for="item in sortedTop"
      >
        <p>{{item.detail}}</p>
      </template>
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