<template lang="pug">
.background
  nav-header
  #base
    Nuxt
  info-footer
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Default',
})
</script>

<style lang="scss">
* {
  margin: 0;
}
body {
  font-family: "Noto Sans TC", sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>

<style lang="scss" scoped>
.background {
  background-color: $default-background-color;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ), url('/background.png');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
#base {
  min-height: 94vh;
}
</style>
