<template>
  <div @click="handleChange" v-if="showFullScreenBtn">
    <el-tooltip :content="value ? '退出全屏' : '全屏'" placement="bottom">
      <i class="fa fa-arrows-alt fa-lg"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'fullScreen',
  props: { value: { type: Boolean, default: false } },
  computed: {
    showFullScreenBtn() {
      return window.navigator.userAgent.indexOf('MSIE') < 0
    }
  },
  methods: {
    handleFullscreen() {
      let main = document.body
      if (this.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
    },
    handleChange() {
      this.handleFullscreen()
    }
  },
  created() {
    let isFullscreen =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.fullScreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen
    isFullscreen = !!isFullscreen
    document.addEventListener('fullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('mozfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('webkitfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('msfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    this.$emit('input', isFullscreen)
  }
}
</script>
<style>
/* 全屏属性 */
:not(:root):-webkit-full-screen::backdrop {
  background: #fff !important;
}
:not(:root):-moz-full-screen::backdrop {
  background: #fff !important;
}
:not(:root):-ms-fullscreen::backdrop {
  background: #fff !important;
}
/* 全屏伪类 当前chrome:70 不支持 */
:not(:root):full-screen::backdrop {
  background: #fff !important;
}
:not(:root):fullscreen::backdrop {
  /* IE11支持 */
  background: #fff !important;
}
</style>
