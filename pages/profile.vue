<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <p>{{profile[0].title}}</p>
        <p>{{profile[0].detail}}</p>
      </v-col>
    </v-row>
    <v-timeline>
      <v-timeline-item
        v-for="item in history"
        :key="item.id"
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
  data () {
    return {
      history: [
        { when: "2019年", title: "個人開発への挑戦", message: "最新の技術に追いつくため、個人開発を始める。家族もおり本業もあるので使える時間は限られている中、少しずつ時間を捻出して勉強と作品づくり、記事執筆に取り組んでいる。", languages: ["ES6", "Vue.js", "Nuxt.js", "Ruby", "Ruby on Rails"] },
        { when: "2017年", title: "マラソンへの挑戦", message: "体力づくりのため、ランニングを始める。目標があったほうが良いと考え、フルマラソンの大会に申し込む。結果、5時間45分ほどで完走することができた。", languages: ["筋肉は裏切らない"] },
        { when: "現職（ユーザ企業）：異分野への転職", message: "エンドユーザに最も近い場所でシステム開発の最上流から運用まで幅広く経験。そんな中、システムの一部内製化にも取り組む。社内での作業効率改善ツールがメイン。売上データやログデータの収集・集計プログラムなど。最もクリティカルなものでは、小規模取引先様との簡易EDIシステムを構築した。", languages: ["Ruby", "JavaScript"] },
        { when: "1社目（SIer）：社内フレームワークの改善", message: "社内のJavaScriptフレームワークを改善。当時広まりつつあったJSONを活用し、入力データのバリデーションについて実装と設定を分離した。改善前は画面ごとにバリデーションを手作業で構築するという工数ばかりかかる状況だったが、それを設定ベースで実現できるようにして作業工数を大幅に削減し品質も向上できた。", languages: ["JavaScript", "HTML", "CSS"] },
        { when: "1社目（SIer）：モジュール開発", message: "自社パッケージと組み合わせて使う「ワークフローモジュール」の設計・開発を任される。ワークフローに必要な機能を調べるところから開始し、数ヶ月で初版リリース。当初は順調稼働していたが、履歴データが蓄積するとパフォーマンスが低下するという知見を得た。（履歴を別テーブルへ追い出す運用で解決）", languages: ["Java", "HTML", "CSS", "JavaScript"] },
        { when: "1社目（SIer）：アドオンパッケージ開発", message: "某ツール用のアドオンパッケージの開発を任される。パッケージソフトとして実際に外販。開発だけでなく、販売プロセスの構築やマーケティングにも関わる。ただし、広告予算も限られており販売数量はふるわず。", languages: ["Java"] },
        { when: "1社目（SIer）：専門性の獲得", message: "とあるシステム開発用のパッケージソフトと出会う。開発元ベンチャー企業のエンジニアと協力して仕事を進めるうち、そのソフトの第一人者として認めていただけるようになる。その後ご縁があり、そのソフトの入門書を共著することができた。", languages: ["某ツール, Java"] },
        { when: "1社目（SIer）：入社したての頃", message: "学生時代を通じてデザインよりプログラミングが得意であると悟ったため、中堅SIerに就職。SIerながら、自社で要件定義・設計・開発・テスト・運用まで全ての工程を実施するのが基本だったため、業務でのプログラミングをみっちりと経験することができた。システム的にはWebベースの仕組みだったので、Java＋Oracleでのサーバサイド開発、HTML＋CSS＋JavaScriptでのクライアントサイド開発を共に経験できた。", languages: ["Java", "HTML", "CSS", "JavaScript"] },
        { when: "大学3〜4年生", message: "得意なプログラミングを生かし、卒業研究プロジェクトにてJavaを用いて「ニューラルネットによるデザインレコメンドシステム」を構築。ただし、ディープラーニングが登場するはるか前のことであり、プログラムは完成したが思うような成果は出なかった。", languages: ["Java", "HTML", "CSS", "JavaScript"] },
        { when: "大学3年生", title: "第2種情報処理技術者 合格", message: "問題集を見てみたら少しの勉強で解けそうだったので挑戦してみることに。参考書と問題集を1冊ずつこなして無事一発合格。まだオープンして数年の東京ビッグサイトで受験した思い出。" },
        { when: "大学1〜2年生", message: "工学部（工業デザイン専攻）へ進学。時代はインターネットが広まりつつある頃。HTMLやJavaScriptを使うようになる。用途は「ホームページ」の作成。同時にJavaも学び、Appletをホームページに掲載する。", languages: ["HTML", "JavaScript", "Java"] },
        { when: "高校生", message: "EPSON PC486シリーズ（98互換機）を購入。「LSI-C86試食版」でC言語に触れる。", languages: ["C"] },
        { when: "中学生", message: "PC-8801を購入。友人からマイコンベーシックマガジンを紹介され、掲載プログラムを打ち込んで楽しむようになる。", languages: ["N88-BASIC"] },
        { when: "小学5年生", title: "プログラミングとの出会い", message: "古いMSXを譲り受ける機会があり、そこでプログラミングに出会う。", languages: ["MSX-BASIC"] },
      ],
    }
  }
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