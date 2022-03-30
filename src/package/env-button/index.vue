<template>
  <view
    v-if="visible"
    class="wx-env-button"
    :style="{ zIndex: zIndex, top: top }"
    @click="onSwitch"
  >
    <img
      class="wx-env-button__img"
      src="https://ops-img-static.huolala.cn/imgs/2021/162504342528991178264392.png"
      alt="debug"
    />
  </view>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    top: {
      type: String,
      default: "23%",
    },
  },
  data() {
    return {};
  },
  methods: {
    onSwitch() {
      this.$emit("to");
    },
  },
};
</script>

<style lang="scss" scoped>
.wx-env-button {
  width: 80rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  position: fixed;
  right: 0;
  top: 25%;
  z-index: 1;
  .wx-env-button__img {
    width: 100%;
    height: 100%;
  }
}
</style>
