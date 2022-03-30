# uni-mp-env-debug

## 介绍

基于 uni-app 小程序环境 预览版环境切换 最佳实践

![演示gif](https://ops-img-static.huolala.cn/imgs/2021/162755127418700142874650.gif)

### 详细组件说明

<!-- - [env-button按钮](./docs/uni-mp-env-debug/components/env-button.md) -->
<!-- - [env-page页面](./docs/uni-mp-env-debug/components/env-page.md) -->

- [env-button 按钮](#env-button-debug按钮)
- [env-page 页面](#env-page-debug页面)

## Demo 快速开始

```bash
yarn install
yarn serve
yarn build
```

# env-button debug 按钮

### 介绍

微信小程序切换环境 按钮

### 代码演示

#### 引入

```javascript
import EnvButton from "uni-mp-env-debug/ui/env-button";

export default {
  components: {
    EnvButton,
  },
};
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

| 属性    | 说明                                               | 类型    | 默认值 |
| :------ | :------------------------------------------------- | :------ | :----- |
| visible | 是否显示。若要允许组件自己关闭，请增加 sync 属性。 | boolean | false  |
| z-index | 对话框的层级。优先级高于 dialog-style              | number  | 1      |
| top     | 距离顶部距离                                       | String  | "23%"  |

#### events

| 名称 | 说明                                   | 返回值 |
| :--- | :------------------------------------- | :----- |
| to   | 点击后触发事件（建议跳转切换环境页面） | -      |

# env-page debug 页面

### 介绍

微信小程序切换环境 页面

### 代码演示

#### 引入

```javascript
import EnvPage from "uni-mp-env-debug/ui/env-page";

export default {
  components: {
    EnvPage,
  },
};
```

#### 基础用法

```html
<!-- 环境变量 -->
<env-page
  :currentEnv="currentEnv"
  v-model="apiEnv"
  @onClear="onClear"
  @onReLoad="onReLoad"
  @saveHeader="onSaveHeader"
  @clearHeader="onClearHeader"
  @writeH5="onWriteH5"
  @clearH5="onClearH5"
/>
```

```javascript
import { mapMutations } from "vuex";
// 全局数据使用
import { setLocalStorage, getLocalStorage } from "uni-mp-env-debug/ui";

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
  onShow: function (options) {
    const ctHeader = getLocalStorage();
    console.log('onShow:::',ctHeader);
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

| 名称        | 说明                             | 返回值 |
| :---------- | :------------------------------- | :----- |
| onClear     | 清除缓存点击后触发事件           | -      |
| onReLoad    | 重新加载点击后触发事件           | -      |
| saveHeader  | 自定义请求头点击保存触发事件     | -      |
| clearHeader | 自定义请求头点击清除触发事件     | -      |
| writeH5     | 自定义请求头点击写入 h5 触发事件 | -      |
| writeH5     | 自定义请求头点击清除 h5 触发事件 | -      |

#### common function
`import { setLocalStorage, getLocalStorage } from "uni-mp-env-debug/ui";`

| 名称     | 说明                   | 返回值 |
| :------- | :--------------------- | :----- |
| setLocalStorage  | 修改本地自定义请求头全局数据 | -      |
| getLocalStorage | 获取本地自定义请求头全局数据 | -      |