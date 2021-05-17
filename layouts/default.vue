<template lang="pug">
.background
  #base
    Nuxt
  info-footer
</template>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-197163404-1">
</script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
 
  gtag('config', 'UA-197163404-1');
</script>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Default',
})
</script>

<style lang="scss" scoped>
.background {
  background-color: #373092;
}
</style>

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
