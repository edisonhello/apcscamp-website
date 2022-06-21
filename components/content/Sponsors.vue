<template lang="pug">
  .container 
    .courses
      section-block.course(:contentShadow="true")
        template(v-slot:title) 微軟
        div.section
          div.text-section
            h3 公司網站
            a(href="http://aka.ms/joinmstw") http://aka.ms/joinmstw
            h3 關於微軟
            p 微軟（納斯達克上市代碼︰MSFT）致力於發展 Intelligent Cloud 與 Intelligent Edge 時代的數位轉型，其使命是賦能地球上的每一個人和每一個組織，都能實現更多、成就非凡。 
          div.icon-section
            img(src="/Microsoft.png").icon
      section-block.course(:contentShadow="true")
        template(v-slot:title) 統一證券
        div.section
          div.text-section
            h3 公司網站
            a(href="https://www.pscnet.com.tw/pscnetStock/index.do") https://www.pscnet.com.tw/pscnetStock/index.do
            h3 關於統一證券
            p 統一證券事業群涵括投顧、投信、期貨等轉投資公司，2021 年 EPS 為 2.75，經營績效卓著。2022 年榮獲《財訊》財富管理大獎獲得「最佳客戶推薦」、「最佳公益推動」及「最佳影音行銷」獎項，未來朝向成為國內標竿的證券品牌邁進。
          div.icon-section
            img(src="/統一證券1.png").icon
      section-block.course(:contentShadow="true")
        template(v-slot:title) YTP
        div.section
          div.text-section
            h3 計畫網站
            a(href="https://www.tw-ytp.org/") https://www.tw-ytp.org/
            h3 關於 Young Turing Program 少年圖靈計畫
            p 以電腦科學之父—艾倫．圖靈（Alan Turing）為名，Young Turing Program 少年圖靈計畫的成立，著眼於發掘年輕的軟體人才，透過程式競賽、專題實做、大學教授指導、企業志工導師輔導、海外參訪學習，啟發台灣學生對程式設計的興趣及熱誠，引導學生運用軟體力解決社會問題，或改善現況，進一步突破跟隨歐美制定標準的框架，勇於創新、創業，為台灣培育優秀軟體人才，提升台灣軟體產業的高度，建立台灣的軟體國力。
          div.icon-section
            img(src="/YTP.png").icon
    .cutter
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      section: undefined,
    };
  },
  async fetch() {
    this.section = await this.$content("aboutAPCS").fetch();
    console.log(this.section);
  },
})
</script>

<style lang="scss" scoped>
p {
  line-height: 1.8;
}

.section {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  .text-section {
    width: 77%;
    display: inline-block;
  }

  .icon-section {
    max-width: 20%;
    display: inline-block;
    text-align: center;

    .icon {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

</style>
