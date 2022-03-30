<!--
 * @Author: wedong.fu
 * @Date: 2021-08-02 14:49:39
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:45:40
 * @Description: 请填写简介
-->
# env-page debug页面

### 介绍

微信小程序切换环境 页面

### 代码演示

#### 引入

```javascript
import Vue from "vue";
import { EnvPage } from "uni-mp-env-debug/ui/env-button";

Vue.use(EnvPage);
```

#### 基础用法

```html
<!-- 环境变量 -->
<env-page
  :currentEnv="currentEnv"
  v-model="apiEnv"
  @onClear="onClear"
  @onReLoad="onReLoad"
/>
```

```javascript
import { mapMutations } from "vuex";

const DEFAULTAPIENV = "stg";

export default {
  data() {
    return {
      apiEnv: DEFAULTAPIENV,
      currentEnv: DEFAULTAPIENV,
    };
  },
  onLoad(options) {
    this.init();
  },
  methods: {
    ...mapMutations(["saveApiEnv"]),
    init() {
      // 获取缓存当前环境
      const { apiEnv } = this.$store.state.app;
      this.apiEnv = apiEnv;
      this.currentEnv = apiEnv;
    },
    // 重新加载
    onReLoad() {
      console.log("切换环境", this.apiEnv);
      this.saveApiEnv(this.apiEnv);
      uni.navigateBack();
    },
    // 清除缓存
    onClear() {
      console.log("清除缓存，转为生成环境");
      uni.clearStorageSync();
      uni.navigateBack();
    },
  },
};
```

:::

### API

#### props

| 属性       | 说明         | 类型   | 默认值 |
| :--------- | :----------- | :----- | :----- |
| v-model    | 选中环境     | String | "stg"  |
| currentEnv | 当前所在环境 | String | "stg"  |

#### events

| 名称     | 说明                   | 返回值 |
| :------- | :--------------------- | :----- |
| onClear  | 清除缓存点击后触发事件 | -      |
| onReLoad | 重新加载点击后触发事件 | -      |
