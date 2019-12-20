<template>
  <div>
    <div class="header">
      <!-- 折叠菜单面板 -->
      <div id="header-sidebar-open-close">
        <i
          :class="[
            getsidebar.opened ? 'el-icon-s-unfold' : 'el-icon-s-fold',
            'icon'
          ]"
          @click="toggleSideBar"
        ></i>
      </div>

      <!-- 右侧下拉菜单 -->
      <el-dropdown class="avatar-container" id="header-right">
        <span>
          <img
            :src="getavatar + '?imageView2/1/w/40/h/40'"
            class="user-avatar"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 菜单选项卡 -->
    <tabNav></tabNav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tabNav from "./tabNav";
export default {
  components: { tabNav },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push(`/login`);
    }
  },
  computed: {
    ...mapGetters(["getsidebar", "getavatar"])
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #ccc;
  height: 50px;
}
.icon {
  font-size: 25px;
  cursor: pointer;
  padding: 12px 20px;
}
.avatar-container {
  height: 40px;
  display: inline-block;
  position: absolute;
  right: 35px;
  margin-top: 5px;
}
.user-avatar {
  border-radius: 10px;
  cursor: pointer;
}
#header-sidebar-open-close {
  display: inline-block;
}
</style>
