(window.webpackJsonp=window.webpackJsonp||[]).push([[21,14],{245:function(t,e,o){},247:function(t,e,o){"use strict";o(245)},249:function(t,e,o){"use strict";o.r(e);var n=o(0).a.extend({}),r=(o(247),o(15)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"section"},[t._t("default")],2)}),[],!1,null,"5a49894c",null);e.default=component.exports},271:function(t,e,o){},285:function(t,e,o){"use strict";o(271)},311:function(t,e,o){"use strict";o.r(e);var n=o(2),r=(o(19),o(0).a.extend({head:{title:"忘記密碼"},data:function(){return{email:"",popout:{msg:"",status:""}}},methods:{scrollToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(scrollTo(0,t-t/5),requestAnimationFrame(this.scrollToTop))},requestPasswordReset:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.popout.msg="獲得確認信中...",t.popout.status="info",e.prev=2,e.next=5,t.$axios.post("/api/get-password-reset-token",{email:t.email});case 5:e.sent,t.popout.msg="趕快去收確認信吧！",t.popout.status="success",e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),t.popout.status="error",e.t0.response&&e.t0.response.data?t.popout.msg="伺服器可能怪怪的，可以聯繫我們嗎 >_<":t.popout.msg="好像壞掉了，請跟我們聯絡 Q_Q";case 14:t.scrollToTop();case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))()}}})),c=(o(285),o(15)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form-section",[""!==t.popout.msg?o("div",{staticClass:"message",class:t.popout.status,attrs:{id:"msg-popout"}},[t._v(t._s(t.popout.msg))]):t._e(),o("h1",[o("font-awesome-icon",{attrs:{icon:"chevron-right"}}),t._v(" 忘記密碼")],1),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signin-form"},on:{submit:function(e){return e.preventDefault(),t.requestPasswordReset(e)}}},[o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:["far","envelope"]}}),t._v(" 信箱")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"nobugnolife@apcscamp.org"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"right"},[o("button",{staticClass:"submit",attrs:{id:"signin-btn",type:"submit"}},[t._v("送出")])])])])])],1)}),[],!1,null,"d9cd7c44",null);e.default=component.exports;installComponents(component,{FormSection:o(249).default})}}]);