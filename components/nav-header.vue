<template lang="pug">
header.nav
  .header-bar
    .left-side
      nuxt-link.icon(to="/")
        img(src="/icon.png")
      svg#speak(height="50", width="165", v-if="current_page_name !== ''")
        ellipse(cx=83, cy=25, rx=75, ry=20, style="fill:#fff;")
        polygon(points="0,5 50,15 16,25", style="fill:#fff;")
        text(
          x=45,
          y=32,
          fill="#db6d42",
          style="font: 900 1.2em 'Noto Serif TC', serif;",
          engthAdjust="spacingAndGlyphs"
        ) {{ current_page_name }}
    .right-side
      #nav-button(data-display="flex", data-time="100", @click="toggleNav")
        font-awesome-icon(icon='bars')
      #nav-list.ilist
        template(v-for="ele in pages")
          nuxt-link.skewed.item(
            v-if="typeof ele.children === 'undefined'",
            :to="ele.link",
            :href="ele.link",
            :key="ele.link",
            :class="{ active: isCurrentPage(ele) }",
            :prefetch="typeof ele.prefetch === 'undefined' ? true : ele.prefetch"
          )
            span {{ ele.name }}
          .skewed.items(
            v-else,
            :class="{ active: isCurrentPage(ele) }",
            :key="ele.link",
            @click="toggleDropdown"
          )
            span
              | {{ ele.name }}
              font-awesome-icon(icon='caret-down', class='dropdown-icon')
            .ilist(v-if="ele.children.length > 0", @click.stop)
              nuxt-link.item(
                v-for="obj in ele.children",
                :to="obj.link",
                :key="obj.link",
                :prefetch="typeof obj.prefetch === 'undefined' ? true : obj.prefetch"
              ) {{ obj.name }}
      #touch-black(@click="toggleNav")
</template>

<style lang="scss" scoped>
$skew: -10deg;
*:not(i.fas):not(i.far):not(.fa) {
  margin: 0;
  font-family: "Noto Sans TC", sans-serif;
}
.skewed {
  transform: skewX($skew);
  & > * {
    transform: skewX(-$skew);
  }
}
@keyframes rotate10 {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(-8deg);
  }
  15% {
    transform: rotate(8deg);
  }
  20% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
