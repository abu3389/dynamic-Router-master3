import router from "./router/";
import store from "./store/";

const whiteList = ["/login"]; // 不重定向白名单

// main.js
router.beforeEach((to, from, next) => {
  console.log("路由拦截", to.path);
  console.log("store.getters.gettoken", store.getters.gettoken);
  // 判断是否有token
  if (store.getters.gettoken) {
    
    console.log("有token");

    if (to.path === "/login") {
      console.log("有token , 将要去登录页,转到后台首页");
      next({ path: "/" });
    } else {
      console.log("有token , 不是去登录页,");
      //判断是否有用户角色权限信息，如果没有，先获取用户信息来获取用户角色信息，再根据角色权限动态生成路由
      if (store.getters.getroles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        console.log("没有用户角色信息，动态路由未注入过，拉取用户信息，添加动态路由后再跳转访问的路由");
        store
          .dispatch("GetInfo")
          .then(res => {
            // 拉取info
            const roles = res.result.roles;
            //根据角色 生成响应的路由
            store.dispatch("GenerateRoutes", { roles }).then(() => {
              //获取动态添加的路由
              let addRoutes=store.getters.getaddRouters
              //注入到路由
              router.addRoutes(addRoutes); // 动态添加可访问路由表
              // next();
              next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("有用户角色信息，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过");
        next(); //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的页面会自动进入404页面
      }
    }
  } else {
    console.log("无token");

    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log("--111");
      next();
    } else {
      console.log("--222");
      // 不在免登录白名单，跳转登录页
      next("/login");
    }
  }
});
