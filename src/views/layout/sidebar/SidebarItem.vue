<template>
  <div class="menu-wrapper">
    <template v-for="(item, index) in menu">
      <!-- 此菜单下没有子菜单 -->
      <el-menu-item
        v-if="!item.children && !item.hidden"
        :key="item.path"
        :index="parent ? parent + '/' + item.path : item.path"
      >
        <i :class="item.meta.hasOwnProperty('icon') ? item.meta.icon : ''"></i>
        <span slot="title">
          {{
          item.meta.hasOwnProperty("title")
          ? item.meta.title
          : item.path + "未设置菜单名称"
          }}
        </span>
      </el-menu-item>

      <!-- 此菜单下只有一个子菜单（根据alone判断是否直接指向该菜单） -->
      <el-menu-item
        v-if="
          item.children &&
            item.children.length === 1 &&
            !item.hidden &&
            item.alone
        "
        :key="item.path"
        :index="
          parent
            ? parent + '/' + item.path + '/' + item.children[0].path
            : item.path + '/' + item.children[0].path
        "
      >
        <i :class="
            item.children[0].meta.hasOwnProperty('icon')
              ? item.children[0].meta.icon
              : ''
          "></i>
        <span slot="title">
          {{
          item.children[0].meta.hasOwnProperty("title")
          ? item.children[0].meta.title
          : item.children[0].path + "未设置菜单名称"
          }}
        </span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="
          item.children &&
            !item.hidden &&
            (item.children.length > 1 ||
              (item.children.length === 1 && !item.alone && typeof(item.children[0])!=='undefined'))
        "
        :key="item.path"
        :index="parent ? parent + '/' + item.path : item.path"
      >
        <template slot="title">
          <i :class="item.meta.hasOwnProperty('icon') ? item.meta.icon : ''"></i>
          <span>
            {{
            item.meta.hasOwnProperty("title")
            ? item.meta.title
            : item.path + "未设置菜单名称"
            }}
          </span>
        </template>
        <sidebar-item
          :menu="item.children"
          :parent="parent ? parent + '/' + item.path : item.path"
        />
      </el-submenu>
        <!-- 递归 -->
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
