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
      <p>各種リソースへのリンク</p>
      <p>
        <v-btn href="https://twitter.com/shozzy" target="_blank" rel="noopener" color="white">
          <v-avatar size="32">
              <img src="/Twitter_Logo_Blue.png" class='icon' width='32px' alt="Twitter">
          </v-avatar>
          @shozzy
        </v-btn>
        <v-btn href="https://qiita.com/shozzy" target="_blank" rel="noopener" color="white">
          <img src="/Qiita_logo.png" class="icon" alt="Qiita">
        </v-btn>
        <v-btn href="https://github.com/shozzy" target="_blank" rel="noopener" color="white">
          <img src="/GitHub_Logo.png" class="icon" alt="GitHub">
        </v-btn>
      </p>
      <p>ご連絡はTwitterのDMか、下記お問いあわせフォームからお願いいたします。</p>
      <v-card>
        <v-card-title>お問いあわせフォーム</v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            width="80%"
          >
            <v-text-field
              v-model="name"
              label="お名前（必須）"
              required
              :rules="[varidations.required]"
            />
            <v-text-field
              v-model="email"
              label="メールアドレス（必須）"
              required
              :rules="[emailRules.required, emailRules.regex]"
            />
            <v-text-field
              v-model="company"
              label="会社名（法人の方のみ）"
            />
            <v-textarea
              v-model="message"
              label="お問い合わせ内容（必須）"
              required
              :rules="[varidations.required]"
              rows="8"
            />
            <v-text-field
              v-model="botfield"
              label="人間は入力しないでください"
              v-show="false"
            />
            <v-btn color="primary" @click="submit" :disabled="sendDisabled">{{sendLabel}}</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
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
      sendLabel: "送信",
      sendDisabled: false,
      emailRules: {
        required: v => !!v || 'メールアドレスを入力してください',
        regex: v => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください',
      },
      varidations: {
        required: v => !!v || '入力必須です',
      },
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
      this.sendLabel = "送信中です..."
      this.sendDisabled = true
      if(this.$refs.form.validate()){
        const params = new FormData()
        //以下、ダミーフォームの各フォーム要素のnameと合わせる
        params.append('form-name', 'contact')
        params.append('name', this.name)
        params.append('email', this.email)
        params.append('company', this.company)
        params.append('message', this.message)
        params.append('bot-field', this.botfield)
        const response = await this.$axios.post(window.location.origin, params)
          .catch(err => {
            console.log('error.response='+err.response)
            this.sendLabel = "送信"
            this.sendDisabled = false
          })
        //console.log('response='+response)
        //console.log('response.data='+response.data)
        console.log('response.status='+response.status)
        console.log('response.statusText='+response.statusText)
        //console.log('response.headers='+response.headers)
        //console.log('response.config='+response.config)
        if (response.status == "200"){
          this.sendLabel = "送信が完了しました"
        }
      }else{
        this.sendLabel = "送信"
        this.sendDisabled = false
      }
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
  height: 32px;
}
.v-btn {
  text-transform: none;
}
</style>