(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},249:function(t,e,n){},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{contentShadow:{default:!1}}}),c=(n(257),n(11)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-block"},[e("div",{staticClass:"section-header"},[e("h2",[e("font-awesome-icon",{staticClass:"title-icon",attrs:{icon:"terminal"}}),this._t("title")],2)]),e("div",{staticClass:"content",class:{"content-shadow":this.contentShadow}},[this._t("default")],2)])}),[],!1,null,"e92badf6",null);e.default=component.exports},253:function(t,e,n){"use strict";var r=n(244);n.n(r).a},254:function(t,e,n){"use strict";var r=n(245);n.n(r).a},255:function(t,e,n){"use strict";var r=n(246);n.n(r).a},256:function(t,e,n){"use strict";var r=n(247);n.n(r).a},257:function(t,e,n){"use strict";var r=n(248);n.n(r).a},258:function(t,e,n){"use strict";var r=n(249);n.n(r).a},259:function(t,e,n){"use strict";var r=n(250);n.n(r).a},260:function(t,e,n){"use strict";var r=n(251);n.n(r).a},264:function(t,e,n){"use strict";n.r(e);n(19),n(29),n(24),n(28),n(27),n(17),n(18),n(7),n(236),n(15);var r=n(2);n(12),n(237);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=n(0).a.extend({data:function(){return{raw_pages:[],currentHash:"#"}},props:{bgOpacity:{default:"1"}},computed:{cssVars:function(){return"\n        --bgOpacity: ".concat(this.bgOpacity,";\n      ")},current_page_name:function(){var t,path=this.currentPath,e=c(this.pages);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(void 0!==n.children){var r,o=c(n.children);try{for(o.s();!(r=o.n()).done;){var sub=r.value;if(path===sub.link)return sub.name}}catch(t){o.e(t)}finally{o.f()}}}}catch(t){e.e(t)}finally{e.f()}return""},pages:function(){var t,e=[],n=c(this.raw_pages);try{for(n.s();!(t=n.n()).done;){var r=t.value;void 0===r.alternate?e.push(r):this.$auth.loggedIn?e.push(r.alternate):e.push(r)}}catch(t){n.e(t)}finally{n.f()}return e},currentPath:function(){return this.currentHash}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("pages").fetch();case 2:n=e.sent,r=n.pages,t.raw_pages=r;case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;setInterval((function(){t.currentHash=window.location.hash||"#"}),1e3)},methods:{isCurrentPage:function(t){var path=this.currentPath;if(void 0===t.children){if(void 0===t.links)return path===t.link;var e=t.links.findIndex((function(t){return t===path}));return path===t.link||-1!==e}var n,r=c(t.children);try{for(r.s();!(n=r.n()).done;){if(n.value.link===path)return!0}}catch(t){r.e(t)}finally{r.f()}return!1},toggleDropdown:function(t){if("none"!==getComputedStyle(t.currentTarget.firstChild).getPropertyValue("display")){var e=t.currentTarget.getElementsByClassName("ilist")[0];e.style.display?e.style.display="":e.style.display="block"}},toggleNav:function(){var t=document.getElementById("nav-list"),e=document.getElementById("touch-black");t.style.display?t.classList.contains("showing")||t.classList.contains("hiding")||function(){e.style.display="",t.classList.add("hiding");var n=void 0;requestAnimationFrame((function e(r){if(t.classList.contains("hiding")){void 0===n&&(n=r);var progress=Math.min(1,(r-n)/100);if(t.style.left=t.clientWidth*-progress+"px",progress>=1)return n=void 0,t.classList.remove("hiding"),void(t.style.display="");requestAnimationFrame(e)}}))}():function(){e.style.display="block",t.classList.add("showing"),t.style.left="-100vw",t.style.display="flex";var n=void 0;requestAnimationFrame((function e(r){if(t.classList.contains("showing")){void 0===n&&(n=r);var progress=Math.min(1,(r-n)/100);if(t.style.left=t.clientWidth*(progress-1)+"px",progress>=1)return n=void 0,void t.classList.remove("showing");requestAnimationFrame(e)}}))}()}}}),d=(n(254),n(11)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"nav",style:t.cssVars},[n("div",{staticClass:"header-bar"},[n("div",{key:t.currentHash,staticClass:"right-side"},[n("div",{attrs:{id:"nav-button","data-display":"flex","data-time":"100"},on:{click:t.toggleNav}},[n("font-awesome-icon",{attrs:{icon:"bars"}})],1),n("div",{staticClass:"ilist",attrs:{id:"nav-list"}},[t._l(t.pages,(function(e){return[void 0===e.children?n("a",{key:e.link,staticClass:"skewed item",class:{"is-active":t.isCurrentPage(e)},attrs:{href:e.link,prefetch:void 0===e.prefetch||e.prefetch}},[n("span",[t._v(t._s(e.name))])]):n("div",{key:e.link,staticClass:"skewed items",class:{"is-active":t.isCurrentPage(e)},on:{click:t.toggleDropdown}},[n("span",[t._v(t._s(e.name)),n("font-awesome-icon",{staticClass:"dropdown-icon",attrs:{icon:"caret-down"}})],1),e.children.length>0?n("div",{staticClass:"ilist",on:{click:function(t){t.stopPropagation()}}},t._l(e.children,(function(e){return n("a",{key:e.link,staticClass:"item",class:{"list-item-is-active":t.isCurrentPage(e)},attrs:{href:e.link,prefetch:void 0===e.prefetch||e.prefetch}},[t._v(t._s(e.name))])})),0):t._e()])]}))],2),n("div",{attrs:{id:"touch-black"},on:{click:t.toggleNav}})])])])}),[],!1,null,"6981df9e",null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),c=(n(255),n(11)),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("何謂APCS")]),e("ul",[e("li",[this._v("APCS 為 Advanced Placement Computer Science 的英文縮寫，是指「大學程式設計先修檢測」。其檢測模式乃參考美國大學先修課程（Advanced Placement，AP），與各大學合作命題，並確定檢定用題目經過信效度考驗，以確保檢定結果之公信力。在台灣， APCS 是目前衡量國高中生程式能力最有公信力的一個指標：目前有 31 所大學， 38 個科系，設立了 APCS 組，將 APCS 納入入學的門檻。")])]),e("h3",[this._v("緣由")]),e("ul",[e("li",[this._v("近年來，隨著人工智慧崛起，資工系竄升成一大熱門科系，大家開始關注要進入資工系所需具備的能力，而 APCS 也因此備受家長關注。補教業者更積極把握機會 ，使APCS 的補教課程如雨後春筍般設立。然而，或許是因為找不到對程式設計熟習的老師，我們從不少補習班釋出的課程教材中發現許多不適當的內容，有些題目的題解甚至是錯誤的。除此之外，我們也發現這些 APCS 的課程大多集中在大臺北地區等大都市，收費也不便宜。")]),e("li",[this._v("為解決以上問題，我們決定利用我們的專業能力，在 2021 暑假舉辦一個針對初學者，以 APCS 考試大綱規劃課程內容的線上營隊。雖然線上營隊的舉辦較實體多了許多限制，但考量疫情趨勢與我們期望打破地理限制的初衷，我們仍決定線上舉行，期望讓全臺各地想精進程式能力的初學者都能參與。")])])])}],!1,null,"1de5203c",null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{sectionId:{default:""},sectionName:{default:""}}}),c=(n(256),n(11)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("a",{staticClass:"pageAnchor",attrs:{id:t.sectionId}}),n("section-block",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.sectionName))]},proxy:!0}])},[[t._t("default")]],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionBlock:n(252).default})},267:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),c=n(11),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("關於我們")]),e("ul",[e("li",[this._v("我們是一群來自國立臺灣大學的學生，因為對程式設計與演算法的熱愛，我們在此相遇、集結，並成為互相討論、分享的夥伴。我們絕大多數的人都參與了臺大的培訓班與國際大學生程式設計競賽，每年參加 ICPC 區域賽都取得極佳的成績，並且獲得參加世界總決賽的資格。然而，這樣的經驗並沒有讓我們滿足。")]),e("li",[this._v("我們其中的許多人從國、高中就已經開始接觸程式設計，然而在求學的路途中我們發現，在臺灣，程式教育相較於其他科目非常不普及。這使得許多對程式有興趣的同學只能獨自學習，知識來源則只能透過書本或網路自行尋找，當有所疑惑之時也無人相互討論。於是我們從 2014 年開始舉辦「程式競賽解題集訓營（IOIC）」，讓對資訊奧林匹亞有興趣的同學能認識並切磋交流。然而由於資源有限，「程式競賽解題集訓營」每年只有大約 60 位學員能參加，且由於營隊的內容較為進階且為競賽導向，對初學者或是單純想學程式的同學來說實在難以接近。")])]),e("h3",[this._v("營隊設計與宗旨")]),e("ul",[e("li",[this._v("我們營隊將開設兩種難度的課程：針對沒有基礎的學生，我們期望透過密集訓練程式解題的方式，使學生在短時間內了解基本的程式運作和編寫，考取APCS階段性的成績；而對於已經有語言基礎的學生，我們則透過高密度、高品質的演算法課程帶領學生踏入演算法與程式設計的領域，讓學生在擴大其原有視野的同時，具備考取 APCS 高分的能力。")]),e("li",[this._v("我們希望透過此活動能以正確的方式培養臺灣學生的程式能力，增進國高中生對程式語言和程式設計與演算法的基本了解；也希望這個活動能提供學生補習班以外的選擇，在金錢負擔較小的情況下，仍保有相同、甚至更佳教學品質的課程。若能讓更多臺灣學生能從小就接受到正確、完善的資訊教育，相信能增加臺灣學生的資訊素養，而此結果正是我們所期待的。")])])])}],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),c=n(11),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("營隊時間")]),n("ul",[n("li",[t._v("2021 年 08 月 02 日（一）至 2021 年 08 月 13 日（五），不含假日。")]),n("li",[t._v("語法班上課時間為每日 09:00 AM 至 12:30 PM，算法班上課時間為每日 13:30 PM 至 17:00 PM。")]),n("li",[t._v("其中學員可自由選擇是否去助教時間問問題。")])]),n("h3",[t._v("營隊地點")]),n("ul",[n("li",[t._v("考量疫情趨勢與我們期望打破地理限制的初衷，我們決定"),n("b",[t._v("線上")]),t._v("舉行本次營隊，期望讓全臺各地想精進程式能力的初學者都能參與。我們會努力利用各種線上平臺來創造與實體相仿的營隊體驗。")])]),n("h3",[t._v("營隊費用")]),n("ul",[n("li",[t._v("TBD")])])])}],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),c=(n(258),n(11)),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/schedule1.png"}})]),e("div",{staticClass:"img"},[e("img",{attrs:{src:"/schedule2.png"}})])])}],!1,null,"a4e21e48",null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(15);var r=n(2),c=n(0).a.extend({head:{},data:function(){return{courses:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("courses").sortBy("slug","asc").fetch();case 2:t.courses=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),o=(n(259),n(11)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"courses"},[n("section-block",{staticClass:"course",attrs:{contentShadow:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("語法班")]},proxy:!0}])},[n("div",[n("ul",[n("li",[t._v("課程介紹和線上系統介紹")]),n("li",[t._v("環境設定（Code::Blocks）")]),n("li",[t._v("變數與資料型態")]),n("li",[t._v("輸入輸出（cin, cout）")]),n("li",[t._v("運算式、條件式")]),n("li",[t._v("迴圈與流程控制（if, while, for, continue, break）、巢狀迴圈")]),n("li",[t._v("一維與多維陣列、字元與字串（c style）、字串常用函數")]),n("li",[t._v("內建函數與函數呼叫、自訂函數")]),n("li",[t._v("遞迴（recursion）")]),n("li",[t._v("結構（struct）")])])])]),n("section-block",{staticClass:"course",attrs:{contentShadow:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("算法班")]},proxy:!0}])},[n("div",[n("ul",[n("li",[t._v("實作技巧（包括 bitwise operation...）")]),n("li",[t._v("時間複雜度（time complexity）")]),n("li",[t._v("二分搜尋法（binary search）")]),n("li",[t._v("圖論（graph theory）")]),n("li",[t._v("枚舉（enumeration）")]),n("li",[t._v("貪心（greedy）")]),n("li",[t._v("分治（divide and conquer）")]),n("li",[t._v("動態規劃（dynamic programming）")])])])])],1),n("div",{staticClass:"cutter"})])}),[],!1,null,"6dfd54fa",null);e.default=component.exports;installComponents(component,{SectionBlock:n(252).default})},271:function(t,e,n){"use strict";n.r(e);n(15);var r=n(2),c=n(0).a.extend({head:{title:"師資陣容"},data:function(){return{teachers:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("teachers").fetch();case 2:t.teachers=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),o=(n(260),n(11)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"teachers"},t._l(t.teachers,(function(e){return n("div",{key:e.slug,staticClass:"teacher"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.image}})]),n("div",{staticClass:"intro"},[n("h3",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"experience"},t._l(e.experiences,(function(e){return n("ul",{key:e},[n("li",[n("font-awesome-icon",{attrs:{icon:"award"}}),n("span",{staticClass:"experience"},[t._v(t._s(e))])],1)])})),0)])])})),0),n("div",{staticClass:"cutter"})])}),[],!1,null,"f98258a4",null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),c=n(11),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("聯絡我們")]),e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/apcscodingcamp"}},[this._v("營隊粉專")])]),e("li",[e("a",{attrs:{href:"mailto:apcscamp@csie.ntu.edu.tw"}},[this._v("apcscamp@csie.ntu.edu.tw")])])])])}],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),c=n(11),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("報名請戳"),e("a",{attrs:{href:"https://ioicamp.org"}},[this._v("這裡")]),this._v("owo")])])}],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({data:function(){return{cover:{default:null},navbar:{default:null},navbarBgOpacity:{default:1}}},mounted:function(){this.cover=document.getElementById("cover"),this.navbar=document.getElementById("navbar"),this.registerDynamicOpacityNavbar(),this.registerDynamicAddNavbarShadow()},methods:{registerMovableNavbar:function(){var t=this.cover,e=this.navbar,n=t.clientHeight;window.addEventListener("scroll",(function(){window.pageYOffset>n?(e.classList.add("fixed-header"),e.classList.remove("inline-header"),narbar.classList.add("header-shadow")):(e.classList.add("inline-header"),e.classList.remove("fixed-header"))}))},registerDynamicOpacityNavbar:function(){var t=this,e=this.cover;this.navbar;window.addEventListener("scroll",(function(){var n=e.clientHeight,r=(window.pageYOffset-n)/100*.5+.5,c=Math.max(Math.min(r,1),0);t.navbarBgOpacity=c}))},registerDynamicAddNavbarShadow:function(){var t=this.cover,e=this.navbar,n=t.clientHeight;window.addEventListener("scroll",(function(){window.pageYOffset>n?e.classList.add("header-shadow"):e.classList.remove("header-shadow")}))}}}),c=(n(253),n(11)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),e("nav-header",{staticClass:"header fixed-header",attrs:{id:"navbar",bgOpacity:this.navbarBgOpacity}}),e("div",{staticClass:"outer-container"},[e("Section",{attrs:{sectionId:"aboutapcs",sectionName:"關於 APCS"}},[[e("AboutApcs")]],2),e("Section",{attrs:{sectionId:"aboutus",sectionName:"關於活動"}},[[e("AboutUs")]],2),e("Section",{attrs:{sectionId:"information",sectionName:"營隊資訊"}},[[e("Information")]],2),e("Section",{attrs:{sectionId:"schedule",sectionName:"上課日程"}},[[e("Schedule")]],2),e("Section",{attrs:{sectionId:"courses",sectionName:"課程內容"}},[[e("Courses")]],2),e("Section",{attrs:{sectionId:"teachers",sectionName:"師資陣容"}},[[e("Teachers")]],2),e("Section",{attrs:{sectionId:"contacts",sectionName:"聯絡我們"}},[[e("Contacts")]],2),e("Section",{attrs:{sectionId:"register",sectionName:"立即報名"}},[[e("Register")]],2)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cover",attrs:{id:"cover"}},[e("img",{attrs:{src:"/cover.png"}})])}],!1,null,"5de7aecf",null);e.default=component.exports;installComponents(component,{NavHeader:n(264).default,AboutApcs:n(265).default,Section:n(266).default,AboutUs:n(267).default,Information:n(268).default,Schedule:n(269).default,Courses:n(270).default,Teachers:n(271).default,Contacts:n(272).default,Register:n(273).default})}}]);