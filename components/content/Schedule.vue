<template lang="pug">
  .container
    h2 語法班
    .dates
      table
          tr
            th
            th 8/02 (一)
            th 8/03 (二)
            th 8/04 (三)
            th 8/05 (四)
            th 8/06 (五)
            th 8/09 (一)
            th 8/10 (二)
            th 8/11 (三)
            th 8/12 (四)
            th 8/13 (五)
          tr
            td 08:30~09:00
            td(rowspan="1") 報到 / 集合
            td(colspan="9") 集合
          tr
            td 09:00~10:40
            td(rowspan="1") 課程和系統介紹 ／ 環境設定
            td(rowspan="1") 條件式(邏輯運算) ／ 迴圈與流程控制
            td(rowspan="1") 進階迴圈 ／ 流程控制
            td(rowspan="1") 巢狀迴圈
            td(rowspan="1") 一維陣列
            td(rowspan="1") 多維陣列
            td(rowspan="1") 內建函數與函數呼叫
            td(rowspan="1") 遞迴
            td(rowspan="1") 結構 ／ 總複習
            td(rowspan="3") 程式設計模擬考(2.5h) ／ 講解
          tr
            td 10:40~10:50
            td(colspan="9") 下課
          tr
            td 10:50~12:30
            td(rowspan="1") 變數與資料型態 ／ 輸入輸出 ／ 運算式
            td(rowspan="1") 條件式(邏輯運算) ／ 迴圈與流程控制
            td(rowspan="1") 進階迴圈 ／ 流程控制
            td(rowspan="1") 巢狀迴圈
            td(rowspan="1") 字元和字串／字串常用函數
            td(rowspan="1") 指標／多維陣列
            td(rowspan="1") 自訂函數／變數 scope
            td(rowspan="1") 遞迴
            td(rowspan="1") debug 流程與技巧
          tr
            td 13:30~15:00
            td(rowspan="1" colspan="9") 助教時間
            td(rowspan="1")
    h2 算法班
    .dates
      table
          tr
            th
            th 8/02 (一)
            th 8/03 (二)
            th 8/04 (三)
            th 8/05 (四)
            th 8/06 (五)
            th 8/09 (一)
            th 8/10 (二)
            th 8/11 (三)
            th 8/12 (四)
            th 8/13 (五)
          tr
            td 10:30~12:00
            td(colspan="1")
            td(colspan="9") 助教時間
          tr
            td 13:00~13:30
            td(rowspan="1") 報到 / 集合
            td(colspan="9") 集合 
          tr
            td 13:30~15:10
            td(colspan="1") 時間複雜度
            td(colspan="1") 資料結構（二）
            td(colspan="1") 枚舉（二）
            td(colspan="1") 枚舉（四）
            td(colspan="1") 貪心（二）
            td(colspan="1") 圖論（一）
            td(colspan="1") 圖論（三）
            td(colspan="1") 分治（一）
            td(colspan="1") 動態規劃（一）
            td(colspan="1") 動態規劃（三）
          tr
            td 15:20~15:30
            td(colspan="10") 下課
          tr
            td 15:30~17:00
            td(colspan="1") 資料結構（一）
            td(colspan="1") 枚舉（一）
            td(colspan="1") 枚舉（三）
            td(colspan="1") 貪心（一）
            td(colspan="1") 貪心（三）
            td(colspan="1") 圖論（二）
            td(colspan="1") 圖論（四）
            td(colspan="1") 分治（二）
            td(colspan="1") 動態規劃（二）
            td(colspan="1") 動態規劃（四）
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
