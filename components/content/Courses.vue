<template lang="pug">
  .container 
    .courses
      section-block.course(:contentShadow="true")
        template(v-slot:title) 語法班
        div
          ul
            li 課程介紹和線上系統介紹
            li 環境設定（Code::Blocks）
            li 變數與資料型態
            li 輸入輸出（cin, cout）
            li 運算式、條件式
            li 迴圈與流程控制（if, while, for, continue, break）、巢狀迴圈
            li 一維與多維陣列、字元與字串（c style）、字串常用函數
            li 內建函數與函數呼叫、自訂函數
            li 遞迴（recursion）
            li 結構（struct）
      section-block.course(:contentShadow="true")
        template(v-slot:title) 算法班
        div
          ul
            li 實作技巧（包括 bitwise operation...）
            li 時間複雜度（time complexity）
            li 二分搜尋法（binary search）
            li 圖論（graph theory）
            li 枚舉（enumeration）
            li 貪心（greedy）
            li 分治（divide and conquer）
            li 動態規劃（dynamic programming）
      //-
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
