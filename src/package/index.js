/*
 * @Author: wedong.fu
 * @Date: 2022-02-14 11:02:01
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:45:47
 * @Description: 请填写简介
 */
// import EnvPage from "./env-page/index.vue";
// import EnvButton from "./env-button/index.vue";
import { setLocalStorage, getLocalStorage } from "./utils";

const version = "0.2.0";

function install(Vue) {}

/**
 * 小程序的组件体系需要从单个组件文件抽出，所以不能作为模块组件一样随意导出。
 * 就是说：
 * 🚫 import {HllButton} from 'uni-ui'
 * ✅ import HllButton from 'uni-ui/hll-button/index.vue'
 * 但下面这段代码先保留，毕竟写起来挺累的
 */
export {
  install,
  version,
  // EnvPage,
  // EnvButton,
  setLocalStorage,
  getLocalStorage,
};

export default {
  install: install,
  version: version,
};
