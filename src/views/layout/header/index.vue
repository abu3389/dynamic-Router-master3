<template>
  <div>
    <el-header id="header">
      <!-- 折叠菜单面板 -->
      <span class="hideAside">
        <i
          :class="[
            getsidebar.opened ? 'el-icon-s-unfold' : 'el-icon-s-fold',
            'icon'
          ]"
          @click="toggleSideBar"
        ></i>
      </span>
      <ul class="personal">
        <!-- 全屏组件 -->
        <full-screen></full-screen>
        <li>{{ $store.getters.rolename }}</li>
        <!-- 用户中心下拉菜单 -->
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ $store.getters.username }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>Home</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <!-- 用户头像 -->
        <li class="icon">
          <img :src="getavatar + '?imageView2/1/w/40/h/40'" class="user-avatar" />
        </li>
      </ul>
    </el-header>
    <!-- 菜单选项卡 -->
    <tabNav></tabNav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tabNav from '@/components/layout/tabNav'
import fullScreen from '@/components/layout/fullScreen'
export default {
  components: { tabNav, fullScreen },
  data() {
    return {}
  },
  methods: {
    //展开或缩小菜单
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    //退出登录
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push(`/login`)
    },
    //全屏事件
    fullscreenChange() {}
  },
  computed: {
    ...mapGetters(['getsidebar', 'getavatar'])
  }
}
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

%cursor {
  cursor: pointer;
}

html,
body,
#app,
.el-container,
#asideNav,
ul.el-menu {
  @extend %h100;
}

@mixin set-value($side, $value) {
  @each $prop in $leftright {
    #{$side}-#{$prop}: $value;
  }
}

#header {
  max-height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  .hideAside {
    @extend %cursor;
  }
  .personal {
    display: flex;
    flex-direction: row;
    li {
      @include set-value(margin, 13px);
      font-size: 12px;
    }
    .el-dropdown-link {
      @extend %cursor;
    }
    .icon img {
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      width: 40px;
      height: 40px;
    }
  }
  .icon {
    font-size: 25px;
    cursor: pointer;
    padding: 5px 0px;
  }
}
</style>
