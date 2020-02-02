<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- SKILLS,HISTORYまで含めると、幅900px以上くらいじゃないとはみ出す＝widthがsmより小さい(<960px)ときはメニュー表示形式を変える -->
      <v-toolbar-items v-for="item in pages" :key="item.id">
        <v-btn text nuxt :to="item.link">{{item.label}}</v-btn>
      </v-toolbar-items>

    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019-2020 shozzy</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: "shozzy's portfolio",
      pages: [
        { label: "Top"     , link: "/"        },
        { label: "Profile" , link: "/profile" },
        { label: "Products", link: "/products"},
//        { label: "Skills"  , link: "/skills"  },
        { label: "Contact" , link: "/contact" },
      ],
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap&subset=japanese');
div{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
