/*
 * @Author: wedong.fu
 * @Date: 2022-02-14 10:55:30
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:45:06
 * @Description: 请填写简介
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.extensions.add(".ts");
    // 本地开发时为了方便，将 uni-ui 指向本地
    if (process.env.NODE_ENV === "development") {
      config.resolve.alias.set(
        "uni-mp-env-debug/ui",
        resolve("./src/package")
      );
    }

    if (process.env.UNIT) {
      // 全局设置变量
      config.plugin("define").tap((args) => {
        args[0]["process.env"].UNIT = JSON.stringify(process.env.UNIT);
        return args;
      });
    }
  },
};
