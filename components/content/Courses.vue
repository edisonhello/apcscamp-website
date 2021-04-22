<template lang="pug">
  .container 
    .courses
      section-block.course(:contentShadow="true")
        template(v-slot:title) 課前自我鍛鍊
        template
          h4 先到各大 Online Judge 申請帳號寫題目吧！
          ul
            li
              a(href="https://codeforces.com") Codeforces
            li
              a(href="https://atcoder.jp/") AtCoder
            li
              a(href="https://www.codechef.com/") CodeChef
            li
              a(href="https://www.topcoder.com/") TopCoder
            li
              a(href="https://tioj.infor.org/") TIOJ Infor Online Judge
          h4 舒適的打比賽環境
          ul
            li 建置你的開發環境
            li 測試比賽環境指南
            li 點心 x 飲料 x 氣球
          h4 預備的預備知識
          ul
            li 網路資源
            li 你的好友
      section-block.course(v-for="course in courses", :key="course.slug" :contentShadow="true")
        template(v-slot:title) {{ course.name }}
        template
          h4 預備知識
          ul
            li(v-for="knowledge in course.preknowledge") {{ knowledge }}
          h4 課程大綱
          ul
            li(v-for="content in course.abstract") {{ content }}
    .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    // title: "課程主題",
  },
  data() {
    return {
      courses: [],
    };
  },
  async fetch() {
    this.courses = await this.$content("courses").sortBy("slug", "asc").fetch();
  },
});
</script>

<style lang="scss" scoped>
.container {
  h1.title {
    color: #ffe300;
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;

    font-weight: 300;
  }
  .courses {
    margin-top: 20px;
    padding-left: 1vw;
    padding-right: 1vw;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    .course {
      width: 100%;
      @include with-mobile {
        margin-bottom: 10px !important;
      }
      @include with-not-mobile {
        width: calc(50% - 8px);
        &:nth-child(even) {
          margin-left: 8px;
        }
        &:nth-child(odd) {
          margin-right: 8px;
        }
      }
    }
  }
  .cutter {
    height: 1px;
  }
}
</style>
