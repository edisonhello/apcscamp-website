<template lang="pug">
.conatiner
  nuxt-link(:to="href")
    .box
      slot
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  font-size: 5em;
}
.box {
  display: inline-block;
  padding: 10px 30px;
  // background: #4E49A1;
  // color: #4E49A1;
  background: rgba(200, 200, 200, 0.3);
  color: #fff;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
}
</style>
