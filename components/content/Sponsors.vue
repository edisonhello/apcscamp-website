<template lang="pug">
  .container 
    .courses
      section-block.course(:contentShadow="true")
        template(v-slot:title) Conflux
        div.section
          div.text-section
            h3 公司網站
            a(href="https://www.facebook.com/ConfluxTW") https://www.facebook.com/ConfluxTW
            h3 公司簡介
            p 成立於 2018 年的世界級公鏈 Conflux，由唯一華人圖靈獎得主姚期智先生作為首席科学家，擁有區塊鏈行業內最頂尖的理論和研發團隊，核心團隊源于清華“姚班”及麻省理工、卡內基梅隆大學、清華大學、多倫多大學等知名學府。其中多名成員曾斬獲國際資訊學奧林匹克競賽（IOI）金牌及 ACM-ICPC 程式設計競賽金牌等殊榮。Conflux 使用自主研發的樹圖結構可擴容的共識算法，在不犧牲任何去中心化程度的情況下，實現了 3000~ 6000 TPS 的高吞吐量。在2020年主網上線至今累積遍及全球的廣大用戶、開發者與豐富的生態項目。粉專：https://www.facebook.com/ConfluxTW；官方line社群：https://pse.is/3cd3cp。
          div.icon-section
            img(src="/conflux.png").icon
      section-block.course(:contentShadow="true")
        template(v-slot:title) Line
        div.section
          div.text-section
            h3 公司網站
            a(href="http://linecorp.com/zh-hant/") http://linecorp.com/zh-hant/
            h3 公司簡介
            p 總部位於日本的LINE以「拉近你我的距離」為企業使命，透過多元的行動服務與內容，致力將人們、資訊與社會緊密連結。自2011年6月以通訊軟體的型態推出，現更推展其多元的全球生態系，並將觸角延伸至人工智慧、金融科技等領域，積極實現「智慧入口」的願景，2021年3月，LINE與日本規模最大的網路科技集團之一Z Holdings 正式整併，未來也將持續提供用戶享有最即時、便利的行動生活。欲瞭解更多資訊，請瀏覽官方網站：http://linecorp.com/zh-hant/。
          div.icon-section
            img(src="/line.png").icon
      section-block.course(:contentShadow="true")
        template(v-slot:title) 蝦皮購物
        div.section
          div.text-section
            h3 公司網站
            a(href="https://www.facebook.com/shopeecareers.tw") https://www.facebook.com/shopeecareers.tw 
            h3 公司簡介
            p 蝦皮購物 (Shopee) 是台灣與東南亞地區領先的電子商務平台。我們透過強大的支付和物流支持為客戶提供方便、安全和快速的線上購物體驗。 蝦皮購物的目標是不斷增強我們的購物平台，成為本區域用戶電子商務的首選。蝦皮擁有廣泛的產品種類，從消費類電子產品到家居生活，美妝，母嬰，時尚與健身器材皆有涵蓋。 我們致力於透過各項服務整合與多樣的附加功能，為買家與賣家持續帶來最貼近生活的購物體驗，且創造最具互動娛樂功能的電商平台！
          div.icon-section
            img(src="/shopee.png" style="width: 60%; height: 100%").icon
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
