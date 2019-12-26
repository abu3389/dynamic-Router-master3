import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout";

// 公用路由页面（不需要登录权限的路由页面，如：首页和登录页、注册页等一些不需要登陆权限的路由）
// 注意注意注意：
// 想要不需要登陆直接跳转记得在 src\permission.js 添加路由白名单，否则会被路由守卫拦截无法跳转。已登陆获取权限的用户不受影响，可以直接跳转。
// 这部分路由有设置hidden为false的会在菜单展示即作为本地公共菜单路由,反之不写或者设置hidden为true不会展示即只作为本地公共页面路由
export const commontRouterMap = [
  {
    path: "/",
    redirect: "/home",
    hidden: true,
    component: Layout
  },
  {
    path: "/login",
    hidden: true, //不在slider显示
    component: () => import("@/views/login/index")
  }
];

// 本地权限路由 （需要登录权限的路由页面，如：菜单路由、页面需要权限的路由）
// 这部分路由有设置hidden为false的会在菜单展示即作为 本地 权限菜单路由,反之不写或者设置hidden为true不会展示即只作为 本地 权限页面路由
export const localRouterMap = [];

// 远程权限路由 （需要登录权限的路由页面，如：菜单路由、页面需要权限的路由）
// 这是异步挂载的路由，由后端获取，所以这里初始化放空了
// 远程动态加载一些需要权限的私有页面，适用于需要一个菜单管理或者页面权限管理的需求，让后端根据role来输出对应路由
// 这部分路由有设置hidden为false的会在菜单展示即作为 远程 权限菜单路由,反之不会展示即只作为 远程 权限页面路由
export const asyncRouterMap = [
  // {
  //     path: "/home",
  //     component: Layout,
  //     meta: { title: "Home", icon: "el-icon-menu" }
  // },
  // {
  //     path: "/userpower1",
  //     component: Layout,
  //     redirect: "/userpower1/1-1",
  //     name: "userpower1",
  //     meta: { title: "权限测试1", icon: "el-icon-tickets", role: ['0', '1', '2'] },
  //     children: [
  //         {
  //             path: "1-1",
  //             name: "1-1",
  //             component: () =>
  //                 import("@/views/userpower1/1-1"),
  //             meta: { title: "1-1", role: ['0'] },
  //         },
  //         {
  //             path: "1-2",
  //             name: "1-2",
  //             component: () =>
  //                 import("@/views/userpower1/1-2"),
  //             hidden: ['0'],//不在菜单显示的角色
  //             meta: { title: "1-2", role: ['0', '1', '2'] }//role 允许通过某页跳转到这个路由的角色
  //         },
  //         {
  //             path: "1-3",
  //             name: "1-3",
  //             component: () =>
  //                 import("@/views/userpower1/1-3"),
  //             hidden: true,//不在sidebar显示，由sidebar中的某路由跳转到这个页面,本例由1-2跳转，因此role与1-2同
  //             meta: { title: "1-3", role: ['0', '1', '2'] }
  //         }
  //     ]
  // },
  // {
  //     path: "/userpower2",
  //     component: Layout,
  //     redirect: "/userpower2/tree",
  //     name: "userpower2",
  //     meta: { title: "权限测试2", icon: "el-icon-tickets", role: ['0', '1'] },
  //     children: [
  //         {
  //             path: "2-1",
  //             name: "2-1",
  //             component: () =>
  //                 import("@/views/userpower2/2-1"),
  //             meta: { title: "2-1", role: ['0'] }
  //         },
  //         {
  //             path: "2-2",
  //             name: "2-2",
  //             component: () =>
  //                 import("@/views/userpower2/2-2"),
  //             hidden: ['0'],//用户角色为0时，隐藏
  //             meta: { title: "2-2", role: ['0', '1'] }
  //         }
  //     ]
  // },
  // {
  //     path: "/nested",
  //     component: Layout,
  //     redirect: "/nested/menu1",
  //     name: "Nested",
  //     meta: {
  //         title: "多级菜单",
  //         icon: "el-icon-news"
  //     },
  //     children: [
  //         {
  //             path: "menu1",
  //             component: () =>
  //                 import("@/views/nested/menu1/index"), // Parent router-view
  //             name: "Menu1",
  //             meta: { title: "Menu1" },
  //             children: [
  //                 {
  //                     path: "menu1-1",
  //                     component: () =>
  //                         import("@/views/nested/menu1/menu1-1/index"),
  //                     name: "Menu1-1",
  //                     meta: { title: "Menu1-1" }
  //                 },
  //                 {
  //                     path: "menu1-2",
  //                     component: () =>
  //                         import("@/views/nested/menu1/menu1-2/index"),
  //                     name: "Menu1-2",
  //                     meta: { title: "Menu1-2" },
  //                     children: [
  //                         {
  //                             path: "menu1-2-1",
  //                             component: () =>
  //                                 import("@/views/nested/menu1/menu1-2/menu1-2-1/index"),
  //                             name: "Menu1-2-1",
  //                             meta: { title: "Menu1-2-1" }
  //                         },
  //                         {
  //                             path: "menu1-2-2",
  //                             component: () =>
  //                                 import("@/views/nested/menu1/menu1-2/menu1-2-2/index"),
  //                             name: "Menu1-2-2",
  //                             meta: { title: "Menu1-2-2" }
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     path: "menu1-3",
  //                     component: () =>
  //                         import("@/views/nested/menu1/menu1-3/index"),
  //                     name: "Menu1-3",
  //                     meta: { title: "Menu1-3" }
  //                 }
  //             ]
  //         },
  //         {
  //             path: "menu2",
  //             component: () =>
  //                 import("@/views/nested/menu2/index"),
  //             meta: { title: "menu2" }
  //         }
  //     ]
  // }
];

//错误页路由
export const errorRouterMap = [
  {
    path: "/*",
    name: "error-404",
    hidden: true,
    meta: {
      title: "404-页面不存在"
    },
    component: () => import("@/views/error-page/404")
  },
  {
    path: "/403",
    name: "error-403",
    hidden: true,
    meta: {
      title: "403-权限不足"
    },
    component: () => import("@/views/error-page/403")
  },
  {
    path: "/500",
    name: "error-500",
    hidden: true,
    meta: {
      title: "500-服务端错误"
    },
    component: () => import("@/views/error-page/500")
  }
];

//实例化vue的时候只挂载commontRouterMap
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [...commontRouterMap, ...localRouterMap] //初始化先注入公共页面路由+本地权限路由
  });
const router = createRouter();

//重置路由
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
