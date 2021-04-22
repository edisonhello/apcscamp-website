<template lang="pug">
  div
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  fetch() {
    this.$auth.logout();
    this.$router.back();
  }
})
</script>
