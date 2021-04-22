<template lang="pug">
.container
  .banner
    banner
  nuxt-section-block(
    v-for="article in news",
    :id="article.id",
    :document="article",
    :date="true",
    :key="article.id"
  )
  .cutter
  Schedule(id="schedule")
  Courses(id="course")
</template>

<script>
import Vue from "vue";
import Schedule from "@/components/content/Schedule";
import Courses from "@/components/content/Courses";

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
    Schedule,
    Courses,
  }
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-height + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .cutter {
    height: 1px;
  }
}
</style>
