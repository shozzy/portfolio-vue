<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <p>これまでの経験・経歴を時系列でまとめました。</p>
      </v-col>
    </v-row>
    <v-timeline
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="item in sortedHistory"
        color="brown"
        fill-dot
        small
        :right="$vuetify.breakpoint.smAndDown"
      >
        <template v-slot:icon />
        <span
          slot="opposite"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          {{item.when}}
        </span>
        <span
          slot="default"
          v-if="$vuetify.breakpoint.smAndDown"
        >
          {{item.when}}
        </span>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{item.title}}</v-card-title>
          <v-card-text class="pre-wrap">{{item.detail}}</v-card-text>
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
    const history = await app.$axios.$get(process.env.API_BASE+'/api/contents?category=history')
    return { history }
  },
  computed: {
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
.pre-wrap {
  white-space: pre-wrap;
}
</style>