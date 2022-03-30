<!--
 * @Author: wedong.fu
 * @Date: 2021-08-02 14:49:39
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:45:36
 * @Description: 请填写简介
-->
# env-button debug按钮

### 介绍

微信小程序切换环境 按钮

### 代码演示

#### 引入

```javascript
import Vue from "vue";
import { EnvButton } from "uni-mp-env-debug/ui/env-button";

Vue.use(EnvButton);
```

#### 基础用法

```html
<!-- 环境变量 -->
<env-button :visible="isShowEnvBtn" @to="onSwitch" />
```

```javascript
export default {
  data() {
    return {
      // 非生产环境 显示
      isShowEnvBtn: true,
    };
  },
  methods: {
    // 非生产环境 去切换环境页面
    onSwitch() {
      uni.navigateTo({
        url: "/pages/wx-env/index",
      });
    },
  },
};
```

:::

### API

#### props

| 属性             | 说明                                               | 类型    | 默认值 |
| :--------------- | :------------------------------------------------- | :------ | :----- |
| visible          | 是否显示。若要允许组件自己关闭，请增加 sync 属性。 | boolean | false  |
| z-index          | 对话框的层级。优先级高于 dialog-style              | number  | 1  |
| top |           距离顶部距离             | String | "23%"   |

#### events

| 名称    | 说明                 | 返回值 |
| :------ | :------------------- | :----- |
| to | 点击后触发事件（建议跳转切换环境页面） | -      |
