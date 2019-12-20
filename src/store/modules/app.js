import router from "../../router/";
const app = {
  state: {
    sidebar: {
      opened: true,
      withoutAnimation: false
    },
    rightNav: {},
    tabnavBox: [
      {
        title: "主页",
        path: "/home"
      }
    ]
  },
  mutations: {
    //slider切换
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    //菜单打开状态
    openMenu(state, arg) {
      state.rightNav = arg;
    },
    //添加菜单标签
    addTab(state, arg) {
      for (let i = 0; i < state.tabnavBox.length; i++) {
        if (state.tabnavBox[i].path === arg.path) {
          return false;
        }
      }
      state.tabnavBox.push({
        title: arg.title,
        path: arg.path
      });
      this.commit("setLocalStorage", state.tabnavBox);
    },
    //移除菜单标签
    removeTab(state, arg) {
      let index = state.tabnavBox.findIndex(function(value, key) {
        return value.path === arg.tabItem.path;
      });
      state.tabnavBox.splice(index, 1);
      this.commit("setLocalStorage", state.tabnavBox);
      if (arg.tabItem.path === arg.fullPath) {
        let tabActive = state.tabnavBox[index] || state.tabnavBox[index - 1];
        arg.router.push(tabActive.path);
      }
    },
    //移除其他标签
    removeOtherTab(state, arg) {
      state.tabnavBox = [
        {
          title: "Home",
          path: "/home"
        }
      ];
      if (arg.all) {
        arg.router.push("/home");
        this.commit("setLocalStorage", state.tabnavBox);
        return false;
      }
      state.tabnavBox.push(arg.tabItem);
      this.commit("setLocalStorage", state.tabnavBox);
      arg.router.push(arg.tabItem.path);
    },
    //移除所有标签
    removeAllTab(state, arg) {
      this.commit("removeOtherTab", {
        all: true,
        router
      });
    },
    setLocalStorage(state, arg) {
      window.localStorage.setItem("tabnavBox", JSON.stringify(arg));
    }
  },
  getters: {
    getsidebar: state => state.sidebar,
    rightNav: state => state.rightNav,
    tabnavBox: state => {
      if (window.localStorage.getItem("tabnavBox")) {
        state.tabnavBox = JSON.parse(window.localStorage.getItem("tabnavBox"));
      }
      return state.tabnavBox;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit("TOGGLE_SIDEBAR");
    },
    addTab({ commit }, arg) {
      commit("addTab", arg);
    },
    openMenu({ commit }, arg) {
      commit("openMenu", arg);
    },
    removeTab({ commit }, arg) {
      commit("removeTab", arg);
    },
    removeOtherTab({ commit }, arg) {
      commit("removeOtherTab", arg);
    }
  }
};
export default app;
