import Vue from "vue";
import router from "./router/";
import store from "./store/";

const whiteList = ["/login"]; // 不重定向白名单

// main.js 路由守卫
router.beforeEach(async (to, from, next) => {
  console.log("路由拦截", to.path);
  console.log("store.getters.gettoken", store.getters.gettoken);
  // 判断是否有token
  if (store.getters.gettoken) {
    console.log("有token");

    if (to.path === "/login") {
      console.log("有token , 将要去登录页,转到后台首页");
      next({
        path: "/"
      });
    } else {
      console.log("有token , 不是去登录页,");
      //判断是否有用户角色权限信息，如果没有，先获取用户信息来获取用户角色信息，再根据角色权限动态生成路由
      if (store.getters.getroles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        console.log(
          "没有用户角色信息，动态路由未注入过，拉取用户信息，添加动态路由后再跳转访问的路由"
        );
        // 获取用户信息
        await store.dispatch("GetInfo");
        // 获取角色信息
        const role = store.getters.getroles;
        //根据角色 生成响应的路由
        await store.dispatch("GenerateRoutes", { role });
        // hack方法 确保addRoutes已完成
        next({
          ...to,
          replace: true
        });
      } else {
        console.log(
          "有用户角色信息，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过"
        );
        next(); //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的页面会自动进入404页面
      }
    }
  } else {
    console.log("无token");

    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log("在免登录白名单，直接进入");
      next();
    } else {
      console.log("不在免登录白名单，跳转登录页");
      // 不在免登录白名单，跳转登录页
      next("/login");
    }
  }
});

// 按钮权限相关的自定义指令
Vue.directive("permission", {
  bind: (el, binding) => {
    //获取权限按钮绑定的按钮名称
    let btnName = binding.value;
    //获取当前角色类型
    let nowRoleType = store.getters.getroles;
    //获取当前路由需要权限的按钮组
    let btnGroup = router.currentRoute.meta.hasOwnProperty("btnGroup")
      ? router.currentRoute.meta.btnGroup
      : [];
    //判断当前角色是否具有该按钮权限
    let permission = false;
    let nowBtnInfo = {};
    btnGroup.forEach((item, index) => {
      if (item.name === btnName) {
        //如果匹配到按钮名称
        if (item.allow && item.allow.indexOf(nowRoleType) !== -1) {
          permission = true;
          nowBtnInfo = item;
        }
      }
    });
    //必须等dom更新完毕才去获取父节点不然parentNode获取不到
    Vue.nextTick(() => {
      //有权限返回按钮名称，无权限删除子元素，相当于v-if
      return permission
        ? (el.lastChild.innerText = nowBtnInfo.content)
        : el.parentNode.removeChild(el);
    });
  }
});
