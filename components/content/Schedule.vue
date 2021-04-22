<template lang="pug">
  section-block(id="schedule")
    template(v-slot:title) 活動日程
    template
      .container
        .dates
          table
              tr
                th
                th 1/27 (三)
                th 1/28 (四)
                th 1/29 (五)
                th 1/30 (六)
                th 1/31 (日)
              tr
                td 08:30~09:00
                td(rowspan="2") 報到
                td(colspan="4") 集合 / 早餐
              tr
                td 09:00~10:00
                td(rowspan="2") 數學
                td(rowspan="2") 字串
                td(rowspan="2") 網路流
                td(rowspan="1") 彈性時間
              tr
                td 10:00~12:20
                td(rowspan="1") 喵喵時間
                td(rowspan="5") 正式賽
              tr
                td 12:30~13:30
                td(colspan="4") 午餐 / 交流
              tr
                td 13:30~14:00
                td(rowspan="2" colspan="4") 彈性時間
              tr
                td 14:00~14:30
              tr
                td 14:30~15:00
                td(rowspan="3") 圖論
                td(rowspan="3") 資料結構
                td(rowspan="3") 動態規劃
                td(rowspan="3") 組合賽局
              tr
                td 15:00~16:00
                td 頒獎時間
              tr
                td 16:00~17:50
                td(rowspan="3")  
              tr
                td 17:50~19:00
                td(colspan="4") 晚餐 / 交流
              tr
                td 19:00~22:00
                td 趣味賽
                td 練習賽(個人)
                td 練習賽(團體)
                td 練習賽(個人)
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
  .dates {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 20px;
    font-size: 1.3em;
    overflow: auto;
    text-align: center;
    table {
      background: #fff;
      border-collapse: collapse;
      border-spacing: 0;
      border: 0;
      display: inline-block;
      margin: 0 auto;
      tr {
        border: 0;
      }
      td, th {
        border-style: solid;
        border-width: 1px;
        border-color: black;
        padding: 5px 10px;
      }
    }
  }
}
</style>
