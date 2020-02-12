<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-card>
          <v-card-text>
            <template
              v-for="item in sortedProfile"
            >
              <p>{{item.detail}}</p>
            </template>
          </v-card-text>
        </v-card>  
      </v-col>
    </v-row>
    <v-timeline>
      <v-timeline-item
        v-for="item in sortedHistory"
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
  computed: {
    sortedProfile(){
      return this.profile.sort((a, b) => {
        return a.sequence - b.sequence
      });
    },
    sortedHistory(){
      return this.history.sort((a, b) => {
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