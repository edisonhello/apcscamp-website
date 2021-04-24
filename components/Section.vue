<template lang="pug">
  div.section
    a.pageAnchor(:id="sectionId")
    section-block
      template(v-slot:title) {{ sectionName }}
      template
        slot
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  props: {
    sectionId: { 
      default: '',
    },
    sectionName: { 
      default: '',
    },
  },
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