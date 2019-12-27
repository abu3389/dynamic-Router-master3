import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout";

// 公用路由页面（不需要登录权限的路由页面，如：首页和登录页、注册页等一些不需要登陆权限的路由）
// 【注意注意注意】：
// 【重要】想要不需要登陆直接跳转记得在 src\permission.js 添加路由白名单，否则会被路由守卫拦截无法跳转。已登陆获取权限的用户不受影响，可以直接跳转。
// hidden (默认为true，不在菜单显示) 设置为 false 可以在菜单显示（记得设置菜单的meta可选参数）；设置为 true 或不设置不会在菜单显示；设置为 ['角色名1','角色名2'] 包含的角色不会在菜单显示
// meta{参数} (可追加自定义参数，也可选内置参数：【title:"" //菜单名称 】；【icon:"" //图标名称（采用element的icon）】；【 role:['角色名1','角色名2'] //可访问的角色名称，不写默认都可访问】)
export const commontRouterMap = [
  {
    path: "/",
    name: "default",
    redirect: "/home",
    component: Layout
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index")
  }
];

// 本地权限路由 （需要登录权限的路由页面，如：菜单路由、页面需要权限的路由）
// hidden (默认为true，不在菜单显示) 设置为 false 可以在菜单显示（记得设置菜单的meta可选参数）；设置为 true 或不设置不会在菜单显示；设置为 ['角色名1','角色名2'] 包含的角色不会在菜单显示
// meta{参数} (可追加自定义参数，也可选内置参数：【title:"" //菜单名称 】；【icon:"" //图标名称（采用element的icon）】；【 role:['角色名1','角色名2'] //可访问的角色名称，不写默认都可访问】)
export const localRouterMap = [
  // 本地后台菜单路由
  {
    path: "/adminMenu",
    name: "adminMenu",
    hidden: false,
    component: Layout,
    meta: {
      title: "本地菜单测试",
      icon: "el-icon-menu"
    },
    children: [
      {
        path: "menu1",
        name: "menu1",
        hidden: false,
        meta: {
          title: "本地菜单测试1",
          icon: "el-icon-menu",
          role: ["0", "1"] //可访问的角色名称
        },
        component: () => import("@/views/userpower1/1-1")
      },
      {
        path: "menu2",
        name: "menu2",
        hidden: false,
        meta: {
          title: "本地菜单测试2",
          icon: "el-icon-menu",
          role: ["0"] //可访问的角色名称
        },
        component: () => import("@/views/userpower1/1-2")
      }
    ]
  },
  //本地后台页面路由
  {
    path: "/adminPage",
    name: "adminPage",
    hidden: true,
    component: Layout,
    children: [
      {
        path: "page1",
        name: "page1",
        hidden: true,
        component: () => import("@/views/userpower1/1-1")
      },
      {
        path: "page2",
        name: "page2",
        hidden: true,
        component: () => import("@/views/userpower1/1-2")
      }
    ]
  }
];

