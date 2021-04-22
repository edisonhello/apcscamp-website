<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      font-awesome-icon(icon='chevron-right')
      | &nbsp;修改資料
    .content
      form#signin-form(@submit.prevent="updateInfo")
        label.input
          span
            font-awesome-icon(:icon="['far', 'envelope']")
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@gmail.com",
            disabled,
            v-model="userInfo['email']"
          )
        label.input
          span
            font-awesome-icon(:icon='["far", "user"]')
            | &nbsp;姓名
          input(type="text", placeholder="電人王", disabled, v-model="userInfo['name']")
        label.input
          span
            font-awesome-icon(icon='venus-mars')
            | &nbsp;性別
          input(type="text", placeholder="男 / 女", disabled, v-model="userInfo['gender']")
        label.input
          span
            font-awesome-icon(icon='school')
            | &nbsp;學校
          input(
            type="text",
            disabled,
            placeholder="國立臺灣大學",
            v-model="userInfo['school']"
          )
        label.input
          span
            font-awesome-icon(icon='graduation-cap')
            | &nbsp;年級
          input(type="text", placeholder="高中三年級", disabled, v-model="userInfo['grade']")
        label.input
          span
            font-awesome-icon(icon='hourglass-half')
            | &nbsp;學程式的時間
          input(
            type="text",
            placeholder="5 年以上",
            disabled,
            v-model="userInfo['code-time']"
          )
        label.input
          span
            font-awesome-icon(icon='history')
            | &nbsp;接觸競賽的時間
          input(
            type="text",
            placeholder="1 年左右",
            disabled,
            v-model="userInfo['cp-time']"
          )
        label.input
          span
            font-awesome-icon(icon='trophy')
            | &nbsp;自豪的獎項們
          input(
            type="text",
            placeholder="IOI 滿分金、IMO 滿分金",
            disabled,
            v-model="userInfo['prize']"
          )
        label.input
          span
            font-awesome-icon(icon='list-ul')
            | &nbsp;OJ IDs
          input(
            type="text",
            placeholder="Topcoder, Codeforces, Atcoder...",
            disabled,
            v-model="userInfo['oj']"
          )
        label.input
          span
            font-awesome-icon(icon='align-left')
            | &nbsp;報名動機
          textarea(
            placeholder="我想學會寫程式跟大家一起PK",
            disabled,
            v-model="userInfo['motivation']"
          )
        label.input
          span
            font-awesome-icon(icon='book')
            | &nbsp;備註
          input(
            type="text",
            placeholder="我要睡電腦教室",
            disabled,
            v-model="userInfo['comment']"
          )
        .right
          button#signin-btn.submit 儲存
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "修改資料",
  },
  middleware: "auth",
  data() {
    return {
      userInfo: {
        email: this.$auth.user.email,
        ...this.$auth.user.applyForm,
      },
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  methods: {
    scrollToTop() {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        scrollTo(0, currentScroll - currentScroll / 5);
        requestAnimationFrame(this.scrollToTop);
      }
    },
    updateInfo() {
      this.popout.msg = "報名截止囉！";
      this.popout.status = "info";
      this.scrollToTop();
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 50px;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
