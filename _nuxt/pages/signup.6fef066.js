(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{240:function(t,e,o){},242:function(t,e,o){"use strict";var n=o(240);o.n(n).a},244:function(t,e,o){"use strict";o.r(e);var n=o(0).a.extend({}),r=(o(242),o(8)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"967cf38a",null);e.default=component.exports},249:function(t,e,o){},260:function(t,e,o){"use strict";var n=o(249);o.n(n).a},277:function(t,e,o){"use strict";o.r(e);o(12);var n=o(2),r=o(0).a.extend({head:{title:"IOICcamp 2021 - 我要報名",meta:[{hid:"description",name:"description",content:"Home page description"}]},data:function(){return{checkPassword:"",account:{email:"",password:"",token:""},popout:{msg:"",status:""}}},computed:{samePassword:function(){return this.account.password===this.checkPassword}},methods:{getToken:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/api/get-verification-token",{email:t.account.email});case 3:e.sent,t.popout.msg="趕快去收驗證信吧！",t.popout.status="success",e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t.popout.status="error","Request too fast"===e.t0.response.data.error?t.popout.msg="不要一直戳我拉 QwQ":t.popout.msg="我們伺服器可能燒起來了，請聯繫我們 !";case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},signup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.samePassword){e.next=4;break}return t.popout.msg="請確認密碼是否相同呦~",t.popout.status="error",e.abrupt("return");case 4:return e.prev=4,e.next=7,t.$axios.$post("/api/register",t.account);case 7:e.sent,t.popout.msg="註冊成功，請重新登入!",t.popout.status="success",e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),t.popout.status="error","Token not found"===e.t0.response.data.error?t.popout.msg="「信箱驗證碼」有填對嗎？":"User already exists"===e.t0.response.data.error&&(t.popout.msg="怎麼辦? 信箱被註冊走了耶");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))()}}}),c=(o(260),o(8)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form-section",[""!==t.popout.msg?o("div",{staticClass:"message",class:t.popout.status,attrs:{id:"msg-popout"}},[t._v(t._s(t.popout.msg))]):t._e(),o("h1",[o("i",{staticClass:"fas fa-chevron-right"}),t._v(" 建立帳號")]),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signup-form"},on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"far fa-envelope"}),t._v(" 信箱")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.account.email,expression:"account.email"}],attrs:{type:"email",placeholder:"nobugnolife@gmail.com"},domProps:{value:t.account.email},on:{input:function(e){e.target.composing||t.$set(t.account,"email",e.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-lock"}),t._v(" 信箱驗證碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.account.token,expression:"account.token"}],staticClass:"has-right",attrs:{type:"text",placeholder:"e.g. 1A2b3C"},domProps:{value:t.account.token},on:{input:function(e){e.target.composing||t.$set(t.account,"token",e.target.value)}}}),o("div",{staticClass:"trigger zero-relative"},[o("div",{staticClass:"btn",on:{click:t.getToken}},[t._v("取得")])])]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-key"}),t._v(" 密碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.account.password,expression:"account.password"}],attrs:{type:"password",placeholder:"your password"},domProps:{value:t.account.password},on:{input:function(e){e.target.composing||t.$set(t.account,"password",e.target.value)}}})]),o("label",{staticClass:"input",class:{error:!t.samePassword}},[o("span",[o("i",{staticClass:"fas fa-check-double"}),t._v(" 確認密碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.checkPassword,expression:"checkPassword"}],attrs:{type:"password",placeholder:"your password"},domProps:{value:t.checkPassword},on:{input:function(e){e.target.composing||(t.checkPassword=e.target.value)}}})]),o("div",{staticClass:"right"},[o("button",{staticClass:"submit",attrs:{id:"signup-btn"}},[t._v("報名")])])])]),o("h2",[o("i",{staticClass:"fas fa-chevron-right"}),t._v(" 已經有帳號？")]),o("div",{staticClass:"content"},[o("p",[o("NuxtLink",{attrs:{to:"/signin/"}},[t._v("馬上登入")]),t._v(" IOICamp 2021！")],1)])]),o("div",{staticClass:"cutter"})],1)}),[],!1,null,"4a0510a4",null);e.default=component.exports;installComponents(component,{FormSection:o(244).default})}}]);