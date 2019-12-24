<template>
  <div>
    <li class="fullScreen" @click="fullClick" v-show="isFullscreenData">
      <el-tooltip effect="dark" :content="isfullScreen ? '退出全屏' : '全屏'" placement="bottom">
        <i class="fa fa-arrows-alt fa-lg"></i>
      </el-tooltip>
    </li>
  </div>
</template>

<script>
export default {
  name: 'fullScreen',
  data() {
    return {
      isfullScreen: false, //全屏状态
      isFullscreenData: true, //是否支持全屏
      prefixName: '' // 浏览器前缀
    }
  },
  mounted() {
    //检测是否支持全屏
    this.isFullscreen()
  },
  methods: {
    //全屏按钮点击事件
    fullClick() {
      //如果状态为全屏则退出，反之
      if (this.isfullScreen) {
        this.exitFullscreen()
      } else {
        this.fullScreen()
      }
    },
    //进入全屏
    fullScreen() {
      const element = document.documentElement
      const methodName =
        this.prefixName === ''
          ? 'requestFullscreen'
          : `${this.prefixName}RequestFullScreen`
      element[methodName]()
    },
    // 退出全屏
    exitFullscreen() {
      const methodName =
        this.prefixName === ''
          ? 'exitFullscreen'
          : `${this.prefixName}ExitFullscreen`
      document[methodName]()
    },
    /**
     * 监听进入/离开全屏
     */
    screenChange() {
      if (!this.isFullscreenData) return
      const methodName = `on${this.prefixName}fullscreenchange`
      document[methodName] = e => {
        if (this.isElementFullScreen()) {
          console.log('进入全屏')
          this.isfullScreen = true // 进入全屏回调
        } else {
          console.log('离开全屏')
          this.isfullScreen = false // 离开全屏的回调
        }
      }
    },
    /**
     * @description: 是否支持全屏+判断浏览器前缀
     */
    isFullscreen() {
      let fullscreenEnabled
      // 判断浏览器前缀
      if (document.fullscreenEnabled) {
        fullscreenEnabled = document.fullscreenEnabled
      } else if (document.webkitFullscreenEnabled) {
        fullscreenEnabled = document.webkitFullscreenEnabled
        this.prefixName = 'webkit'
      } else if (document.mozFullScreenEnabled) {
        fullscreenEnabled = document.mozFullScreenEnabled
        this.prefixName = 'moz'
      } else if (document.msFullscreenEnabled) {
        fullscreenEnabled = document.msFullscreenEnabled
        this.prefixName = 'ms'
      }
      if (!fullscreenEnabled) {
        this.isFullscreenData = false //不支持隐藏全屏按钮
      } else {
        this.screenChange() //监听进入/离开全屏事件
      }
    },
    /**
     * @description: 检测有没有元素处于全屏状态
     * @return 布尔值
     */
    isElementFullScreen() {
      const fullscreenElement =
        document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement
      if (fullscreenElement === null) {
        return false // 当前没有元素在全屏状态
      } else {
        return true // 有元素在全屏状态
      }
    }
  }
}
</script>
<style lang="scss">
.fullScreen {
  cursor: pointer;
}
</style>
