<template>
  <v-row
    column
    justify-center
    align-center
  >
    <v-col
      xs12
      sm8
      md6
    >
      <v-card elevation="0">
        <v-card-text>
          <p>ようこそいらっしゃいませ。</p>
          <p>ここはソフトウェアエンジニアである私"shozzy"のポートフォリオサイトです。</p>
          <p>どうぞごゆっくりとご覧ください。</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
