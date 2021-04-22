<template lang="pug">
.container
  nuxt-section-block(
    v-for="article in articles",
    :id="article.id",
    :document="article",
    :key="article.id"
  )
  .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "活動緣起",
  },
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$content("about").sortBy("slug", "asc").fetch();
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space;
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
