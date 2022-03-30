<!--
 * @Author: wedong.fu
 * @Date: 2022-02-14 10:59:21
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:46:02
 * @Description: 请填写简介
-->
<template>
  <view class="page-index">
    <view>微信小程序切换环境 测试页面 </view>
    <!-- 环境变量 -->
    <env-button :visible="isShowEnvBtn" @to="onSwitch" />
  </view>
</template>
<script>
import EnvButton from "uni-mp-env-debug/ui/env-button";
import { getLocalStorage } from "uni-mp-env-debug/ui";

export default {
  components: {
    EnvButton,
  },
  data() {
    return {
      // 非生产环境 显示
      isShowEnvBtn: true,
    };
  },
  onShow: function (options) {
    const data = getLocalStorage();
    console.log('onShow:::',data);
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
</script>

<style lang="scss">
page {
  height: 100%;
}
.page-index {
  height: 100%;
  background-color: rgb(0, 255, 55);
}
</style>
