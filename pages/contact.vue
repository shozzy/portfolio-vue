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
      <p>
        <v-avatar size="32">
          <a href="https://twitter.com/shozzy" target="_blank" rel="noopener">
            <img src="/Twitter_Social_Icon_Circle_Color.png" class='icon' width='32px' alt="Twitter">
          </a>
        </v-avatar>
        <v-avatar size="32">
          <a href="https://qiita.com/shozzy" target="_blank" rel="noopener">
            <img src="/qiita-favicon.png" class='icon' width='32px' alt="Qiita">
          </a>
        </v-avatar>
        <v-avatar size="32">
          <a href="https://github.com/shozzy" target="_blank" rel="noopener">
            <img src="/GitHub-Mark-64px.png" class='icon' width='32px' alt="GitHub">
          </a>
        </v-avatar>
      </p>
      <p>以下のフォームからもお問いあわせいただけます。</p>
      <p>
      <v-form
        ref="form"
        width="80%"
      >
        <v-text-field
          v-model="name"
          label="お名前"
          required
        />
        <v-text-field
          v-model="email"
          label="メールアドレス"
          required
        />
        <v-text-field
          v-model="company"
          label="会社名（法人の方のみ）"
        />
        <v-textarea
          v-model="message"
          label="お問い合わせ内容"
          required
        />
        <v-text-field
          v-model="botfield"
          label="人間は入力しないでください"
          v-show="false"
        />
        <v-btn color="primary" @click="submit">送信</v-btn>
      </v-form>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      company: "",
      message: "",
      botfield: "",
    }
  },
  mounted() {
    console.log("location.protocol="+window.location.protocol)
    console.log("location.host    ="+window.location.host)
    console.log("location.origin  ="+window.location.origin)
    console.log('axios.baseURL='+this.$axios.defaults.baseURL) 
  },
  methods: {
    async submit() {
      const params = new FormData()
      //以下、ダミーフォームの各フォーム要素のnameと合わせる
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('company', this.company)
      params.append('message', this.message)
      params.append('bot-field', this.botfield)
      console.log('params='+params)
      const response = await this.$axios.$post(window.location.origin, params)
      console.log('response.data='+response.data)
      console.log('response.status='+response.status)
      console.log('response.statusText='+response.statusText)
      console.log('response.headers='+response.headers)
      console.log('response.config='+response.config)
    },
  },
}
</script>

<style scoped>
.card {
  margin: 20px;
}
img.icon {
  vertical-align: bottom;
  width: 32px;
  height: 32px;
}
</style>