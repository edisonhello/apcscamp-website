<template lang="pug">
.container
    h1 {{ errorMessage }}
    img(src='/Asset 14.png')
    br
    step-button(href="/") 回首頁
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head() {
    return {
      title: this.errorMessage,
    }
  },
  props: ['error'],
  computed: {
    errorMessage() {
      switch (this.error.statusCode) {
        case 404:
          return "找不到你要的頁面耶";
        case 403:
          return "你想做什麼事?";
      }
      return "糟糕，難道有蟲嗎!?";
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: 15vh;
  padding-bottom: 20px;
  text-align: center;
  height: calc(80vh - 20px);
  img {
    max-width: 200px;
    margin: 10px;
  }
}
</style>

<style lang="scss">
* {
  margin: 0;
}
body {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
