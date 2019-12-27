<template>
  <div class="menu-wrapper">
    <template v-for="(item, index) in menu">
      <!-- 此菜单下没有子菜单 -->
      <el-menu-item
        v-if="!item.children && item.hasOwnProperty('hidden') && !item.hidden"
        :key="item.index"
        :index="parent ? parent + '/' + item.path : item.path"
      >
        <i
          :class="
            item.hasOwnProperty('meta') && item.meta.hasOwnProperty('icon')
              ? item.meta.icon
              : ''
          "
        ></i>
        <span slot="title">
          {{
          item.hasOwnProperty("meta") && item.meta.hasOwnProperty("title")
          ? item.meta.title
          : item.path + "未设置菜单名称"
          }}
        </span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="item.children && item.hasOwnProperty('hidden') && !item.hidden"
        :key="item.index"
        :index="parent ? parent + '/' + item.path : item.path"
      >
        <template slot="title">
          <i
            :class="
              item.hasOwnProperty('meta') && item.meta.hasOwnProperty('icon')
                ? item.meta.icon
                : ''
            "
          ></i>
          <span>
            {{
            item.hasOwnProperty("meta") && item.meta.hasOwnProperty("title")
            ? item.meta.title
            : item.path + "未设置菜单名称"
            }}
          </span>
        </template>
        <!-- 递归 -->
        <sidebar-item
          :menu="item.children"
          :parent="parent ? parent + '/' + item.path : item.path"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: ['menu', 'parent'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.title {
  color: #fff;
}
</style>
