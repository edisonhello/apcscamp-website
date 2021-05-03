<template lang="pug">
  .container
    nuxt-content(
      v-if="section"
      :id="section.id",
      :document="section",
      :key="section.id"
    )
    .cutter
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      section: undefined,
    };
  },
  async fetch() {
    this.section = await this.$content("aboutAPCS").fetch();
    console.log(this.section);
  },
})
</script>

<style lang="scss" scoped>
p {
  line-height: 1.8;
}
</style>
