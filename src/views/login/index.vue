<template>
  <div class="login-wrap">
    <div class="ms-title">vue-追寻权限管理后台模板</div>
    <p class="ms-title2">(elementui+viewDesign+vue-cli3)</p>
    <el-card
      shadow="always"
      class="login-module"
      v-if="smdl"
    >
      <div
        slot="header"
        class="clearfix formTitlt"
      >
        <span>密码登录</span>
        <span class="titIconbox">
          <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
          <i
            class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer"
            @click="smdl = !smdl"
          ></i>
        </span>
      </div>
      <el-form
        :model="loginForm"
        ref="loginForm"
        status-icon
        label-width="100px"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            auto-complete="off"
            placeholder="请输入登录账号"
          >
            <i
              slot="prefix"
              class="el-input__icon el-icon-user"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :type="passwordType"
            v-model="loginForm.password"
            ref="pwd"
            auto-complete="off"
            placeholder="请输入登录密码"
          >
            <i
              slot="prefix"
              class="el-input__icon el-icon-lock"
            ></i>
            <i
              slot="suffix"
              class="el-input__icon el-icon-view"
              style="cursor: pointer;"
              @click="showPwd"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="subBtn"
            type="primary"
            @click="submitForm"
          >登录</el-button>
        </el-form-item>
        <div class="smalltxt">
          <router-link
            class="a"
            to="#"
          >忘记密码</router-link>
          <router-link
            class="a"
            to="#"
          >忘记会员名</router-link>
          <router-link
            class="a"
            to="#"
          >免费注册</router-link>
        </div>
        <div>演示账号密码：</div>
        <div>
          <span>username: admin</span>&nbsp;
          <span>password: admin</span>&nbsp;
          <span>role :0</span>&nbsp;
        </div>
        <div>
          <span>username: editor</span>&nbsp;
          <span>password: editor</span>&nbsp;
          <span>role :1</span>&nbsp;
        </div>
        <span>
          <span>username: reader</span>&nbsp;
          <span>password: reader</span>&nbsp;
          <span>role :2</span>&nbsp;
        </span>
      </el-form>
    </el-card>

    <el-card
      shadow="always"
      class="login-module"
      v-else
    >
      <div
        slot="header"
        class="clearfix formTitlt"
      >
        <span>扫码登录</span>
        <span class="titIconbox">
          <i class="iconfont xu-mimadenglu1 fa-lg iconcolor"></i>
          <i
            class="iconfont xu-imagevector el-icon--right fa-lg pointer"
            @click="smdl = !smdl"
          ></i>
        </span>
      </div>
      <div class="ewmbox">
        <div class="ewm">
          <img src="https://img.alicdn.com/tfscom/TB1ivYYyHvpK1RjSZFqwu3XUVXa.png" />
        </div>
        <div class="ewmicon">
          <i class="iconfont xu-saomadenglu fa-2x iconcolor"></i>
          <p>打开 微信 扫一扫登录</p>
        </div>
        <div class="smalltxt">
          <router-link
            class="a"
            to="#"
          >免费注册</router-link>
        </div>
      </div>
    </el-card>
    <vue-particles
      color="#fff"
      :linesWidth="2"
      style="height: 100%;width: 100%;"
    ></vue-particles>
  </div>
</template>
<script>
import md5 from "md5";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("用户名密码不能小于5位"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      smdl: true,
      passwordType: "password",
      loginForm: {
        username: "admin",
        password: "admin",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass },
        ],
      },
      loading: false,
    };
  },
  methods: {
    // 登录表单提交
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then((data) => {
              this.loading = false;
              //登录成功，跳转到后台Home主页
              if (data) {
                this.$router.push("/");
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          this.$message.error("error submit!!"); //登录失败提示错误
          return false;
        }
      });
    },
    // 显示/隐藏密码
    showPwd() {
      this.passwordType = this.passwordType === "password" ? "" : "password";
      this.$nextTick(() => {
        this.$refs.pwd.focus();
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -45deg,
    rgba(9, 69, 138, 0.2),
    rgba(68, 155, 255, 0.7),
    rgba(117, 113, 251, 0.7),
    rgba(68, 155, 255, 0.7),
    rgba(9, 69, 138, 0.2)
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
  .ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }
  .ms-title2 {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -185px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  .login-module {
    width: 380px;
    min-height: 310px;
    border: none;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -190px;
    border-radius: 5px;
    background: #fff;

    .formTitlt {
      font-size: 18px;
      font-weight: 400;

      .titIconbox {
        float: right;

        .pointer {
          cursor: pointer;
        }
      }
    }

    .smalltxt {
      text-align: right;

      .a {
        text-decoration: none;
        color: #999999;
        font-size: 12px;
        margin-left: 8px;
      }
    }
    .ewmbox {
      width: 100%;
      height: 240px;
      margin-top: -25px;

      .ewm {
        width: 140px;
        height: 140px;
        margin: 20px auto;

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }

      .ewmicon {
        width: 140px;
        margin: 20px auto 0;

        .iconfont {
          float: left;
        }

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }
    }
  }
  .el-form-item__content {
    margin-left: 0px !important;

    .subBtn {
      width: 100%;
    }
  }

  .el-input__inner,
  .el-button,
  .el-card,
  .el-message {
    border-radius: 0px !important;
  }

  .el-form-item__content .ico {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 40px;
    height: 39px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
