<template lang="pug">
  .container 
    .courses
      section-block.course(:contentShadow="true")
        template(v-slot:title) bruh
        div.section
          div.text-section
            h3 公司網站
            a(href="https://www.facebook.com/shopeecareers.tw") https://www.facebook.com/shopeecareers.tw 
            h3 公司簡介
            p 蝦皮購物 (Shopee) 是台灣與東南亞地區領先的電子商務平台。我們透過強大的支付和物流支持為客戶提供方便、安全和快速的線上購物體驗。 蝦皮購物的目標是不斷增強我們的購物平台，成為本區域用戶電子商務的首選。蝦皮擁有廣泛的產品種類，從消費類電子產品到家居生活，美妝，母嬰，時尚與健身器材皆有涵蓋。 我們致力於透過各項服務整合與多樣的附加功能，為買家與賣家持續帶來最貼近生活的購物體驗，且創造最具互動娛樂功能的電商平台！
          div.icon-section
            img(src="/shopee.png").icon
      section-block.course(:contentShadow="true")
        template(v-slot:title) bruh2
        div balabalabala2
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
  flex-direction: row;
  justify-content: space-between;

  .text-section {
    width: 77%;
    display: inline-block;
  }

  .icon-section {
    width: 20%;
    max-width: 20%;
    min-width: 20%;
    display: inline-block;

    .icon {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

</style>