header.nav {
  padding-top: 20px;
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100vw;
  background-color: $default-background-color;
  @include with-mobile {
    padding-top: 0px;
  }
  .header-bar {
    float: right;
    width: calc(94vw - #{$nav-header-height});
    height: $nav-header-height;
    background-color: #dbb682;
    padding: ($nav-header-height * 0.1) ($nav-header-height * 0.5);
    border-radius: 5px 0px 0px 5px;
    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    @include with-mobile {
      width: calc(100vw - #{$nav-header-height});
      border-radius: 0px;
      padding: ($nav-header-height * 0.1) ($nav-header-height * 0.5);
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      background-color: #e5a54d;
    }
    #speak {
      position: relative;
      top: ($nav-header-height * -0.8);
      transform: scale($nav-header-height / 50px);
      @include with-mobile {
        top: 2px;
        padding-left: 10px;
      }
    }
    .icon > img {
      position: relative;
      top: ($nav-header-height * -0.4);
      height: ($nav-header-height * 1.8);
      border-radius: 10px;
      @include with-not-mobile {
        // animation-name: rotate10;
        // animation-duration: 5s;
        // animation-timing-function: linear;
        // animation-delay: 3s;
        // animation-iteration-count: infinite;
      }
      // box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      //   0 4px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      @include with-mobile {
        position: static;
        height: $nav-header-height;
        top: 0;
        border-radius: 0px;
        box-shadow: none;
      }
    }
    & > div {
      height: 100%;
    }
    .left-side {
      float: left;
    }
    .right-side {
      float: right;
    }
    #nav-button {
      display: none;
      @include with-mobile {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 1.3em;
        color: #fff;
        cursor: pointer;
      }
    }
    .ilist {
      height: 100%;
      display: flex;
      align-items: center;
      @include with-mobile {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        padding-top: 15px;
        flex-direction: column;
        background-color: #ffbf5f;
      }
      .item {
        text-decoration: none;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin: 0 $nav-header-height * 0.15 !important;
        padding: $nav-header-height * 0.15 $nav-header-height * 0.25;
        color: #fffde7;
        transition: 0.2s;
        &.skewed:hover {
          animation: quake-skewed 0.4s;
          @keyframes quake-skewed {
            0% {
              transform: scale(1) skewX($skew);
            }
            50% {
              transform: scale(1.06) skewX($skew);
            }
            100% {
              transform: scale(1) skewX($skew);
            }
          }
          @include with-mobile {
            animation: none;
          }
        }
        &:hover {
          background-color: #c5a475;
          color: #fff368;
          animation: quake 0.4s;
          @keyframes quake {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.06);
            }
            100% {
              transform: scale(1);
            }
          }
          @include with-mobile {
            animation: none;
          }
        }
        &.active {
          background-color: #e5a54d;
          color: #f6ea25;
          @include with-mobile {
            color: #ffeb00;
          }
        }
        @include with-mobile {
          color: #fff;
          margin-bottom: 8px !important;
          transform: none;
          & > * {
            transform: none;
          }
        }
      }
      .items {
        flex-direction: column;
        cursor: pointer;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin: 0 $nav-header-height * 0.25 !important;
        padding: $nav-header-height * 0.15 $nav-header-height * 0.45;
        color: #fffde7;
        transition-duration: 0.2s;
        transition-property: color;
        &.active {
          background-color: #e5a54d;
          color: #f6ea25;
          @include with-mobile {
            color: #ffeb00;
          }
        }
        .ilist {
          position: static;
          display: none;
          padding-top: 0;
          .item {
            padding: $nav-header-height * 0.15 $nav-header-height * 0.45;
            margin: 0 !important;
            &:last-of-type {
              padding-bottom: $nav-header-height * 0.15;
            }
            &.nuxt-link-active,
            &.active {
              background-color: #ffe6c4;
              color: #ffbd00;
              @include with-mobile {
                background-color: transparent;
              }
            }
          }
          @include with-not-mobile {
            display: none !important;
          }
        }
        .dropdown-icon {
          display: none;
        }
        @include with-not-mobile {
          &:hover,
          &.active:hover,
          &.nuxt-link-active:hover {
            transform: rotate(0);
            & > * {
              transform: rotate(0);
            }
            align-self: flex-start;
            background-color: #c5a475;
            color: #ffca34;
            animation: quake 0.4s;
            padding: $nav-header-height * 0.15 0;
            & > *:first-child {
              display: none;
            }
            .ilist {
              display: flex !important;
              flex-direction: column;
              .item {
                background-color: #c5a475;
              }
            }
            @keyframes quake {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.06);
              }
              100% {
                transform: scale(1);
              }
            }
          }
        }
        @include with-mobile {
          color: #fff;
          margin-bottom: 8px !important;
          transform: none;
          & > * {
            transform: none;
          }
          .dropdown-icon {
            display: inline;
            margin-left: 3px;
          }
          .ilist {
            margin-top: 10px;
            background-color: transparent;
            .item {
              padding: $nav-header-height * 0.15 0;
              &:hover {
                background-color: transparent;
              }
            }
          }
        }
      }
    }
  }
}
#touch-black {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  @include with-not-mobile {
    display: none !important;
  }
}
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      raw_pages: [],
    };
  },
  computed: {
    current_page_name() {
      const path = this.$route.hash;
      for (let page of this.pages) {
        if (typeof page.children === "undefined") {
          continue;
        }
        for (let sub of page.children) {
          if (path === page.link + sub.link) return sub.name;
        }
      }
      return "";
    },
    pages() {
      let parsed = [];
      for (let page of this.raw_pages) {
        if (typeof page.alternate === "undefined") parsed.push(page);
        else {
          if (this.$auth.loggedIn) parsed.push(page.alternate);
          else parsed.push(page);
        }
      }
      return parsed;
    },
  },
  async fetch() {
    const { pages } = await this.$content("pages").fetch();

    this.raw_pages = pages;
  },
  mounted() {},
  methods: {
    isCurrentPage(ele) {
      const path = this.$route.hash;
      if (typeof ele.children === "undefined") {
        if (typeof ele.links === "undefined") return path === ele.link;
        let idx = ele.links.findIndex((x) => x === path);
        return path === ele.link || idx !== -1;
      }
      for (let child of ele.children) {
        if (ele.link + child.link === path) return true;
      }
      return false;
    },
    toggleDropdown(e) {
      let child_display = getComputedStyle(
        e.currentTarget.firstChild
      ).getPropertyValue("display");
      if (child_display === "none") return;
      let list = e.currentTarget.getElementsByClassName("ilist")[0];
      if (!list.style.display) {
        list.style.display = "block";
      } else {
        list.style.display = "";
      }
    },
    toggleNav() {
      // possible state: hidden, showing, shown, hiding
      // hidden -> showing
      // shown -> hiding
      // showing -> none
      // hiding -> none
      let navlist = document.getElementById("nav-list");
      let screen = document.getElementById("touch-black");
      const display = "flex";
      const time = 100;

      if (!navlist.style.display) {
        // hidden
        showit();
      } else {
        if (navlist.classList.contains("showing")) {
          // showing
        } else if (navlist.classList.contains("hiding")) {
          // hiding
        } else {
          // shown
          hideit();
        }
      }

      function showit() {
        screen.style.display = "block";

        navlist.classList.add("showing");
        navlist.style.left = "-100vw";
        navlist.style.display = display;

        let prevt = undefined;
        function ani(ts) {
          if (!navlist.classList.contains("showing")) return;
          if (prevt === undefined) prevt = ts;
          let progress = Math.min(1, (ts - prevt) / time);
          navlist.style.left = navlist.clientWidth * (progress - 1) + "px";
          if (progress >= 1) {
            prevt = undefined;
            navlist.classList.remove("showing");
            return;
          }
          requestAnimationFrame(ani);
        }
        requestAnimationFrame(ani);
      }

      function hideit() {
        screen.style.display = "";

        navlist.classList.add("hiding");

        let prevt = undefined;
        function ani(ts) {
          if (!navlist.classList.contains("hiding")) return;
          if (prevt === undefined) prevt = ts;
          let progress = Math.min(1, (ts - prevt) / time);
          navlist.style.left = navlist.clientWidth * -progress + "px";
          if (progress >= 1) {
            prevt = undefined;
            navlist.classList.remove("hiding");
            navlist.style.display = "";
            return;
          }
          requestAnimationFrame(ani);
        }
        requestAnimationFrame(ani);
      }
    },
  },
});
</script>
