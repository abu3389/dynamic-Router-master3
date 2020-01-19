<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
body {
  background-color: #f2f2f2;
  font-size: 14px;
  color: #333333;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
