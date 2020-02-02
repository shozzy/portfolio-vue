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
      <p>{{top[0].detail}}</p>
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
}
</script>

<style>
p span{
  display: inline-block;
  white-space: nowrap;
}
</style>