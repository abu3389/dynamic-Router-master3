const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,//是否开启 esLint
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  publicPath: process.env.NODE_ENV === "production" ? "/dynamic-Router-master3/dist/" : "/",//项目根目录
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        //路径重写
        pathRewrite: {
            '^/api': ''
        },
        secure: false,      // 如果是https接口，需要配置这个参数为true
        changeOrigin: true,     // 如果接口跨域，需要进行这个参数配置为true
      },
      '/test': {
        target: 'http://rap2api.taobao.org',
        //路径重写
        pathRewrite: {
          '^/test': '/'
        },
        secure: false,      // 如果是https接口，需要配置这个参数为true
        changeOrigin: true,     // 如果接口跨域，需要进行这个参数配置为true
      }
    }
  }
};
