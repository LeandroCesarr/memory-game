(function(t){function e(e){for(var r,s,o=e[0],i=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a63":function(t,e,n){"use strict";var r=n("97ed"),a=n.n(r);a.a},"2c0c":function(t,e,n){"use strict";var r=n("9a0e"),a=n.n(r);a.a},"486b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Game"),n("p",{staticClass:"status"},[t._v("status: "+t._s(t.node))])],1)},s=[],o=n("5530"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"transition",staticClass:"o-game"},[n("transition",{attrs:{name:"slide",tag:"div"},on:{"before-leave":t.beforeLeave,enter:t.enter,"after-enter":t.afterEnter}},[t.page?n(t.page,{tag:"component",staticClass:"o-game_slide"}):t._e()],1)],1)},u=[],l=n("ade3"),f=n("2f62"),d={methods:{beforeLeave:function(t){this.$refs.transition.style.maxHeight="".concat(t.offsetHeight,"px")},enter:function(t){this.$refs.transition.style.maxHeight="".concat(t.offsetHeight,"px")},afterEnter:function(){this.$refs.transition.style.maxHeight=""}}},m={START:"start",GAME:"game"},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-start"},[n("Title",{staticClass:"m-start_title"}),n("h2",[t._v("A memory game with vue.js")]),n("Button",{nativeOn:{click:function(e){return t.onClick(e)}}},[t._v("play game")])],1)},v=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"a-btn"},[n("span",{staticClass:"a-btn_ctt"},[t._t("default")],2)])},b=[],h={},_=h,O=(n("a9ad"),n("2877")),j=Object(O["a"])(_,g,b,!1,null,null,null),C=j.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,{tag:"component",staticClass:"a-title"},[r("img",{attrs:{src:n("e691"),alt:"MemoCard"}})])},E=[],x={props:{tag:{type:String,default:"h1"}}},w=x,k=(n("2c0c"),Object(O["a"])(w,y,E,!1,null,null,null)),T=k.exports,S={components:{Button:C,Title:T},methods:Object(o["a"])(Object(o["a"])({},Object(f["d"])(["changePage"])),{},{onClick:function(){this.changePage(m.GAME)}})},A=S,P=(n("d45a"),Object(O["a"])(A,p,v,!1,null,null,null)),$=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("scoreBoard"),n("cardGrid",{staticClass:"m-game_grid"}),n("controls",{staticClass:"m-game_controls"})],1)},I=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-grid-card"},[n("h2",{staticClass:"m-grid-card_title"},[t._v("Cards")]),n("ul",{staticClass:"m-grid-card_cards"},t._l(t.cards,(function(e,r){return n("li",{key:r},[n("card",{attrs:{card:e},nativeOn:{click:function(n){return t.flip(e)}}})],1)})),0)])},G=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-card",class:{"-active":t.cardInfo.flip,"-valid":t.cardInfo.valid,"-error":t.cardInfo.error}},[t._m(0),n("div",{staticClass:"m-card_side -back"},[n("p",[t._v(t._s(t.cardInfo.name))])])])},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-card_side -front"},[r("img",{attrs:{src:n("67bc"),alt:""}})])}],L={props:{card:Object},data:function(){return{}},computed:Object(o["a"])(Object(o["a"])({},Object(f["c"])(["getCard"])),{},{cardInfo:function(){return this.getCard(this.card.slug)}})},N=L,D=(n("7518"),Object(O["a"])(N,R,H,!1,null,null,null)),F=D.exports,J={components:{card:F},computed:Object(o["a"])({},Object(f["c"])(["cards"])),methods:Object(o["a"])(Object(o["a"])({},Object(f["b"])(["move"])),{},{flip:function(t){this.move(t)}})},U=J,V=(n("f76b"),Object(O["a"])(U,B,G,!1,null,null,null)),q=V.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-score"},[n("h2",{staticClass:"m-score_title"},[t._v("Scoreboard")]),n("div",{staticClass:"m-score_items"},[n("p",{staticClass:"m-score_item"},[n("span",[t._v("plays:")]),t._v(" "+t._s(t.plays))]),n("p",{staticClass:"m-score_item"},[n("span",[t._v("points:")]),t._v(" "+t._s(t.points))]),n("p",{staticClass:"m-score_item"},[n("span",[t._v("timer:")]),t._v(" "+t._s(t.time)+"s")])])])},X=[],Y={computed:Object(o["a"])({},Object(f["c"])(["points","plays","time"]))},z=Y,K=(n("2a63"),Object(O["a"])(z,Q,X,!1,null,null,null)),W=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-controls"},[n("h2",{staticClass:"m-controls_title"},[t._v("Controls")]),n("div",{staticClass:"m-controls_controls"},[n("SkewButton",{staticClass:"m-controls_button",nativeOn:{click:function(e){return t.resetData(e)}}},[t._v("Reset")]),n("SkewButton",{staticClass:"m-controls_button",nativeOn:{click:function(e){return t.reset(e)}}},[t._v("Quit")])],1)])},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"a-skew-button"},[n("span",[t._t("default")],2)])},nt=[],rt={},at=rt,ct=(n("9c8b"),Object(O["a"])(at,et,nt,!1,null,null,null)),st=ct.exports,ot={components:{SkewButton:st},methods:Object(o["a"])({},Object(f["d"])(["reset","resetData"]))},it=ot,ut=(n("a8eb"),Object(O["a"])(it,Z,tt,!1,null,null,null)),lt=ut.exports,ft={components:{cardGrid:q,scoreBoard:W,controls:lt},data:function(){return{interval:null}},mounted:function(){this.startTime()},methods:Object(o["a"])({},Object(f["d"])(["startTime"]))},dt=ft,mt=(n("e24c"),Object(O["a"])(dt,M,I,!1,null,null,null)),pt=mt.exports,vt={mixins:[d],components:(r={},Object(l["a"])(r,m.START,$),Object(l["a"])(r,m.GAME,pt),r),computed:Object(o["a"])({},Object(f["c"])(["page","time"])),watch:{time:function(t,e){e||alert("You lost")}}},gt=vt,bt=(n("efe7"),Object(O["a"])(gt,i,u,!1,null,null,null)),ht=bt.exports,_t={name:"App",components:{Game:ht},computed:Object(o["a"])({},Object(f["c"])(["node"]))},Ot=_t,jt=(n("7faf"),Object(O["a"])(Ot,c,s,!1,null,null,null)),Ct=jt.exports,yt=(n("4de4"),n("7db0"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("159b"),n("d906")),Et=(n("fb6a"),function(t){for(var e=t.slice(),n=e.length;n;n-=1){var r=Math.floor(Math.random()*n),a=e[n-1];e[n-1]=e[r],e[r]=a}return e}),xt=(n("99af"),n("13d5"),function(t){return t.reduce((function(t,e){return t.concat([e,Object(o["a"])(Object(o["a"])({},e),{},{slug:"".concat(e.slug,"-copy")})])}),[])}),wt=Et,kt=xt;a["a"].use(f["a"]);var Tt=function(t){return t[0].name===t[1].name},St=function(){return{cards:kt(yt["a"].map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{flip:!1,valid:!1,error:!1})}))),points:0,plays:0,time:60,timer:null}},At=function(){return Object(o["a"])(Object(o["a"])({},St()),{},{node:"development",page:m.START})},Pt={cards:function(t){return wt(t.cards)},node:function(t){return t.node},getCard:function(t){return function(e){return t.cards.find((function(t){return t.slug===e}))}},flippedCards:function(t){return t.cards.filter((function(t){return t.flip&&!t.valid}))},points:function(t){return t.points},plays:function(t){return t.plays},page:function(t){return t.page},time:function(t){return t.time},timer:function(t){return t.timer}},$t={flipCards:function(t,e){t.cards.forEach((function(t){var n=e.find((function(e){return e.slug===t.slug}));n&&!n.valid&&(t.flip=!t.flip)}))},validateCards:function(t,e){t.cards.forEach((function(t){var n=e.find((function(e){return e.slug===t.slug}));n&&(t.valid=!t.valid)}))},incrementPoints:function(t){t.points+=1},incrementPlays:function(t){t.plays+=1},startTime:function(t){t.timer=setInterval((function(){t.time>0?t.time-=1:clearInterval(t.timer)}),1e3)},breakTimer:function(t){clearInterval(t.timer)},changeErrorCard:function(t,e){var n=t.cards.find((function(t){return t.slug===e.slug}));n.error=!n.error},changePage:function(t,e){t.page=e},reset:function(t){clearInterval(t.timer);var e=At();Object.keys(e).forEach((function(n){t[n]=e[n]}))},resetData:function(t){clearInterval(t.timer);var e=St();Object.keys(e).forEach((function(n){t[n]=e[n]}))}},Mt={move:function(t,e){var n=t.commit,r=t.getters,a=t.dispatch,c=r.flippedCards;2===c.length||1===c.length&&c[0].slug===e.slug?a("irregularMovement",e):(n("flipCards",[e]),c=r.flippedCards,setTimeout((function(){2===c.length&&(n("incrementPlays"),Tt(c)?(n("incrementPoints"),n("validateCards",c)):n("flipCards",c))}),600))},irregularMovement:function(t,e){var n=t.commit;n("changeErrorCard",e),setTimeout((function(){n("changeErrorCard",e)}),2e3)}},It=new f["a"].Store({state:At(),getters:Pt,mutations:$t,actions:Mt}),Bt=n("9483");Object(Bt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({store:It,render:function(t){return t(Ct)}}).$mount("#app")},"56e9":function(t,e,n){},"5ce4":function(t,e,n){},"607c":function(t,e,n){},"67bc":function(t,e,n){t.exports=n.p+"img/valorant.04e02c9b.png"},7518:function(t,e,n){"use strict";var r=n("fde9"),a=n.n(r);a.a},"7faf":function(t,e,n){"use strict";var r=n("b8ff"),a=n.n(r);a.a},"97ed":function(t,e,n){},"9a0e":function(t,e,n){},"9c8b":function(t,e,n){"use strict";var r=n("56e9"),a=n.n(r);a.a},a8eb:function(t,e,n){"use strict";var r=n("ee89"),a=n.n(r);a.a},a9ad:function(t,e,n){"use strict";var r=n("607c"),a=n.n(r);a.a},b8ff:function(t,e,n){},c191:function(t,e,n){},d45a:function(t,e,n){"use strict";var r=n("d99d"),a=n.n(r);a.a},d906:function(t){t.exports=JSON.parse('{"a":[{"name":"CSS3","slug":"css3"},{"name":"HTML5","slug":"html5"},{"name":"PHP","slug":"php"},{"name":"VUE","slug":"vue"},{"name":"REACT","slug":"react"},{"name":"ANGULAR","slug":"angular"},{"name":"NUXT","slug":"nuxt"},{"name":"LARAVEL","slug":"laravel"},{"name":"FIREBASE","slug":"firebase"}]}')},d99d:function(t,e,n){},e24c:function(t,e,n){"use strict";var r=n("c191"),a=n.n(r);a.a},e691:function(t,e,n){t.exports=n.p+"img/memocard-white.5f98ff2f.svg"},ee89:function(t,e,n){},efe7:function(t,e,n){"use strict";var r=n("486b"),a=n.n(r);a.a},f76b:function(t,e,n){"use strict";var r=n("5ce4"),a=n.n(r);a.a},fde9:function(t,e,n){}});
//# sourceMappingURL=app.a41deb9d.js.map