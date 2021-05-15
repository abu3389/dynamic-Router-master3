/*
 * @Author: zhanghan
 * @Date: 2020-08-26 11:29:40
 * @LastEditors: zhanghan
 * @LastEditTime: 2021-05-16 01:41:51
 * @Descripttion: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
//配置elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//图标库
import "./assets/iconfont/iconfont.css";
import "font-awesome/css/font-awesome.css";

//配置iViewui
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

//配置粒子动画特效
import VueParticles from "vue-particles";

//全局样式
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/styles/index.scss"; // global css

Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(VueParticles);

Vue.config.productionTip = false;

import "./permission"; //路由守卫即页面权限和按钮权限
import "../mock"; //mock.js
// import API from "@/api/api"; //请求服务的所有api代码
// Vue.prototype.$api = API; //其中$xx为新命的名。全局引入

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
