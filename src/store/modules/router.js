import { asyncRouterMap, commontRouterMap, errorRouterMap} from "@/router";

const router = {
  state: {
    routers: {...commontRouterMap}, //当前已存在的路由列表
    addRouters: [] //动态添加的路由列表
  },
  getters: {
    //获取动态添加的路由列表
    getaddRouters: state => state.addRouters,
    //获取当前已存在的路由列表
    getrouters: state => state.routers
  },
  mutations: {
    SET_ROUTERS: (state, addRouters) => {
      //保存属于该角色动态添加的权限路由（菜单路由+错误页路由都是动态添加的）
      state.addRouters = addRouters.concat(errorRouterMap); 
      //将公共路由与动态添加的路由合并保存
      state.routers = commontRouterMap.concat(state.addRouters)
    }
  },
  actions: {
    // 根据角色 生成响应的路由
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;
        // 递归循环路由获取该角色的允许的路由并返回
        let accessedRouters = filterAsyncRoutes(asyncRouterMap, roles);
        // 保存允许访问的路由
        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    },
  }
};

/**
 * 递归循环路由获取属于该角色的路由
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  // 递归循环路由
  routes.forEach(route => {
    // 展开当前路由
    const tmp = { ...route };
    // 判断角色是否有该路由的权限
    if (hasPermission(roles, tmp)) {
      // 有子路由继续递归
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      // 判断是否隐藏菜单，如果是 true 代表该路由全部角色都不在菜单栏显示 或 false 代表该路由全部角色都在菜单栏显示, 如果是数组代表该路由数组里的角色都不在菜单栏显示
      // 这里判断是否是数组的情况
      if (tmp.hidden && typeof tmp.hidden !== "boolean") {
        // 如果hidden是数组，判断是否包含该角色，包含则不在菜单栏显示，重新定义hidden为 true，反之 false
        tmp.hidden = tmp.hidden.includes(roles) ? true : false;
      }
      // 将满足条件且处理后的路由数据保存起来
      res.push(tmp);
    }
  });
  return res;
}

/**
 * 判断角色是否有该路由的权限
 * @param roles //对应的角色信息
 * @param route //要查找的路由列表
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return route.meta.role.includes(roles);
  } else {
    return true;
  }
}

export default router;
