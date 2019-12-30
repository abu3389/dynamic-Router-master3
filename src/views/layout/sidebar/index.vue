<template>
  <div>
    <el-menu
      :default-active="$route.path"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
      router
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
    >
      <sidebar-item :menu="getrouters" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['getrouters', 'getsidebar']),
    isCollapse() {
      return !this.getsidebar.opened
    },
    variables() {
      return variables
    }
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    $route: function(val) {
      this.selectmenu(val)
    }
  },
  methods: {
    //选择菜单触发的事件
    selectmenu(key) {
      this.$store.dispatch('addTab', {
        title: key.meta && key.meta.title ? key.meta.title : '未设置标题',
        path: key.path
      })
    }
  }
}
</script>
<style></style>
