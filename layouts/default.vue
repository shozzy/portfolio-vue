<template>
  <v-app>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon>
        <nuxt-link to="/">
          <img src='/shimaenaga_icon_small.png' class='icon' width='30px' alt='shimaenaga_icon'>
        </nuxt-link>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- SKILLS,HISTORYまで含めると、幅900px以上くらいじゃないとはみ出す＝widthがsmより小さい(<960px)ときはメニュー表示形式を変える -->
      <v-toolbar-items v-for="item in pages">
        <v-btn text nuxt :to="item.link">{{item.label}}</v-btn>
      </v-toolbar-items>

    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
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
//        { label: "History" , link: "/history" },
        { label: "Contact" , link: "/contact" },
      ],
    }
  }
}
</script>
