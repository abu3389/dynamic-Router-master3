(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-360cb930":"4bf1c652","chunk-53d57b14":"d8f73d93","chunk-9c0e1cc8":"663e86a8","chunk-aa401ad6":"add4270f","chunk-f3294738":"c2586d66"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-360cb930":1,"chunk-53d57b14":1,"chunk-9c0e1cc8":1,"chunk-aa401ad6":1,"chunk-f3294738":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-360cb930":"85795038","chunk-53d57b14":"30210c18","chunk-9c0e1cc8":"d15d3057","chunk-aa401ad6":"2ed8a726","chunk-f3294738":"ce05c6b7"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dynamic-Router-master3/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1654:function(e,t,n){},"37c7":function(e,t,n){},"3b89":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-header",{attrs:{id:"header"}},[n("span",{staticClass:"hideAside"},[n("i",{class:[e.getsidebar.opened?"el-icon-s-unfold":"el-icon-s-fold","icon"],on:{click:e.toggleSideBar}})]),n("ul",{staticClass:"personal"},[n("full-screen"),n("li",[e._v(e._s(e.$store.getters.rolename))]),n("li",[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[e._v("\n            "+e._s(e.$store.getters.username)+"\n            "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[e._v("Home")])],1),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1),n("li",{staticClass:"icon"},[n("img",{staticClass:"user-avatar",attrs:{src:e.getavatar+"?imageView2/1/w/40/h/40"}})])],1)]),n("tabNav")],1)},a=[],o=n("cebc"),i=(n("96cf"),n("3b8d")),c=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tabnavBox"},[n("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.$store.getters.tabnavBox,function(t,r){return n("li",{key:t.title,staticClass:"tabnav",class:{active:e.$route.path===t.path},on:{contextmenu:function(n){return n.preventDefault(),e.openMenu(t,n,r)}}},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))]),0!==r?n("i",{staticClass:"el-icon-error",on:{click:function(n){return e.removeTab(t)}}}):e._e()],1)}),0)],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:this.rightMenuShow,expression:"this.rightMenuShow"}],staticClass:"menuBox",style:{left:this.left+"px",top:this.top+"px"}},[n("li",{on:{click:function(t){return e.removeTab(e.$store.getters.rightNav)}}},[n("i",{staticClass:"fa fa-remove"}),e._v("\n      关闭\n    ")]),n("li",{on:{click:function(t){return e.removeOtherTab(e.$store.getters.rightNav)}}},[e._v("关闭其他")]),n("li",{on:{click:e.removeAllTab}},[e._v("全部关闭")])])])},s=[],l={name:"tabNav",data:function(){return{rightMenuShow:!1,left:0,top:0}},methods:{openMenu:function(e,t,n){if(0===n)return!1;this.rightMenuShow=!0;var r=document.querySelectorAll("div[class='sidebar-container']")[0].clientWidth;this.left=t.clientX-r+10,this.top=t.clientY,this.$store.dispatch("openMenu",e)},removeTab:function(e){this.$store.dispatch("removeTab",{tabItem:e,fullPath:this.$route.fullPath,router:this.$router})},removeOtherTab:function(e){this.$store.dispatch("removeOtherTab",{tabItem:e,router:this.$router})},removeAllTab:function(){this.$store.dispatch("removeOtherTab",{all:!0,router:this.$router})}},watch:{rightMenuShow:function(e){var t=this;e?document.body.addEventListener("click",function(){t.rightMenuShow=!1}):document.body.removeEventListener("click",function(){t.rightMenuShow=!1})}}},f=l,d=(n("6ec6"),n("8544"),n("0c7c")),m=Object(d["a"])(f,u,s,!1,null,null,null),h=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("li",{directives:[{name:"show",rawName:"v-show",value:e.isFullscreenData,expression:"isFullscreenData"}],staticClass:"fullScreen",on:{click:e.fullClick}},[n("el-tooltip",{attrs:{effect:"dark",content:e.isfullScreen?"退出全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"fa fa-arrows-alt fa-lg"})])],1)])},v=[],b={name:"fullScreen",data:function(){return{isfullScreen:!1,isFullscreenData:!0,prefixName:""}},mounted:function(){this.isFullscreen()},methods:{fullClick:function(){this.isfullScreen?this.exitFullscreen():this.fullScreen()},fullScreen:function(){var e=document.documentElement,t=""===this.prefixName?"requestFullscreen":"".concat(this.prefixName,"RequestFullScreen");e[t]()},exitFullscreen:function(){var e=""===this.prefixName?"exitFullscreen":"".concat(this.prefixName,"ExitFullscreen");document[e]()},screenChange:function(){var e=this;if(this.isFullscreenData){var t="on".concat(this.prefixName,"fullscreenchange");document[t]=function(t){e.isElementFullScreen()?(console.log("进入全屏"),e.isfullScreen=!0):(console.log("离开全屏"),e.isfullScreen=!1)}}},isFullscreen:function(){var e;document.fullscreenEnabled?e=document.fullscreenEnabled:document.webkitFullscreenEnabled?(e=document.webkitFullscreenEnabled,this.prefixName="webkit"):document.mozFullScreenEnabled?(e=document.mozFullScreenEnabled,this.prefixName="moz"):document.msFullscreenEnabled&&(e=document.msFullscreenEnabled,this.prefixName="ms"),e?this.screenChange():this.isFullscreenData=!1},isElementFullScreen:function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;return null!==e}}},g=b,w=(n("f7f0"),Object(d["a"])(g,p,v,!1,null,null,null)),k=w.exports,x={components:{tabNav:h,fullScreen:k},data:function(){return{}},methods:{toggleSideBar:function(){this.$store.dispatch("ToggleSideBar")},logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LogOut");case 2:this.$router.push("/login");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fullscreenChange:function(){}},computed:Object(o["a"])({},Object(c["b"])(["getsidebar","getavatar"]))},E=x,S=(n("5ea5"),Object(d["a"])(E,r,a,!1,null,null,null));t["default"]=S.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("0c7c")),c={},u=Object(i["a"])(c,a,o,!1,null,null,null),s=u.exports,l=n("8c4f"),f=n("93f9");r["default"].use(l["a"]);var d=[{path:"/",name:"default",redirect:"/home",component:f["default"]},{path:"/login",name:"login",component:function(){return n.e("chunk-9c0e1cc8").then(n.bind(null,"9ed6"))}}],m=[],h=[{path:"/*",name:"error-404",hidden:!0,meta:{title:"404-页面不存在"},component:function(){return n.e("chunk-53d57b14").then(n.bind(null,"1db4"))}},{path:"/403",name:"error-403",hidden:!0,meta:{title:"403-权限不足"},component:function(){return n.e("chunk-360cb930").then(n.bind(null,"5140"))}},{path:"/500",name:"error-500",hidden:!0,meta:{title:"500-服务端错误"},component:function(){return n.e("chunk-f3294738").then(n.bind(null,"721c"))}}],p=function(){return new l["a"]({scrollBehavior:function(){return{y:0}},routes:[].concat(d,m)})},v=p();function b(){var e=p();v.matcher=e.matcher}var g=v,w=n("2f62"),k=n("795b"),x=n.n(k),E=n("d225"),S=n("b0b4"),T=n("bc3a"),O=n.n(T),_=n("5c96"),y=n.n(_),B={ajax:function(){var e=O.a.create({baseURL:"/api",timeout:18e5});return j(e),e},ajaxtest:function(){var e=O.a.create({baseURL:"http://rap2api.taobao.org/",timeout:18e5});return j(e),e},ajaxmock:function(){var e=O.a.create({timeout:18e5});return j(e),e}},j=function(e){N(e),R(e)},N=function(e){e.interceptors.request.use(function(e){return console.log("添加请求拦截器",e),e},function(e){return x.a.reject(e)})},R=function(e){e.interceptors.response.use(function(e){var t=e.data;return console.log("添加响应拦截器",e),100!==t.state&&Object(_["Message"])({type:"error",message:t.message,duration:5e3}),t},function(e){return x.a.reject(e)})},M=B,A=M.ajaxmock(),C=function(){function e(){Object(E["a"])(this,e)}return Object(S["a"])(e,[{key:"login",value:function(e,t){return new x.a(function(n,r){return A.post("/user/login",{username:e,password:t}).then(function(e){n(e)}).catch(function(e){r(e)})})}},{key:"getInfo",value:function(e){return new x.a(function(t,n){return A({url:"/user/getInfo",method:"get",params:{token:e}}).then(function(e){t(e)}).catch(function(e){n(e)})})}},{key:"logout",value:function(e){return new x.a(function(e,t){return A({url:"/user/logout",method:"post"}).then(function(t){e(t)}).catch(function(e){t(e)})})}}]),e}(),F=new C,$=n("a78e"),I=n.n($),L="my-vue-admin",P="userName",G={state:{token:I.a.get(L),rolename:"",username:I.a.get(P),avatar:"",roles:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_ROLENAME:function(e,t){e.rolename=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t},SET_USERNAME:function(e,t){e.username=t}},getters:{gettoken:function(e){return e.token},getroles:function(e){return e.roles},getavatar:function(e){return e.avatar},rolename:function(e){return e.rolename},username:function(e){return e.username}},actions:{Login:function(e,t){var n=e.commit,r=t.username.trim();return new x.a(function(e,a){F.login(r,t.password).then(function(t){t?(I.a.set(P,r),I.a.set(L,t.result),n("SET_USERNAME",r),n("SET_TOKEN",t.result),e(t)):a(t)})})},GetInfo:function(e){var t=e.commit,n=e.state;return new x.a(function(e,r){F.getInfo(n.token).then(function(n){if(n){var a=n.result;t("SET_ROLES",a.roles),t("SET_ROLENAME",a.rolename),t("SET_AVATAR",a.avatar),e(n)}else r(n)})})},LogOut:function(e){var t=e.commit,n=e.state;return new x.a(function(e,r){F.logout(n.token).then(function(){t("SET_TOKEN",""),t("SET_USERNAME",""),t("SET_ROLES",""),t("SET_USERNAME",""),t("removeAllTab"),I.a.remove(L),I.a.remove(P),b(),e()}).catch(function(e){r(e)})})},resetToken:function(e){var t=e.commit;return new x.a(function(e){t("SET_TOKEN",""),t("SET_ROLES",""),I.a.remove(L),e()})}}},H=G,U=(n("6762"),n("2fdb"),n("a745")),D=n.n(U),q=(n("ac6a"),n("cebc")),J=M.ajaxtest();function z(e){return J({url:"/app/mock/236973/test/getMenuList.jhtml",method:"get",params:e})}var K={state:{routers:Object(q["a"])({},d),addRouters:[]},getters:{getaddRouters:function(e){return e.addRouters},getrouters:function(e){return e.routers}},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t.concat(h),e.routers=d.concat(e.addRouters)}},actions:{GenerateRoutes:function(e,t){var n=e.commit;return new x.a(function(e){var r=t.roles,a={token:"123456",id:"asdishdhaksdh"};z(a).then(function(t){var a=X(t.data),o=W(a,r);n("SET_ROUTERS",o),e()})})}}};function W(e,t){var n=[];return e.forEach(function(e){var r=Object(q["a"])({},e);V(t,r)&&(r.children&&(r.children=W(r.children,t)),r.hidden&&D()(r.hidden)&&(r.hidden=!!r.hidden.includes(t)),n.push(r))}),n}function V(e,t){return!(t.meta&&t.meta.role&&t.meta.role.length>0)||t.meta.role.includes(e)}function X(e){return e.forEach(function(e,t){e.component=Y(e.component),e.children&&e.children.length>0?X(e.children):delete e.children}),e}function Y(e){return function(t){n.e("chunk-aa401ad6").then(function(r){t(n("feca")("./"+e+".vue"))}.bind(null,n)).catch(n.oe)}}var Q=K,Z=n("f499"),ee=n.n(Z),te=(n("20d6"),{state:{sidebar:{opened:!0,withoutAnimation:!1},rightNav:{},tabnavBox:[{title:"主页",path:"/home"}]},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1},openMenu:function(e,t){e.rightNav=t},addTab:function(e,t){for(var n=0;n<e.tabnavBox.length;n++)if(e.tabnavBox[n].path===t.path)return!1;e.tabnavBox.push({title:t.title,path:t.path}),this.commit("setLocalStorage",e.tabnavBox)},removeTab:function(e,t){var n=e.tabnavBox.findIndex(function(e,n){return e.path===t.tabItem.path});if(e.tabnavBox.splice(n,1),this.commit("setLocalStorage",e.tabnavBox),t.tabItem.path===t.fullPath){var r=e.tabnavBox[n]||e.tabnavBox[n-1];t.router.push(r.path)}},removeOtherTab:function(e,t){if(e.tabnavBox=[{title:"Home",path:"/home"}],t.all)return t.router.push("/home"),this.commit("setLocalStorage",e.tabnavBox),!1;e.tabnavBox.push(t.tabItem),this.commit("setLocalStorage",e.tabnavBox),t.router.push(t.tabItem.path)},removeAllTab:function(e,t){this.commit("removeOtherTab",{all:!0,router:g})},setLocalStorage:function(e,t){window.localStorage.setItem("tabnavBox",ee()(t))}},getters:{getsidebar:function(e){return e.sidebar},rightNav:function(e){return e.rightNav},tabnavBox:function(e){return window.localStorage.getItem("tabnavBox")&&(e.tabnavBox=JSON.parse(window.localStorage.getItem("tabnavBox"))),e.tabnavBox}},actions:{ToggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")},addTab:function(e,t){var n=e.commit;n("addTab",t)},openMenu:function(e,t){var n=e.commit;n("openMenu",t)},removeTab:function(e,t){var n=e.commit;n("removeTab",t)},removeOtherTab:function(e,t){var n=e.commit;n("removeOtherTab",t)}}}),ne=te;r["default"].use(w["a"]);var re=new w["a"].Store({modules:{user:H,router:Q,app:ne}}),ae=(n("0fae"),n("be35"),n("7f10"),n("f825")),oe=n.n(ae),ie=(n("f8ce"),n("f5df"),n("b20f"),n("7f7f"),["/login"]);g.beforeEach(function(e,t,n){console.log("路由拦截",e.path),console.log("store.getters.gettoken",re.getters.gettoken),re.getters.gettoken?(console.log("有token"),"/login"===e.path?(console.log("有token , 将要去登录页,转到后台首页"),n({path:"/"})):(console.log("有token , 不是去登录页,"),0===re.getters.getroles.length?(console.log("没有用户角色信息，动态路由未注入过，拉取用户信息，添加动态路由后再跳转访问的路由"),re.dispatch("GetInfo").then(function(t){var r=t.result.roles;re.dispatch("GenerateRoutes",{roles:r}).then(function(){var t=re.getters.getaddRouters;console.log("过滤后的动态路由，注入",t),g.addRoutes(t),n(Object(q["a"])({},e,{replace:!0}))})}).catch(function(e){console.log(e)})):(console.log("有用户角色信息，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过"),n()))):(console.log("无token"),-1!==ie.indexOf(e.path)?(console.log("在免登录白名单，直接进入"),n()):(console.log("不在免登录白名单，跳转登录页"),n("/login")))}),r["default"].directive("permission",{bind:function(e,t){var n=t.value,a=re.getters.getroles,o=g.currentRoute.meta.hasOwnProperty("btnGroup")?g.currentRoute.meta.btnGroup:[],i=!1,c={};o.forEach(function(e,t){e.name===n&&e.allow&&-1!==e.allow.indexOf(a)&&(i=!0,c=e)}),r["default"].nextTick(function(){return i?e.lastChild.innerText=c.content:e.parentNode.removeChild(e)})}});var ce=n("96eb"),ue=n.n(ce);n("a481"),n("28a5");function se(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}var le={admin:{pas:"admin",token:"admin-token"},editor:{pas:"editor",token:"editor-token"},reader:{pas:"reader",token:"reader-token"}},fe={"admin-token":{roles:"0",introduction:"I am a super administrator",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"超级管理员"},"editor-token":{roles:"1",introduction:"I am an editor",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"工作人员"},"reader-token":{roles:"2",introduction:"I am an reader",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"普通用户"}},de={login:function(e){var t=JSON.parse(e.body),n=t.username,r=t.password;if(n in le&&le[n].pas==r){var a=le[n].token;return{state:100,result:a}}return{state:90001,message:"账户或密码错误."}},getInfo:function(e){var t=se(e.url),n=t.token,r=fe[n];return r?{state:100,result:r}:{state:50008,message:"登陆失败，无法获取用户信息"}},logout:function(){return{state:100,data:"success"}}};ue.a.mock("/user/login","post",de.login),ue.a.mock(/\/user\/getInfo\.*/,"get",de.getInfo),ue.a.mock("/user/logout","post",de.logout);ue.a;r["default"].use(y.a),r["default"].use(oe.a),r["default"].config.productionTip=!1,new r["default"]({router:g,store:re,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("37c7"),a=n.n(r);a.a},"5ea5":function(e,t,n){"use strict";var r=n("7db1"),a=n.n(r);a.a},"6ec6":function(e,t,n){"use strict";var r=n("f244"),a=n.n(r);a.a},7159:function(e,t,n){},"79d2":function(e,t,n){},"79f7":function(e,t,n){"use strict";var r=n("79d2"),a=n.n(r);a.a},"7db1":function(e,t,n){},"84c8":function(e,t,n){"use strict";var r=n("b8d7"),a=n.n(r);a.a},8544:function(e,t,n){"use strict";var r=n("7159"),a=n.n(r);a.a},"85db":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{"default-active":e.$route.path,"background-color":e.variables.menuBg,"text-color":e.variables.menuText,"active-text-color":e.variables.menuActiveText,mode:"vertical",router:"",collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1}},[n("sidebar-item",{attrs:{menu:e.getrouters}})],1)],1)},a=[],o=(n("7f7f"),n("cebc")),i=n("2f62"),c=n("f167"),u=n("cf1e"),s=n.n(u),l={components:{SidebarItem:c["default"]},computed:Object(o["a"])({},Object(i["b"])(["getrouters","getsidebar"]),{isCollapse:function(){return!this.getsidebar.opened},variables:function(){return s.a}}),watch:{$route:function(e){this.selectmenu(e)}},methods:{selectmenu:function(e){this.$store.dispatch("addTab",{title:e.name,path:e.path})}}},f=l,d=n("0c7c"),m=Object(d["a"])(f,r,a,!1,null,null,null);t["default"]=m.exports},"93f9":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:e.classObj},[n("sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("my-header"),n("router-view")],1)],1)},a=[],o=n("cebc"),i=n("85db"),c=n("3b89"),u=n("2f62"),s={components:{sidebar:i["default"],MyHeader:c["default"]},computed:Object(o["a"])({},Object(u["b"])(["getsidebar"]),{classObj:function(){return{hideSidebar:!this.getsidebar.opened,openSidebar:this.getsidebar.opened}}}),methods:{}},l=s,f=(n("84c8"),n("0c7c")),d=Object(f["a"])(l,r,a,!1,null,null,null);t["default"]=d.exports},b20f:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},b8d7:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},be35:function(e,t,n){},cf1e:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},f167:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.menu,function(t){return[t.children||!t.hasOwnProperty("hidden")||t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("i",{class:t.hasOwnProperty("meta")&&t.meta.hasOwnProperty("icon")?t.meta.icon:""}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(t.hasOwnProperty("meta")&&t.meta.hasOwnProperty("title")?t.meta.title:t.path+"未设置菜单名称")+"\n      ")])]),t.children&&t.hasOwnProperty("hidden")&&!t.hidden?n("el-submenu",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("template",{slot:"title"},[n("i",{class:t.hasOwnProperty("meta")&&t.meta.hasOwnProperty("icon")?t.meta.icon:""}),n("span",[e._v("\n          "+e._s(t.hasOwnProperty("meta")&&t.meta.hasOwnProperty("title")?t.meta.title:t.path+"未设置菜单名称")+"\n        ")])]),n("sidebar-item",{attrs:{menu:t.children,parent:e.parent?e.parent+"/"+t.path:t.path}})],2):e._e()]})],2)},a=[],o=(n("cadf"),n("551c"),n("f751"),n("097d"),{name:"SidebarItem",props:["menu","parent"],data:function(){return{}}}),i=o,c=(n("79f7"),n("0c7c")),u=Object(c["a"])(i,r,a,!1,null,"3fbb0706",null);t["default"]=u.exports},f244:function(e,t,n){},f7f0:function(e,t,n){"use strict";var r=n("1654"),a=n.n(r);a.a}});