<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <my-header></my-header>
      <router-view class="viewStyle"></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar/'
import MyHeader from './header/'
import { mapGetters } from 'vuex'
export default {
  components: { sidebar, MyHeader },
  computed: {
    ...mapGetters(['getsidebar']),
    classObj() {
      return {
        hideSidebar: !this.getsidebar.opened,
        openSidebar: this.getsidebar.opened
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .viewStyle {
    padding: 15px;
  }
}
</style>
