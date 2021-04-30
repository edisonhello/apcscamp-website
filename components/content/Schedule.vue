<template lang="pug">
  .container
    div.img
      img(src="/schedule1.png")
    div.img
      img(src="/schedule2.png")
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
