<template>
  <div>
    {{ contents }}
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
        contents: ''
    };
  },
  methods: {
    async sendRequest() {
      const response = await this.$axios.$get('/api/contents')
      this.contents = response
    }
  },
  mounted(){
    this.sendRequest()
  }
})
</script>
