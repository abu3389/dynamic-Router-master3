import {
  asyncRouterMap,
  commontRouterMap,
  localRouterMap,
  errorRouterMap
} from "@/router";
import Router from "@/router/";
import { getMenuList } from "@/api/test/test";
const router = {
  state: {
    //当前已存在的路由列表
    routers: {
      ...commontRouterMap //公共页面路由
    },
    //动态添加的路由列表
    addRouters: []
  },
  getters: {
    //获取动态添加的路由列表
    getaddRouters: state => state.addRouters,
    //获取当前已存在的路由列表
    getrouters: state => state.routers
  },
  mutations: {
    //归并路由
    SET_ROUTERS: (state, data) => {
      let { accessedRouters: addRouters, role } = data;
      //处理和过滤路由的meta参数
      let commontRouters = filterAsyncRoutes(commontRouterMap, role); //本地公共路由
      let localRouters = filterAsyncRoutes(localRouterMap, role); //本地权限路由
      let errorRouters = filterAsyncRoutes(errorRouterMap, role); //错误路由

      //保存属于该角色动态添加的权限路由（远程菜单路由+本地权限路由都是动态添加的+错误页路由）
      state.addRouters = [...addRouters, ...localRouters, ...errorRouters]; //(错误路由一定要放在最后添加，否则页面会被错误路由劫持)
      //将当前已存在的路由与动态添加的路由合并保存
      state.routers = [...commontRouters, ...state.addRouters];
    },
    //清除动态添加的路由
    CLEAR_ADDROUTERS: state => {
      state.addRouters = [];
    }
  },
  actions: {
    // 根据角色 生成响应的路由
    GenerateRoutes({ state, commit }, data) {
      return new Promise(resolve => {
        const { role } = data;
        let send = {
          token: "123456",
          id: "asdishdhaksdh"
        };
        getMenuList(send).then(res => {
          // 处理远程获取的路由
          let newRouters = importComponents(res.data);
          // 递归循环路由获取该角色的允许的路由并返回
          let accessedRouters = filterAsyncRoutes(newRouters, role);
          // 保存允许访问的路由
          commit("SET_ROUTERS", { accessedRouters, role });
          //获取动态添加的路由
          let addRoutes = state.addRouters;
          console.log("过滤后的动态路由，注入", addRoutes);

          //注入到路由
          Router.addRoutes(addRoutes); // 动态添加可访问路由表
          console.log("所有生效的路由：", Router.options.routes);

          resolve();
        });
      });
    }
  }
};

/**
 * 递归循环路由获取属于该角色的路由
 * @param routes asyncRoutes
 * @param role
 */
export function filterAsyncRoutes(routes, role) {
  const res = [];
  // 递归循环路由
  routes.forEach(route => {
    // 展开当前路由
    const tmp = route;
    // 判断角色是否有该路由的权限
    if (hasPermission(role, tmp)) {
      // 判断是否隐藏菜单，
      //如果是 true 代表该路由全部角色都不在菜单栏显示 或 false 代表该路由全部角色都在菜单栏显示,
      //如果是 数组 代表该路由数组里的角色都不在菜单栏显示

      // 这里判断hidden(是否显示隐藏菜单)是否存在还有是数组的情况
      if (tmp.hasOwnProperty("hidden")) {
        if (tmp.hidden && Array.isArray(tmp.hidden)) {
          // 如果hidden是数组，判断是否包含该角色，包含则不在菜单栏显示，重新定义hidden为 true，反之 false 展示
          tmp.hidden = tmp.hidden.includes(role) ? true : false;
        }
      } else {
        tmp.hidden = true;
      }

      // 这里判断alone（只有一个菜单是否显示目录）的情况
      if (!tmp.hasOwnProperty("alone")) {
        tmp.alone = false;
      }

      // 这里判断meta（iconc菜单图标 title菜单标题 role）的情况
      if (!tmp.hasOwnProperty("meta")) {
        tmp.meta = {};
      }

      // 将满足条件且处理后的路由数据保存起来
      res.push(tmp);

      // 有子路由继续递归
      if (tmp.hasOwnProperty("children") && tmp.children.length > 0) {
        tmp.children = filterAsyncRoutes(tmp.children, role);
      }
    }
  });
  return res;
}

/**
 * 判断角色是否有该路由的权限
 * @param role //对应的角色信息
 * @param route //要查找的路由对象
 */
function hasPermission(role, route) {
  if (route.meta && route.meta.role && route.meta.role.length > 0) {
    return route.meta.role.includes(role);
  } else {
    return true;
  }
}
/**
 * 转换字符换为成引入组件的函数
 * @param routes //要查找的路由对象
 */
function importComponents(routes) {
  routes.forEach((item, index) => {
    item.component = getViews(item.component);
    if (item.children && item.children.length > 0) {
      importComponents(item.children);
    } else {
      delete item.children;
    }
  });
  return routes;
}

/**
 * 转路径为函数
 * @param path //组件路径
 */
function getViews(path) {
  return resolve => {
    require.ensure([], require => {
      resolve(require("@/views/" + path + ".vue"));
    });
  };
}

export default router;