// 远程权限路由 （需要登录权限的路由页面，如：菜单路由、页面需要权限的路由）
// 这是异步挂载的路由，由后端获取，所以这里初始化放空了，只留下测试演示的注释示例
// 远程动态加载一些需要权限的私有页面，适用于需要一个菜单管理或者页面权限管理的需求，让后端根据role来输出对应路由
// hidden (默认为true，不在菜单显示) 设置为 false 可以在菜单显示（记得设置菜单的meta可选参数）；设置为 true 或不设置不会在菜单显示；设置为 ['角色名1','角色名2'] 包含的角色不会在菜单显示
// meta{参数} (可追加自定义参数，也可选内置参数：【title:"" //菜单名称 】；【icon:"" //图标名称（采用element的icon）】；【 role:['角色名1','角色名2'] //可访问的角色名称，不写默认都可访问】)
export const asyncRouterMap = [
  // {
  //   path: "/home",
  //   component: "layout/layout",
  //   hidden: false,
  //   name: "home",
  //   roleMenuId: "1",
  //   meta: {
  //     icon: "el-icon-menu",
  //     title: "Home"
  //   },
  //   children: []
  // },
  // {
  //   path: "/userpower1",
  //   component: "layout/layout",
  //   hidden: false,
  //   name: "userpower1",
  //   roleMenuId: "2",
  //   meta: {
  //     icon: "el-icon-tickets",
  //     title: "权限测试1",
  //     role: ["0", "1", "2"]
  //   },
  //   children: [
  //     {
  //       path: "1-1",
  //       component: "userpower1/1-1",
  //       hidden: false,
  //       name: "1-1",
  //       roleMenuId: "3",
  //       meta: {
  //         icon: null,
  //         title: "1-1",
  //         role: ["0"]
  //       },
  //       children: []
  //     },
  //     {
  //       path: "1-2",
  //       component: "userpower1/1-2",
  //       hidden: false,
  //       name: "1-2",
  //       roleMenuId: "4",
  //       meta: {
  //         icon: null,
  //         title: "1-2",
  //         role: ["0", "1", "2"],
  //         btnGroup: [
  //           {
  //             name: "adminBtn",
  //             content: "按钮权限测试1：只有admin看得到",
  //             allow: ["0"]
  //           },
  //           {
  //             name: "editorBtn",
  //             content: "按钮权限测试2：该按钮只有editor看得到",
  //             allow: ["1"]
  //           },
  //           {
  //             name: "readerBtn",
  //             content: "按钮权限测试3：该按钮只有reader看得到",
  //             allow: ["2"]
  //           },
  //           {
  //             name: "adminAndEditorBtn",
  //             content: "按钮权限测试4：该按钮只有admin和editor看得到",
  //             allow: ["0", "1"]
  //           }
  //         ]
  //       },
  //       children: []
  //     },
  //     {
  //       path: "1-3",
  //       name: "1-3",
  //       component: "userpower1/1-3",
  //       hidden: true,
  //       meta: {
  //         title: "1-3",
  //         role: ["0", "1", "2"]
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/nested",
  //   component: "layout/layout",
  //   name: "Nested",
  //   hidden: false,
  //   meta: {
  //     title: "多级菜单",
  //     icon: "el-icon-news",
  //     role: []
  //   },
  //   children: [
  //     {
  //       path: "menu1",
  //       component: "nested/menu1/index",
  //       name: "Menu1",
  //       hidden: false,
  //       meta: {
  //         title: "Menu1"
  //       },
  //       children: [
  //         {
  //           path: "menu1-1",
  //           component: "nested/menu1/menu1-1/index",
  //           name: "Menu1-1",
  //           hidden: false,
  //           meta: {
  //             title: "Menu1-1"
  //           }
  //         },
  //         {
  //           path: "menu1-2",
  //           component: "nested/menu1/menu1-2/index",
  //           name: "Menu1-2",
  //           hidden: false,
  //           meta: {
  //             title: "Menu1-2"
  //           },
  //           children: [
  //             {
  //               path: "menu1-2-1",
  //               component: "nested/menu1/menu1-2/menu1-2-1/index",
  //               name: "Menu1-2-1",
  //               hidden: false,
  //               meta: {
  //                 title: "Menu1-2-1"
  //               }
  //             },
  //             {
  //               path: "menu1-2-2",
  //               component: "nested/menu1/menu1-2/menu1-2-2/index",
  //               name: "Menu1-2-2",
  //               hidden: false,
  //               meta: {
  //                 title: "Menu1-2-2"
  //               }
  //             }
  //           ]
  //         },
  //         {
  //           path: "menu1-3",
  //           component: "nested/menu1/menu1-3/index",
  //           name: "Menu1-3",
  //           hidden: false,
  //           meta: {
  //             title: "Menu1-3",
  //             icon: "el-icon-menu"
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: "/menu2",
  //       component: "nested/menu2/index",
  //       name: "Menu2",
  //       hidden: false,
  //       meta: {
  //         title: "menu2",
  //         icon: "el-icon-menu"
  //       }
  //     }
  //   ]
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
    path: "403",
    name: "error-403",
    hidden: true,
    meta: {
      title: "403-权限不足"
    },
    component: () => import("@/views/error-page/403")
  },
  {
    path: "500",
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
    routes: [...commontRouterMap] //初始化先注入公共页面路由
  });
const router = createRouter();

//重置路由
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
