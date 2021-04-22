<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      font-awesome-icon(icon='chevron-right')
      | &nbsp;變更密碼
    .content
      form#signin-form(@submit.prevent="changePassword")
        label.input
          span
            font-awesome-icon(icon='unlock')
            | &nbsp;新密碼
          input(
            type="password",
            placeholder="new password",
            v-model="password"
          )
        label.input(:class="{ error: !samePassword }")
          span
            font-awesome-icon(icon='unlock-alt')
            | &nbsp;確認新密碼
          input(
            type="password",
            placeholder="new password",
            v-model="checkPassword"
          )
        .right
          button#signin-btn.submit(type="submit") 變更
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "變更密碼",
  },
  // middleware: "auth",
  // auth: "guest",
  data() {
    return {
      token: "",
      checkPassword: "",
      password: "",
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  mounted() {
    if (!this.$route.query || !this.$route.query.token) {
      this.$router.back();
      return;
    }
    this.token = this.$route.query.token;
  },
  computed: {
    samePassword() {
      return this.password === this.checkPassword;
    },
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
    async changePassword() {
      if (!this.samePassword) {
        this.popout.msg = "請確認密碼是否相同呦~";
        this.popout.status = "error";
        this.scrollToTop();
        return;
      }
      this.popout.msg = "變更中...";
      this.popout.status = "info";
      this.scrollToTop();
      try {
        const response = await this.$axios.post(
          "/api/password-reset",
          {'new-password': this.password, 'token': this.token}
        );
        this.popout.msg = '成功變更!';
        this.popout.status = 'success';
      } catch (e) {
        this.popout.status = "error";
        if (!e.response || !e.response.data) {
          this.popout.msg = "好像壞掉了，請跟我們聯絡 Q_Q";
        } else if (e.response.data.error === 'Token expired') {
          this.popout.msg = '太晚打開信箱囉，請重新申請忘記密碼';
        } else {
          this.popout.msg = "不知道發生什麼事了，可以聯絡我們嗎?";
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-left: 20vw;
  padding-right: 20vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
