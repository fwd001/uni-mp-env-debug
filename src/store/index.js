import Vue from 'vue';
import Vuex from 'vuex';
// 引入模块
// 模块文件名，应该跟业务模块名称保持一致。
import app from './app';

// 使用Vuex，状态管理插件
Vue.use(Vuex);

// 创建并对外公开这个Vuex实例
export default new Vuex.Store({
  modules: {
    app,
  },
});
