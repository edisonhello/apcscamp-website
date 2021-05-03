<template lang="pug">
div
  .cover#cover
    img(src="/cover.png")
  nav-header.header.fixed-header#navbar(
    :bgOpacity="navbarBgOpacity"
  )
  .outer-container
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

    Section(:sectionId="\"contacts\"" :sectionName="\"聯絡我們\"")
      template
        Contacts

    Section(:sectionId="\"register\"" :sectionName="\"立即報名\"")
      template
        Register
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      cover: {
        default: null,
      },
      navbar: {
        default: null,
      },
      navbarBgOpacity: {
        default: 1,
      },
    }
  },
  mounted() {
    this.cover = document.getElementById('cover');
    this.navbar = document.getElementById('navbar');

    this.registerDynamicOpacityNavbar();
    this.registerDynamicAddNavbarShadow();
  },
  methods: {
    registerMovableNavbar() {
      const { cover, navbar } = this;
      const coverHeight = cover.clientHeight;

      window.addEventListener('scroll', () => {
        const yOffset = window.pageYOffset;
        if (yOffset > coverHeight) {
          navbar.classList.add('fixed-header');
          navbar.classList.remove('inline-header');

          narbar.classList.add('header-shadow')
        } else {
          navbar.classList.add('inline-header');
          navbar.classList.remove('fixed-header');
        }
      });
    },
    registerDynamicOpacityNavbar() {
      const { cover, navbar } = this;
      const buffer = 100;

      // navbar.style.opacity = 0;

      window.addEventListener('scroll', () => {
        const coverHeight = cover.clientHeight;

        const yOffset = window.pageYOffset;
        const delta = yOffset - coverHeight;
        const baseOpa = (delta / buffer * 0.5) + 0.5;
        const opa = Math.max(Math.min(baseOpa, 1), 0);

        this.navbarBgOpacity = opa;
      });
    },
    registerDynamicAddNavbarShadow() {
      const { cover, navbar } = this;
      const coverHeight = cover.clientHeight;

      window.addEventListener('scroll', () => {
        const yOffset = window.pageYOffset;

        if (yOffset > coverHeight) {
          navbar.classList.add('header-shadow')
        } else {
          navbar.classList.remove('header-shadow');
        }
      });
    }
  },
});
</script>

<style lang="scss" scoped>
.outer-container {
  // padding-top: $nav-header-height + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

.header {
  float: right;
}

.fixed-header {
  position: fixed;
  z-index: 9999;
}

.inline-header {

}

.cover {
  // vertical-align: middle;
  // min-height: 100vh;
  // min-width: 100vw;
  // margin-top: 4vw;
  // margin-bottom: 2vw;
  width: 100vw;
  max-width: 100%;
  max-height: 100vh;
  // max-height: 100vw - #{$nav-header-height};

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

</style>
