<template lang="pug">
  header.nav(:style="cssVars")
    .header-bar
      //- .left-side
      //-   nuxt-link.icon(to="/")
      //-     img(src="/icon.png")
      .right-side(:key="currentHash")
        #nav-button(data-display="flex", data-time="100", @click="toggleNav")
          font-awesome-icon(icon='bars')
        #nav-list.ilist
          template(v-for="ele in pages")
            a.skewed.item(
              v-if="typeof ele.children === 'undefined'",
              :key="ele.link",
              :href="ele.link",
              :class="{ \"is-active\": isCurrentPage(ele) }",
              :prefetch="typeof ele.prefetch === 'undefined' ? true : ele.prefetch"
            )
              span {{ ele.name }}
            .skewed.items(
              v-else,
              :key="ele.link",
              :class="{ \"is-active\": isCurrentPage(ele) }",
              @click="toggleDropdown"
            )
              span
                | {{ ele.name }}
                font-awesome-icon(icon='caret-down', class='dropdown-icon')
              .ilist(v-if="ele.children.length > 0", @click.stop)
                a.item(
                  v-for="obj in ele.children",
                  :href="obj.link",
                  :key="obj.link",
                  :prefetch="typeof obj.prefetch === 'undefined' ? true : obj.prefetch"
                  :class="{ \"list-item-is-active\": isCurrentPage(obj) }",
                ) {{ obj.name }}
        #touch-black(@click="toggleNav")
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      raw_pages: [],
      currentHash: '#',
    };
  },
  props: {
    bgOpacity: {
      default: "1",
    },
  },
  computed: {
    cssVars() {
      return `
        --bgOpacity: ${this.bgOpacity};
      `
    },
    current_page_name() {
      const path = this.currentPath;
      for (let page of this.pages) {
        if (typeof page.children === "undefined") {
          continue;
        }
        for (let sub of page.children) {
          if (path === sub.link) return sub.name;
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
    currentPath() {
      return this.currentHash;
    },
  },
  async fetch() {
    const { pages } = await this.$content("pages").fetch();

    this.raw_pages = pages;
  },
  mounted() {
    setInterval(() => {
      this.currentHash = window.location.hash || '#';
    }, 1000);
  },
  methods: {
    isCurrentPage(ele) {
      const path = this.currentPath;
      if (typeof ele.children === "undefined") {
        if (typeof ele.links === "undefined") return path === ele.link;
        let idx = ele.links.findIndex((x) => x === path);
        return path === ele.link || idx !== -1;
      }
      for (let child of ele.children) {
        if (child.link === path) return true;
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

<style lang="scss" scoped>
$nav-bg-color: #726ebb;
$nav-bg-color-mob: #726ebb;
$nav-pop-bg-color-mob: #6b67b6;
$nav-item-text: #fff;
$nav-item-hover-bg: #58549b;
$nav-item-hover-text: #87dff5;
$nav-item-active-bg: #615db9;
$nav-item-active-text: #5addfd;
$nav-item-active-text-mob: #5addfd;
$nav-link-hover-text: #726ebb;


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
  width: 100vw;
  top: 0;

  .header-bar {
    float: right;
    height: $nav-header-height;
    width: 100%;
    @include with-not-mobile {
      //- width: calc(94vw - #{$nav-header-height});
      //- width: 750px;
      border-radius: 5px 0px 0px 5px;
      padding: ($nav-header-height * 0.1) ($nav-header-height * 0.5);
      box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);

      background-color: rgba($nav-bg-color, var(--bgOpacity));

      //- --fullBgColor: rgba($nav-bg-color, var(--bgOpacity));
      //- background-image: linear-gradient(to left, var(--fullBgColor) 600px, rgba(0, 0, 0, 0) 200px);
      

      //- background-image: linear-gradient(to left, $nav-bg-color 90%, rgba(0, 0, 0, 0));
    }
    @include with-mobile {
      width: calc(100vw - #{$nav-header-height});
      border-radius: 0px;
      padding: ($nav-header-height * 0.1) ($nav-header-height * 0.5);
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      background-color: $nav-bg-color-mob;
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
        background-color: $nav-pop-bg-color-mob;
      }
      .item {
        text-decoration: none;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin: 0 $nav-header-height * 0.15 !important;
        padding: $nav-header-height * 0.15 $nav-header-height * 0.25;
        color: $nav-item-text;
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
          background-color: $nav-item-hover-bg;
          color: $nav-item-hover-text;
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
        &.is-active {
          background-color: $nav-item-active-bg;
          color: $nav-item-active-text;
          @include with-mobile {
            color: $nav-item-active-text-mob;
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
        padding: $nav-header-height * 0.15 $nav-header-height * 0.25;
        color: $nav-item-text;
        transition-duration: 0.2s;
        transition-property: color;
        &.is-active {
          background-color: $nav-item-active-bg;
          color: $nav-item-active-text;
          @include with-mobile {
            color: $nav-item-active-text-mob;
          }
        }
        .ilist {
          position: static;
          display: none;
          padding-top: 0;
          .item {
            padding: $nav-header-height * 0.15 $nav-header-height * 0.25;
            margin: 0 !important;
            &:last-of-type {
              padding-bottom: $nav-header-height * 0.15;
            }
            //- &.nuxt-link-active,
            &.list-item-is-active {
              // background-color: #9a9;
              color: $nav-item-active-text;
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
          &.is-active:hover,
          &.nuxt-link-active:hover {
            transform: rotate(0);
            & > * {
              transform: rotate(0);
            }
            align-self: flex-start;
            background-color: $nav-item-hover-bg;
            color: $nav-link-hover-text;
            animation: quake 0.4s;
            padding: $nav-header-height * 0.15 0;
            & > *:first-child {
              display: none;
            }
            .ilist {
              display: flex !important;
              flex-direction: column;
              .item {
                background-color: $nav-item-hover-bg;
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