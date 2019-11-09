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
    >
    <!-- 単なるカードじゃなくて、各サービスのアイコンを配置しよう -->
    <!-- 広い画面では横ならび、狭い画面では縦並びになるように調整 -->
      <v-row justify="space-around">
        <v-avatar size="64">
          <a href="https://twitter.com/shozzy" target="_blank" rel="noopener">
            <img src="/Twitter_Social_Icon_Circle_Color.png" class='icon' width='64px' alt="Twitter">
          </a>
        </v-avatar>
        <v-avatar size="64">
          <a href="https://github.com/shozzy" target="_blank" rel="noopener">
            <img src="/GitHub-Mark-64px.png" class='icon' width='64px' alt="GitHub">
          </a>
        </v-avatar>
        <v-avatar size="64">
          <a href="https://qiita.com/shozzy" target="_blank" rel="noopener">
            <img src="/qiita-favicon.png" class='icon' width='64px' alt="Qiita">
          </a>
        </v-avatar>
      </v-row>
      <v-row justify="space-around" class="card">
      <p>以下のフォームからもお問いあわせいただけます。</p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style scoped>
.card {
  margin: 20px;
}
img.icon {
  vertical-align: bottom;
  width: 64px;
  height: 64px;
}
</style>