<template lang="pug">
.outer-container
  .banner
    banner
  nuxt-section-block(
    v-for="article in news",
    :id="article.id",
    :document="article",
    :date="true",
    :key="article.id"
  )

  Section(:sectionId="\"schedule\"" :sectionName="\"活動日程\"")
    template
      Schedule

  Section(:sectionId="\"teachers\"" :sectionName="\"師資陣容\"")
    template
      Teachers

  Section(:sectionId="\"courses\"" :sectionName="\"課程安排\"")
    template
      Courses
</template>

<script>
import Vue from "vue";
import Section from '@/components/Section';
import Courses from "@/components/content/Courses";
import Schedule from "@/components/content/Schedule";
import Teachers from "@/components/content/Teachers";

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
  components: {
    Section, 
    Schedule,
    Courses,
  }
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
