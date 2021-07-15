<template lang="pug">
  .container 
    .courses
      section-block.course(:contentShadow="true")
        template(v-slot:title) bruh
        div balabalabala
      section-block.course(:contentShadow="true")
        template(v-slot:title) bruh2
        div balabalabala2
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
