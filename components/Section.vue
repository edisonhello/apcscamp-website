<template lang="pug">
  div
    a.pageAnchor(:id="sectionId")
    slot
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  props: {
    sectionId: { }
  }
});
</script>

<style lang="scss">
a.pageAnchor {
  display: block;
  position: relative;
  top: -$nav-header-space;
  visibility: hidden;
  @include with-mobile {
    padding-top: -$mobile-nav-header-space;
  }
}
</style>