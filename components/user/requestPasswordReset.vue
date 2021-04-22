<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      font-awesome-icon(icon='chevron-right')
      | &nbsp;忘記密碼
    .content
      form#signin-form(@submit.prevent="requestPasswordReset")
        label.input
          span
            font-awesome-icon(:icon="['far', 'envelope']")
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@ioicamp.org",
            v-model="email"
          )
        .right
          button#signin-btn.submit(type="submit") 送出
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "忘記密碼",
  },
  data() {
    return {
      email: "",
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  // middleware: "auth",
  // auth: "guest",
  methods: {
    scrollToTop() {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        scrollTo(0, currentScroll - currentScroll / 5);
        requestAnimationFrame(this.scrollToTop);
      }
    },
    async requestPasswordReset() {
      this.popout.msg = "獲得確認信中...";
      this.popout.status = "info";
      try {
        const response = await this.$axios.post("/api/get-password-reset-token", {
          email: this.email,
        });
        this.popout.msg = "趕快去收確認信吧！";
        this.popout.status = "success";
      } catch (e) {
        this.popout.status = "error";
        if (!e.response || !e.response.data) {
          this.popout.msg = "好像壞掉了，請跟我們聯絡 Q_Q";
        } else {
          this.popout.msg = "伺服器可能怪怪的，可以聯繫我們嗎 >_<";
        }
      }
      this.scrollToTop();
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
