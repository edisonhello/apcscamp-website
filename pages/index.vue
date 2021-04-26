<template lang="pug">
.outer-container
  .banner
    banner
  //- nuxt-section-block(
  //-   v-for="article in news",
  //-   :id="article.id",
  //-   :document="article",
  //-   :date="true",
  //-   :key="article.id"
  //- )

  Section(:sectionId="\"aboutapcs\"" :sectionName="\"關於 APCS\"")
    template
      AboutApcs

  Section(:sectionId="\"aboutus\"" :sectionName="\"關於我們\"")
    template
      AboutUs

  Section(:sectionId="\"information\"" :sectionName="\"營隊資訊\"")
    template
      Information

  Section(:sectionId="\"schedule\"" :sectionName="\"上課日程\"")
    template
      Schedule

  Section(:sectionId="\"courses\"" :sectionName="\"課程內容\"")
    template
      Courses

  Section(:sectionId="\"teachers\"" :sectionName="\"師資陣容\"")
    template
      Teachers

  Section(:sectionId="\"register\"" :sectionName="\"立即報名\"")
    template
      Register
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  mounted() {
    const histStack = []

    const updateHash = (hash, isIn) => {
      if (isIn) {
        history.pushState(null, null, `#${hash}`);
        histStack.push(hash);
      } else {
        if (hash === histStack[histStack.length - 1]) {
          const newHash = histStack.pop();
          history.pushState(null, null, `#${newHash}`);
        }
      }

      const currentPath = window.location.hash.slice(1)
      if (this.$route.path !== currentPath) {
        // this.$router.push({ hash: currentPath });
      }
    }

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(([entry], observer) => {
      const dom = entry.target.querySelector('a');
      const hash = dom.getAttribute('id');
      
      updateHash(hash, entry.isIntersecting);
    }, {
      rootMargin: "-200px 0px -800px 0px"
    });

    for (const section of sections) {
      observer.observe(section);
    }

    setInterval(() => {
      console.log(window.pageYOffset);
      if (window.pageYOffset <= 150) updateHash('', true);
    }, 1000);

  },
});
</script>

<style lang="scss" scoped>
.outer-container {
  padding-top: $nav-header-height + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .banner {
    margin-top: 4vw;
    margin-bottom: 2vw;
  }
}
</style>
