<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <p>{{profile[0].title}}</p>
        <p>{{profile[0].detail}}</p>
      </v-col>
    </v-row>
    <v-timeline>
      <v-timeline-item
        v-for="item in history"
        :key="item.id"
      >
        <template v-slot:icon />
        <span slot="opposite">{{item.when}}</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{item.title}}</v-card-title>
          <v-card-text>
            {{item.detail}}
          </v-card-text>
          <template v-for="tag in item.tags">
            <v-chip small outlined>{{tag.name}}</v-chip>
          </template>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    console.log("env:"+process.env.API_BASE)
    const profile = await app.$axios.$get(process.env.API_BASE+'/api/contents?category=profile')
    const history = await app.$axios.$get(process.env.API_BASE+'/api/contents?category=history')
    return { profile, history }
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