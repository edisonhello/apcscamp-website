<template lang="pug">
  img.maximg(src="/banner.png")
  //- .inner
  //-   img.maximg(src="/dbodkck4.png")
  //- .inner
  //-   .titles
  //-     h1 APCS CAMP
  //-     h2 2021 程式解題競賽集訓營
  //-     h3 「連便當工人都是國手的實力派營隊」
  //-   step-button(:href="nextStep.link" style="font-size:1.2em;") {{ nextStep.text }}
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      nextStep: {
        link: '/signin/',
        text: '立刻報名',
      },
    }
  },
});
</script>

<style lang="scss" scoped>
.columns {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.container {
  background-color: rgba(0, 0, 0, 0);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  min-height: 60vh;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 5vh;
}
.maximg {
  max-width: 100%;
  max-height: 100%;
}
.inner {
  width: 100%;
  @include with-not-mobile {
    width: calc(50% - 8px);
  }
  text-align: center;
  .titles {
    margin-bottom: 5vh !important;
    color: #e3e3e3;
    word-break: break-word;
    * {
      margin-bottom: 15px !important;
    }
    h1 {
      font-size: 4.5em;
    }
    h2 {
      font-size: 2em;
    }
  }
}
</style>
