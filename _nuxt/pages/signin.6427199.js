(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{245:function(t,e,n){},247:function(t,e,n){"use strict";var o=n(245);n.n(o).a},249:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({}),r=(n(247),n(8)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"967cf38a",null);e.default=component.exports},252:function(t,e,n){},263:function(t,e,n){"use strict";var o=n(252);n.n(o).a},280:function(t,e,n){"use strict";n.r(e);n(13);var o=n(2),r=n(0).a.extend({head:{title:"IOICcamp 2021 - 登入",meta:[{hid:"description",name:"description",content:"Home page description"}]},middleware:"auth",auth:"guest",data:function(){return{login:{email:"",password:""},popout:{msg:"",status:""}}},methods:{signin:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("IOICStrategy",{data:t.login});case 3:e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),t.popout.status="error","User not found"===e.t0.response.data.error?t.popout.msg="帳號或密碼錯誤~":t.popout.msg="不知道發生什麼事了，可以聯絡我們嗎?";case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),l=(n(263),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form-section",[""!==t.popout.msg?n("div",{staticClass:"message",class:t.popout.status,attrs:{id:"msg-popout"}},[t._v(t._s(t.popout.msg))]):t._e(),n("h1",[n("i",{staticClass:"fas fa-chevron-right"}),t._v(" 登入")]),n("div",{staticClass:"content"},[n("form",{attrs:{id:"signin-form"},on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("label",{staticClass:"input"},[n("span",[n("i",{staticClass:"far fa-envelope"}),t._v(" 信箱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",placeholder:"nobugnolife@gmail.com"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})]),n("label",{staticClass:"input"},[n("span",[n("i",{staticClass:"fas fa-key"}),t._v(" 密碼")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"your password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),n("div",{staticClass:"right"},[n("button",{staticClass:"submit",attrs:{id:"signin-btn",type:"submit"}},[t._v("登入")])])])]),n("h2",[n("i",{staticClass:"fas fa-chevron-right"}),t._v(" 沒有帳號？")]),n("div",{staticClass:"content"},[n("p",[n("NuxtLink",{attrs:{to:"/signup/"}},[t._v("立即報名")]),t._v(" IOICamp 2021！")],1)])])],1)}),[],!1,null,"71cdc8a3",null);e.default=component.exports;installComponents(component,{FormSection:n(249).default})}}]);