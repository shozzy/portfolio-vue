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
    <!-- 単なるカードじゃなくて、各サービスのアイコンを配置しよう -->
    <!-- 広い画面では横ならび、狭い画面では縦並びになるように調整 -->
      <v-card>
        <v-card-text>
          <p>Qiita</p>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <p>Twitter</p>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
          <p>GitHub</p>
        </v-card-text>
      </v-card>

      <p>以下のフォームからもお問いあわせいただけます。</p>

    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>
