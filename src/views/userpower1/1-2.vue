<template>
  <div>
    <h1>1-2</h1>
    <el-button @click="gonext">去1-3</el-button>
    <h3>下面按钮根据当前用户的权限来显示隐藏：</h3>
    <p>当前用户角色类型： "{{ $store.getters.getroles }}"</p>
    <p>分别代表： "{{ $store.getters.getroles }}"</p>
    <p>"0"：admin</p>
    <p>"1"：editor</p>
    <p>"2"：reader</p>
    <p>
      不需要权限的按钮：
      <el-button type="primary" plain size="medium">此按钮不需要权限</el-button>
    </p>
    <p>
      需要 ["admin"]：
      <el-button type="primary" v-permission="'adminBtn'"
        >按钮名称从后端获取</el-button
      >
    </p>
    <p>
      需要 ["editor"]：
      <el-button type="success" v-permission="'editorBtn'"
        >按钮名称从后端获取</el-button
      >
    </p>
    <p>
      需要 ["reader"]：
      <el-button type="warning" v-permission="'readerBtn'"
        >按钮名称从后端获取</el-button
      >
    </p>
    <p>
      需要 ["admin", "editor"]：
      <el-button type="danger" v-permission="'adminAndEditorBtn'"
        >按钮名称从后端获取</el-button
      >
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    gonext() {
      this.$router.push("/userpower1/1-3");
    }
  }
};
</script>

<style></style>
