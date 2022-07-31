<template lang="pug">
  .container
    .teachers
      .teacher(v-for="teacher in orderedTeachers", :key="teacher.slug")
        .image
          img(:src="teacher.image")
        .intro
          h3.name {{ teacher.name }}
          .experience
            ul(v-for="experience in teacher.experiences", :key="experience")
              li
                font-awesome-icon(icon="award")
                span.experience {{ experience }}
    .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      teachers: [],
    };
  },
  async fetch() {
    this.teachers = await this.$content("teachers").fetch();
  },
  computed: {
    orderedTeachers: function () {
      function compare(a, b) {
        if (a.index < b.index)
          return -1;
        if (a.index > b.index)
          return 1;
        return 0;
      }
      return this.teachers.sort(compare);
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  h1.title {
    color: #ffe300;
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;

    font-weight: 300;
  }
  .teachers {
    padding-left: 2vw;
    padding-right: 2vw;
    .teacher {
      display: flex;
      background-color: white;
      padding: 20px 20px;
      margin: 20px 0;
      box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.2);

      @include with-mobile {
        padding: 5px 10px;
      }
      .intro {
        padding: 15px 20px;
        .name {
          font-size: 1.5em;
          font-weight: 700;
        }
        .experience {
          padding-left: 8px;
          margin-top: 10px;
          font-size: 1.1em;
          & > ul {
            padding: 0;
            list-style: none;
            & > li {
              font-family: "Noto Serif TC", serif;
              font-weight: 600;
              margin-bottom: 3px;
            }
          }
        }
      }
      .image {
        &::before {
          // vertical centering from
          // http://csscoke.com/2018/08/21/css-vertical-align/
          content: "";
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }
        img {
          max-width: 100%;
          object-fit: contain;
          vertical-align: middle;
          display: inline-block;
        }
      }
      &:first-of-type {
        margin-top: 30px;
      }
      &:last-of-type {
        margin-bottom: 30px;
      }
      &:nth-child(odd) {
        flex-direction: row-reverse;
        .image {
          text-align: right;
          width: 30%;
        }
        .intro {
          width: 70%;
        }
      }
      &:nth-child(even) {
        flex-direction: row;
        text-align: left;
        .image {
          text-align: left;
        }
      }
    }
  }
  .cutter {
    height: 1px;
  }
}
</style>
