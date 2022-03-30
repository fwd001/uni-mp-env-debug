<!--
 * @Author: wedong.fu
 * @Date: 2022-02-14 11:02:26
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:46:06
 * @Description: 请填写简介
-->
<template>
  <env-page
    v-model="apiEnv"
    :currentEnv="currentEnv"
    @onClear="onClear"
    @onReLoad="onReLoad"
  />
</template>

<script>
import EnvPage from "uni-mp-env-debug/ui/env-page";
import { mapMutations } from "vuex";

const DEFAULTAPIENV = "stg";

// 本地数据
let localData = {
  options: {},
};

export default {
  components: {
    EnvPage,
  },
  data() {
    return {
      apiEnv: DEFAULTAPIENV,
      currentEnv: DEFAULTAPIENV,
    };
  },
  computed: {},
  onLoad(options) {
    localData.options = options;
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
      console.log("清除缓存，转为生产环境");
      uni.clearStorageSync();
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped></style>
