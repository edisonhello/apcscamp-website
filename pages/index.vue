<template lang="pug">
.outer-container
  .banner
    banner
  //- nuxt-section-block(
  //-   v-for="article in news",
  //-   :id="article.id",
  //-   :document="article",
  //-   :date="true",
  //-   :key="article.id"
  //- )

  Section(:sectionId="\"aboutapcs\"" :sectionName="\"關於 APCS\"")
    template
      AboutApcs

  Section(:sectionId="\"aboutus\"" :sectionName="\"關於我們\"")
    template
      AboutUs

  Section(:sectionId="\"information\"" :sectionName="\"營隊資訊\"")
    template
      Information

  Section(:sectionId="\"schedule\"" :sectionName="\"上課日程\"")
    template
      Schedule

  Section(:sectionId="\"courses\"" :sectionName="\"課程內容\"")
    template
      Courses

  Section(:sectionId="\"teachers\"" :sectionName="\"師資陣容\"")
    template
      Teachers

  Section(:sectionId="\"register\"" :sectionName="\"立即報名\"")
    template
      Register
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head: {
    title: "最新消息",
  },
  data() {
    return {
      news: [],
    };
  },
  async fetch() {
    this.news = await this.$content("news").sortBy("prio", "desc").sortBy("createdAt", "desc").fetch();
  },
});
</script>

<style lang="scss" scoped>
.outer-container {
  padding-top: $nav-header-height + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
