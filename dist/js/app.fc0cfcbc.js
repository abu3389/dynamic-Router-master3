(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cfb1f":"fdc8c367","chunk-2d226cfb":"59e74fef","chunk-360cb930":"4bf1c652","chunk-53d57b14":"d8f73d93","chunk-9c0e1cc8":"919ead59","chunk-a7e6be30":"d5b1ac59","chunk-f3294738":"c2586d66"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-360cb930":1,"chunk-53d57b14":1,"chunk-9c0e1cc8":1,"chunk-a7e6be30":1,"chunk-f3294738":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0cfb1f":"31d6cfe0","chunk-2d226cfb":"31d6cfe0","chunk-360cb930":"85795038","chunk-53d57b14":"30210c18","chunk-9c0e1cc8":"9480f085","chunk-a7e6be30":"38ca7e77","chunk-f3294738":"ce05c6b7"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dynamic-Router-master3/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},16541:function(e,t,n){},"37c7":function(e,t,n){},"3b89":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-header",{attrs:{id:"header"}},[n("span",{staticClass:"hideAside"},[n("i",{class:[e.getsidebar.opened?"el-icon-s-unfold":"el-icon-s-fold","icon"],on:{click:e.toggleSideBar}})]),n("ul",{staticClass:"personal"},[n("full-screen"),n("li",[e._v(e._s(e.$store.getters.rolename))]),n("li",[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[e._v("\n            "+e._s(e.$store.getters.username)+"\n            "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[e._v("Home")])],1),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1),n("li",{staticClass:"icon"},[n("img",{staticClass:"user-avatar",attrs:{src:e.getavatar+"?imageView2/1/w/40/h/40"}})])],1)]),n("tabNav")],1)},a=[],o=n("cebc"),c=(n("96cf"),n("3b8d")),i=n("2f62");n("55dd");function u(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n}var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tabnavBox"},[n("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.$store.getters.tabnavBox,function(t,r){return n("li",{key:t.title,staticClass:"tabnav",class:{active:e.$route.path===t.path},on:{contextmenu:function(n){return n.preventDefault(),e.openMenu(t,n,r)}}},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))]),0!==r?n("i",{staticClass:"el-icon-error",on:{click:function(n){return e.removeTab(t)}}}):e._e()],1)}),0)],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:this.rightMenuShow,expression:"this.rightMenuShow"}],staticClass:"menuBox",style:{left:this.left+"px",top:this.top+"px"}},[n("li",{on:{click:function(t){return e.removeTab(e.$store.getters.rightNav)}}},[n("i",{staticClass:"fa fa-remove"}),e._v("\n      关闭\n    ")]),n("li",{on:{click:function(t){return e.removeOtherTab(e.$store.getters.rightNav)}}},[e._v("关闭其他")]),n("li",{on:{click:e.removeAllTab}},[e._v("全部关闭")])])])},l=[],d={name:"tabNav",data:function(){return{rightMenuShow:!1,left:0,top:0}},methods:{openMenu:function(e,t,n){if(0===n)return!1;this.rightMenuShow=!0;var r=document.querySelectorAll("div[class='sidebar-container']")[0].clientWidth;this.left=t.clientX-r+10,this.top=t.clientY,this.$store.dispatch("openMenu",e)},removeTab:function(e){this.$store.dispatch("removeTab",{tabItem:e,fullPath:this.$route.fullPath,router:this.$router})},removeOtherTab:function(e){this.$store.dispatch("removeOtherTab",{tabItem:e,router:this.$router})},removeAllTab:function(){this.$store.dispatch("removeOtherTab",{all:!0,router:this.$router})}},watch:{rightMenuShow:function(e){var t=this;e?document.body.addEventListener("click",function(){t.rightMenuShow=!1}):document.body.removeEventListener("click",function(){t.rightMenuShow=!1})}}},f=d,m=(n("6ec6"),n("8544"),n("0c7c")),h=Object(m["a"])(f,s,l,!1,null,null,null),p=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("li",{directives:[{name:"show",rawName:"v-show",value:e.isFullscreenData,expression:"isFullscreenData"}],staticClass:"fullScreen",on:{click:e.fullClick}},[n("el-tooltip",{attrs:{effect:"dark",content:e.isfullScreen?"退出全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"fa fa-arrows-alt fa-lg"})])],1)])},v=[],g={name:"fullScreen",data:function(){return{isfullScreen:!1,isFullscreenData:!0,prefixName:""}},mounted:function(){this.isFullscreen()},methods:{fullClick:function(){this.isfullScreen?this.exitFullscreen():this.fullScreen()},fullScreen:function(){var e=document.documentElement,t=""===this.prefixName?"requestFullscreen":"".concat(this.prefixName,"RequestFullScreen");e[t]()},exitFullscreen:function(){var e=""===this.prefixName?"exitFullscreen":"".concat(this.prefixName,"ExitFullscreen");document[e]()},screenChange:function(){var e=this;if(this.isFullscreenData){var t="on".concat(this.prefixName,"fullscreenchange");document[t]=function(t){e.isElementFullScreen()?(console.log("进入全屏"),e.isfullScreen=!0):(console.log("离开全屏"),e.isfullScreen=!1)}}},isFullscreen:function(){var e;document.fullscreenEnabled?e=document.fullscreenEnabled:document.webkitFullscreenEnabled?(e=document.webkitFullscreenEnabled,this.prefixName="webkit"):document.mozFullScreenEnabled?(e=document.mozFullScreenEnabled,this.prefixName="moz"):document.msFullscreenEnabled&&(e=document.msFullscreenEnabled,this.prefixName="ms"),e?this.screenChange():this.isFullscreenData=!1},isElementFullScreen:function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;return null!==e}}},k=g,x=(n("f7f0"),Object(m["a"])(k,b,v,!1,null,null,null)),w=x.exports,S={components:{tabNav:p,fullScreen:w},data:function(){return{}},mounted:function(){u()||this.toggleSideBar()},methods:{toggleSideBar:function(){this.$store.dispatch("ToggleSideBar")},logout:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LogOut");case 2:this.$router.push("/login");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fullscreenChange:function(){}},computed:Object(o["a"])({},Object(i["b"])(["getsidebar","getavatar"]))},E=S,O=(n("5ea5"),Object(m["a"])(E,r,a,!1,null,null,null));t["default"]=O.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("5c0b"),n("0c7c")),i={},u=Object(c["a"])(i,a,o,!1,null,null,null),s=u.exports,l=n("8c4f"),d=n("93f9");r["default"].use(l["a"]);var f=[{path:"/",name:"default",redirect:"/home/index",component:d["default"]},{path:"/login",name:"login",component:function(){return n.e("chunk-9c0e1cc8").then(n.bind(null,"9ed6"))}}],m=[{path:"/adminMenu",name:"adminMenu",hidden:!1,component:d["default"],meta:{title:"本地菜单测试",icon:"el-icon-menu"},children:[{path:"menu1",name:"menu1",hidden:!1,meta:{title:"本地菜单测试1",icon:"el-icon-menu",role:["0","1"]},component:function(){return n.e("chunk-2d0cfb1f").then(n.bind(null,"658b"))}},{path:"menu2",name:"menu2",hidden:!1,meta:{title:"本地菜单测试2",icon:"el-icon-menu",role:["0"]},component:function(){return n.e("chunk-2d226cfb").then(n.bind(null,"e9f7"))}}]},{path:"/adminPage",name:"adminPage",component:d["default"],children:[{path:"page1",name:"page1",component:function(){return n.e("chunk-2d0cfb1f").then(n.bind(null,"658b"))}},{path:"page2",name:"page2",component:function(){return n.e("chunk-2d226cfb").then(n.bind(null,"e9f7"))}}]}],h=[{path:"/*",name:"error-404",meta:{title:"404-页面不存在"},component:function(){return n.e("chunk-53d57b14").then(n.bind(null,"1db4"))}},{path:"403",name:"error-403",meta:{title:"403-权限不足"},component:function(){return n.e("chunk-360cb930").then(n.bind(null,"5140"))}},{path:"500",name:"error-500",meta:{title:"500-服务端错误"},component:function(){return n.e("chunk-f3294738").then(n.bind(null,"721c"))}}],p=function(){return new l["a"]({scrollBehavior:function(){return{y:0}},routes:[].concat(f)})},b=p();function v(){var e=p();b.matcher=e.matcher}var g=b,k=n("2f62"),x=n("795b"),w=n.n(x),S=n("d225"),E=n("b0b4"),O=n("bc3a"),T=n.n(O),_=n("5c96"),y=n.n(_),R={ajax:function(){var e=T.a.create({baseURL:"/api",timeout:18e5});return j(e),e},ajaxtest:function(){var e=T.a.create({baseURL:"http://rap2api.taobao.org/",timeout:18e5});return j(e),e},ajaxmock:function(){var e=T.a.create({timeout:18e5});return j(e),e}},j=function(e){B(e),A(e)},B=function(e){e.interceptors.request.use(function(e){return console.log("添加请求拦截器",e),e},function(e){return w.a.reject(e)})},A=function(e){e.interceptors.response.use(function(e){var t=e.data;return console.log("添加响应拦截器",e),200!==t.state&&(Object(_["Message"])({type:"error",message:t.message,duration:3e3}),301===t.state&&store.dispatch("LogOut")),t},function(e){return Object(_["Message"])({type:"error",message:"服务器请求无响应！请联系后端处理。错误信息："+e,duration:3e3}),w.a.reject(e)})},N=R,M=N.ajaxmock(),C=function(){function e(){Object(S["a"])(this,e)}return Object(E["a"])(e,[{key:"login",value:function(e,t){return new w.a(function(n,r){return M.post("/user/login",{username:e,password:t}).then(function(e){n(e)}).catch(function(e){r(e)})})}},{key:"getInfo",value:function(e){return new w.a(function(t,n){return M({url:"/user/getInfo",method:"get",params:{token:e}}).then(function(e){t(e)}).catch(function(e){n(e)})})}},{key:"logout",value:function(e){return new w.a(function(e,t){return M({url:"/user/logout",method:"post"}).then(function(t){e(t)}).catch(function(e){t(e)})})}}]),e}(),I=new C,P="myvue-admin-app",F={APP_NAME:P},$=F.APP_NAME,L=$+"userName",D={state:{token:localStorage.getItem($),rolename:"",username:localStorage.getItem(L),avatar:"",roles:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_ROLENAME:function(e,t){e.rolename=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t},SET_USERNAME:function(e,t){e.username=t}},getters:{gettoken:function(e){return e.token},getroles:function(e){return e.roles},getavatar:function(e){return e.avatar},rolename:function(e){return e.rolename},username:function(e){return e.username}},actions:{Login:function(e,t){var n=e.commit,r=t.username.trim();return new w.a(function(e,a){I.login(r,t.password).then(function(t){console.log("response",t),200===t.state?(localStorage.setItem(L,r),localStorage.setItem($,t.result),n("SET_USERNAME",r),n("SET_TOKEN",t.result),e(t)):a(t)})})},GetInfo:function(e){var t=e.commit,n=e.state;return new w.a(function(e,r){I.getInfo(n.token).then(function(n){if(n){var a=n.result;t("SET_ROLES",a.roles),t("SET_ROLENAME",a.rolename),t("SET_AVATAR",a.avatar),e(n)}else r(n)})})},LogOut:function(e){var t=e.commit,n=e.state;return new w.a(function(e,r){I.logout(n.token).then(function(){t("SET_TOKEN",""),t("SET_USERNAME",""),t("SET_ROLES",""),t("SET_USERNAME",""),t("removeAllTab"),t("CLEAR_ADDROUTERS",[]),localStorage.removeItem($),localStorage.removeItem(L),v(),e()}).catch(function(e){r(e)})})},resetToken:function(e){var t=e.commit;return new w.a(function(e){t("SET_TOKEN",""),t("SET_ROLES",""),localStorage.removeItem($),e()})}}},G=D,U=(n("6762"),n("2fdb"),n("a745")),H=n.n(U),q=(n("ac6a"),n("75fc")),J=n("cebc"),W=N.ajaxtest();function z(e){return W({url:"/app/mock/236973/test/getMenuList.jhtml",method:"get",params:e})}var K={state:{routers:Object(J["a"])({},f),addRouters:[]},getters:{getaddRouters:function(e){return e.addRouters},getrouters:function(e){return e.routers}},mutations:{SET_ROUTERS:function(e,t){var n=t.accessedRouters,r=t.role,a=V(f,r),o=V(m,r),c=V(h,r);e.addRouters=[].concat(Object(q["a"])(n),Object(q["a"])(o),Object(q["a"])(c)),e.routers=[].concat(Object(q["a"])(a),Object(q["a"])(e.addRouters))},CLEAR_ADDROUTERS:function(e){e.addRouters=[]}},actions:{GenerateRoutes:function(e,t){var n=e.state,r=e.commit;return new w.a(function(e){var a=t.role,o={token:"123456",id:"asdishdhaksdh"};z(o).then(function(t){var o=Y(t.data),c=V(o,a);r("SET_ROUTERS",{accessedRouters:c,role:a});var i=n.addRouters;console.log("过滤后的动态路由，注入",i),g.addRoutes(i),console.log("所有生效的路由：",g.options.routes),e()})})}}};function V(e,t){var n=[];return e.forEach(function(e){var r=e;X(t,r)&&(r.hasOwnProperty("hidden")?r.hidden&&H()(r.hidden)&&(r.hidden=!!r.hidden.includes(t)):r.hidden=!0,r.hasOwnProperty("alone")||(r.alone=!1),r.hasOwnProperty("meta")||(r.meta={}),n.push(r),r.hasOwnProperty("children")&&r.children.length>0&&(r.children=V(r.children,t)))}),n}function X(e,t){return!(t.meta&&t.meta.role&&t.meta.role.length>0)||t.meta.role.includes(e)}function Y(e){return e.forEach(function(e,t){e.component=Q(e.component),e.children&&e.children.length>0?Y(e.children):delete e.children}),e}function Q(e){return function(t){n.e("chunk-a7e6be30").then(function(r){t(n("feca")("./"+e+".vue"))}.bind(null,n)).catch(n.oe)}}var Z=K,ee=n("f499"),te=n.n(ee),ne=(n("20d6"),{state:{sidebar:{opened:!0,withoutAnimation:!1},rightNav:{},tabnavBox:[{title:"主页",path:"/home/index"}]},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1},openMenu:function(e,t){e.rightNav=t},addTab:function(e,t){for(var n=0;n<e.tabnavBox.length;n++)if(e.tabnavBox[n].path===t.path)return!1;e.tabnavBox.push({title:t.title,path:t.path}),this.commit("setLocalStorage",e.tabnavBox)},removeTab:function(e,t){var n=e.tabnavBox.findIndex(function(e,n){return e.path===t.tabItem.path});if(e.tabnavBox.splice(n,1),this.commit("setLocalStorage",e.tabnavBox),t.tabItem.path===t.fullPath){var r=e.tabnavBox[n]||e.tabnavBox[n-1];t.router.push(r.path)}},removeOtherTab:function(e,t){if(e.tabnavBox=[{title:"主页",path:"/home/index"}],t.all)return t.router.push("/home/index"),this.commit("setLocalStorage",e.tabnavBox),!1;e.tabnavBox.push(t.tabItem),this.commit("setLocalStorage",e.tabnavBox),t.router.push(t.tabItem.path)},removeAllTab:function(e,t){this.commit("removeOtherTab",{all:!0,router:g})},setLocalStorage:function(e,t){window.localStorage.setItem("tabnavBox",te()(t))}},getters:{getsidebar:function(e){return e.sidebar},rightNav:function(e){return e.rightNav},tabnavBox:function(e){return window.localStorage.getItem("tabnavBox")&&(e.tabnavBox=JSON.parse(window.localStorage.getItem("tabnavBox"))),e.tabnavBox}},actions:{ToggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")},addTab:function(e,t){var n=e.commit;n("addTab",t)},openMenu:function(e,t){var n=e.commit;n("openMenu",t)},removeTab:function(e,t){var n=e.commit;n("removeTab",t)},removeOtherTab:function(e,t){var n=e.commit;n("removeOtherTab",t)}}}),re=ne;r["default"].use(k["a"]);var ae=new k["a"].Store({modules:{user:G,router:Z,app:re}}),oe=(n("0fae"),n("be35"),n("7f10"),n("f825")),ce=n.n(oe),ie=(n("f8ce"),n("98c9")),ue=(n("f5df"),n("b20f"),n("7f7f"),n("96cf"),n("3b8d")),se=["/login"];g.beforeEach(function(){var e=Object(ue["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("路由拦截",t.path),console.log("store.getters.gettoken",ae.getters.gettoken),!ae.getters.gettoken){e.next=24;break}if(console.log("有token"),"/login"!==t.path){e.next=9;break}console.log("有token , 将要去登录页,转到后台首页"),r({path:"/"}),e.next=22;break;case 9:if(console.log("有token , 不是去登录页,"),0!==ae.getters.getroles.length){e.next=20;break}return console.log("没有用户角色信息，动态路由未注入过，拉取用户信息，添加动态路由后再跳转访问的路由"),e.next=14,ae.dispatch("GetInfo");case 14:return a=ae.getters.getroles,e.next=17,ae.dispatch("GenerateRoutes",{role:a});case 17:r(Object(J["a"])({},t,{replace:!0})),e.next=22;break;case 20:console.log("有用户角色信息，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过"),r();case 22:e.next=26;break;case 24:console.log("无token"),-1!==se.indexOf(t.path)?(console.log("在免登录白名单，直接进入"),r()):(console.log("不在免登录白名单，跳转登录页"),r("/login"));case 26:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].directive("permission",{bind:function(e,t){var n=t.value,a=ae.getters.getroles;console.log("router.currentRoute",g.currentRoute);var o=g.currentRoute.meta.hasOwnProperty("btnGroup")?g.currentRoute.meta.btnGroup:[],c=!1,i={};console.log("btnGroup",o),o.forEach(function(e,t){e.name===n&&e.allow&&-1!==e.allow.indexOf(a)&&(c=!0,i=e)}),console.log("nowBtnInfo",i),r["default"].nextTick(function(){if(c){if(i.insert){e.lastChild.innerText=i.content;var t=document.createElement("i");t.className=i.icon,e.insertBefore(t,e.lastChild)}return!0}return e.parentNode.removeChild(e),!1})}});var le=n("96eb"),de=n.n(le);n("a481"),n("28a5");function fe(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}var me={admin:{pas:"admin",token:"admin-token"},editor:{pas:"editor",token:"editor-token"},reader:{pas:"reader",token:"reader-token"}},he={"admin-token":{roles:"0",introduction:"I am a super administrator",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"超级管理员"},"editor-token":{roles:"1",introduction:"I am an editor",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"工作人员"},"reader-token":{roles:"2",introduction:"I am an reader",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"普通用户"}},pe={login:function(e){var t=JSON.parse(e.body),n=t.username,r=t.password;if(n in me&&me[n].pas===r){var a=me[n].token;return{state:200,result:a}}return{state:100,message:"账户或密码错误."}},getInfo:function(e){var t=fe(e.url),n=t.token,r=he[n];return r?{state:200,result:r}:{state:100,message:"登陆失败，无法获取用户信息"}},logout:function(){return{state:200,data:"success"}}};de.a.mock("/user/login","post",pe.login),de.a.mock(/\/user\/getInfo\.*/,"get",pe.getInfo),de.a.mock("/user/logout","post",pe.logout);de.a;r["default"].use(y.a),r["default"].use(ce.a),r["default"].use(ie["a"]),r["default"].config.productionTip=!1,new r["default"]({router:g,store:ae,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("37c7"),a=n.n(r);a.a},"5ea5":function(e,t,n){"use strict";var r=n("7db1"),a=n.n(r);a.a},6331:function(e,t,n){"use strict";var r=n("e3bb"),a=n.n(r);a.a},"6ec6":function(e,t,n){"use strict";var r=n("f244"),a=n.n(r);a.a},7159:function(e,t,n){},"7db1":function(e,t,n){},"84c8":function(e,t,n){"use strict";var r=n("b8d7"),a=n.n(r);a.a},8544:function(e,t,n){"use strict";var r=n("7159"),a=n.n(r);a.a},"85db":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{"default-active":e.$route.path,"background-color":e.variables.menuBg,"text-color":e.variables.menuText,"active-text-color":e.variables.menuActiveText,mode:"vertical",router:"",collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1}},[n("sidebar-item",{attrs:{menu:e.getrouters}})],1)],1)},a=[],o=n("cebc"),c=n("2f62"),i=n("f167"),u=n("cf1e"),s=n.n(u),l={components:{SidebarItem:i["default"]},computed:Object(o["a"])({},Object(c["b"])(["getrouters","getsidebar"]),{isCollapse:function(){return!this.getsidebar.opened},variables:function(){return s.a}}),watch:{$route:function(e){this.selectmenu(e)}},methods:{selectmenu:function(e){this.$store.dispatch("addTab",{title:e.meta&&e.meta.title?e.meta.title:"未设置标题",path:e.path})}}},d=l,f=n("0c7c"),m=Object(f["a"])(d,r,a,!1,null,null,null);t["default"]=m.exports},"93f9":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:e.classObj},[n("sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("my-header"),n("router-view",{staticClass:"viewStyle"})],1)],1)},a=[],o=n("cebc"),c=n("85db"),i=n("3b89"),u=n("2f62"),s={components:{sidebar:c["default"],MyHeader:i["default"]},computed:Object(o["a"])({},Object(u["b"])(["getsidebar"]),{classObj:function(){return{hideSidebar:!this.getsidebar.opened,openSidebar:this.getsidebar.opened}}}),methods:{}},l=s,d=(n("84c8"),n("0c7c")),f=Object(d["a"])(l,r,a,!1,null,null,null);t["default"]=f.exports},b20f:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},b8d7:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},be35:function(e,t,n){},cf1e:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},e3bb:function(e,t,n){},f167:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.menu,function(t,r){return[t.children||t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("i",{class:t.meta.hasOwnProperty("icon")?t.meta.icon:""}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(t.meta.hasOwnProperty("title")?t.meta.title:t.path+"未设置菜单名称")+"\n      ")])]),t.children&&1===t.children.length&&!t.hidden&&t.alone?n("el-menu-item",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path+"/"+t.children[0].path:t.path+"/"+t.children[0].path}},[n("i",{class:t.children[0].meta.hasOwnProperty("icon")?t.children[0].meta.icon:""}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(t.children[0].meta.hasOwnProperty("title")?t.children[0].meta.title:t.children[0].path+"未设置菜单名称")+"\n      ")])]):e._e(),t.children&&!t.hidden&&(t.children.length>1||1===t.children.length&&!t.alone&&"undefined"!==typeof t.children[0])?n("el-submenu",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("template",{slot:"title"},[n("i",{class:t.meta.hasOwnProperty("icon")?t.meta.icon:""}),n("span",[e._v("\n          "+e._s(t.meta.hasOwnProperty("title")?t.meta.title:t.path+"未设置菜单名称")+"\n        ")])]),n("sidebar-item",{attrs:{menu:t.children,parent:e.parent?e.parent+"/"+t.path:t.path}})],2):e._e()]})],2)},a=[],o={name:"SidebarItem",props:["menu","parent"],data:function(){return{}}},c=o,i=(n("6331"),n("0c7c")),u=Object(i["a"])(c,r,a,!1,null,"1850b066",null);t["default"]=u.exports},f244:function(e,t,n){},f7f0:function(e,t,n){"use strict";var r=n("16541"),a=n.n(r);a.a}});