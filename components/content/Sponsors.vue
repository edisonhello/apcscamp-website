<template lang="pug">
  .container 
    .courses
    ul
      li 舉辦一場有內容的培訓並非一件輕鬆的事情。為了能夠在短時間內傳授各主題的精華，各講師必須於忙碌之中抽空編纂講義；為了能夠提供學員一個適當的練習的地方，評測系統也必須重新撰寫；而為了能夠提供完整、嚴謹、和教學的內容呼應的練習題，我們必須請人出題、交叉檢驗、難度調配。這些使得成本變得高昂，完成的難度也跟著增高。
      li 除了努力，我們仍然需要許多外界的援助才能將活動辦得更好。如果您認同我們的理念，也希望能夠幫助更多志於程式設計的人，那麼請務必
        a(href="#contacts") 聯絡我們
        | ，與我們一起努力將這場培訓辦得盡善盡美。
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
