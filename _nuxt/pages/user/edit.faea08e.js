(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{240:function(e,t,o){},242:function(e,t,o){"use strict";var n=o(240);o.n(n).a},244:function(e,t,o){"use strict";o.r(t);var n=o(0).a.extend({}),r=(o(242),o(8)),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"967cf38a",null);t.default=component.exports},254:function(e,t,o){},265:function(e,t,o){"use strict";var n=o(254);o.n(n).a},281:function(e,t,o){"use strict";o.r(t);o(59),o(17),o(13),o(7),o(38),o(12);var n=o(2),r=o(31);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=o(0).a.extend({head:{title:"IOICcamp 2021 - 修改資料",meta:[{hid:"description",name:"description",content:"Home page description"}]},middleware:"auth",data:function(){return{userInfo:c({email:this.$auth.user.email},this.$auth.user.applyForm),popout:{msg:"",status:""}}},methods:{updateInfo:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$put("/api/users/apply-form",e.userInfo);case 3:t.sent,e.popout.msg="成功紀錄了。",e.popout.status="success",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),e.popout.msg="我們伺服器怪怪的，請跟我們聯絡 TAT",e.popout.status="error";case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}),m=(o(265),o(8)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("form-section",[""!==e.popout.msg?o("div",{staticClass:"message",class:e.popout.status,attrs:{id:"msg-popout"}},[e._v(e._s(e.popout.msg))]):e._e(),o("h1",[o("i",{staticClass:"fas fa-chevron-right"}),e._v(" 修改資料")]),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signin-form"},on:{submit:function(t){return t.preventDefault(),e.updateInfo(t)}}},[o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"far fa-envelope"}),e._v(" 信箱")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.email,expression:"userInfo['email']"}],attrs:{type:"email",placeholder:"nobugnolife@gmail.com",disabled:""},domProps:{value:e.userInfo.email},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"email",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"far fa-user"}),e._v(" 姓名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.name,expression:"userInfo['name']"}],attrs:{type:"text",placeholder:"電人王"},domProps:{value:e.userInfo.name},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"name",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-venus-mars"}),e._v(" 性別")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.gender,expression:"userInfo['gender']"}],attrs:{type:"text",placeholder:"男 / 女"},domProps:{value:e.userInfo.gender},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"gender",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-school"}),e._v(" 學校")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.school,expression:"userInfo['school']"}],attrs:{type:"text",placeholder:"國立臺灣大學"},domProps:{value:e.userInfo.school},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"school",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-graduation-cap"}),e._v(" 年級")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.grade,expression:"userInfo['grade']"}],attrs:{type:"text",placeholder:"高中三年級"},domProps:{value:e.userInfo.grade},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"grade",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-hourglass-half"}),e._v(" 學程式的時間")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo["code-time"],expression:"userInfo['code-time']"}],attrs:{type:"text",placeholder:"5 年以上"},domProps:{value:e.userInfo["code-time"]},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"code-time",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-history"}),e._v(" 接觸競賽的時間")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo["cp-time"],expression:"userInfo['cp-time']"}],attrs:{type:"text",placeholder:"1 年左右"},domProps:{value:e.userInfo["cp-time"]},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"cp-time",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-trophy"}),e._v(" 最自豪的獎項")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.prize,expression:"userInfo['prize']"}],attrs:{type:"text",placeholder:"IOI 滿分金、IMO 滿分金"},domProps:{value:e.userInfo.prize},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"prize",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-list-ul"}),e._v(" OJ IDs")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.oj,expression:"userInfo['oj']"}],attrs:{type:"text",placeholder:"Topcoder, Codeforces, Atcoder..."},domProps:{value:e.userInfo.oj},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"oj",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-align-left"}),e._v(" 報名動機")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.motivation,expression:"userInfo['motivation']"}],attrs:{placeholder:"我想學會寫程式跟大家一起PK"},domProps:{value:e.userInfo.motivation},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"motivation",t.target.value)}}})]),o("div",{staticClass:"right"},[o("button",{staticClass:"submit",attrs:{id:"signin-btn"}},[e._v("送出")])])])])])],1)}),[],!1,null,"794b29b6",null);t.default=component.exports;installComponents(component,{FormSection:o(244).default})}}]);