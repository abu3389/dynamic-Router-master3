const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,//是否开启 esLint
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  publicPath: process.env.NODE_ENV === "production" ? "/my-vue-template" : "/"
};
