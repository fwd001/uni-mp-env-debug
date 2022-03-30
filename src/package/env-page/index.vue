<template>
  <div class="wx-env-warp">
    <div class="wx-env__switch">
      <div class="title">切换环境</div>
      <radio-group class="switch__group" @change="radioChange">
        <label class="group__radio" v-for="item in envList" :key="item.env">
          <radio :value="item.env" :checked="value === item.env" />
          {{ item.name }}
        </label>
      </radio-group>
      <div class="switch__current">
        当前在 <span style="color: red">{{ currentEnvName }}</span> 环境
      </div>
    </div>
    <div class="wx-env__button-group">
      <button class="button-group__btn" type="primary" @click="onReLoad">
        重新加载
      </button>
      <button class="button-group__btn" type="warn" @click="onClear">
        清除缓存
      </button>
    </div>

    <div class="custom-request-header">
      <div class="title" style="margin-bottom: 20px">自定义请求头</div>

      <div class="edit-input">
        <div
          v-for="(item, index) in ctHeaderList"
          :key="item._key"
          class="edit-item"
        >
          <input v-model="ctHeaderList[index].key" type="text" />
          <span style="margin: 0 4px">:</span>
          <input v-model="ctHeaderList[index].value" type="text" />

          <span :class="['item', 'options']" @click="fnDelDynamically(item)">
            -
          </span>
        </div>
      </div>

      <div class="wx-env__button-group">
        <button
          class="button-group__btn"
          type="primary"
          @click="fnAddDynamically"
        >
          +
        </button>
        <button
          class="button-group__btn"
          type="primary"
          @click="fnSaveCtHeader"
        >
          保存
        </button>
        <button class="button-group__btn" type="warn" @click="fnClearCtHeader">
          清除
        </button>
      </div>
      <div class="wx-env__button-group">
        <button class="button-group__btn" type="primary" @click="fnWriteH5">
          写入h5
        </button>
        <button
          class="button-group__btn"
          type="warn"
          @click="fnClearCtHeaderWriteH5"
        >
          清除h5
        </button>
      </div>
    </div>
    <view class="safe-area" />
  </div>
</template>

<script>
import { getLocalStorage, setLocalStorage, deepClone } from "../utils";
import {} from "lodash-es";
// 本地数据
let localData = {
  defaultTemp: [{ key: "", value: "", _key: "1" }],
};

export default {
  data() {
    return {
      envList: [
        { env: "stg", name: "stg-开发" },
        { env: "pre", name: "pre-预发" },
        { env: "prd", name: "prd-生产" },
      ],
      ctHeaderList: [],
    };
  },

  props: {
    value: {
      type: String,
      default: "stg",
    },
    currentEnv: {
      type: String,
      default: "stg",
    },
  },
  computed: {
    currentEnvName() {
      const current = this.envList.find((v) => v.env === this.currentEnv);
      return current.name;
    },
  },

  created() {
    this.init();
  },
  methods: {
    init() {
      const data = getLocalStorage() || deepClone(localData.defaultTemp);
      this.ctHeaderList = data;
    },
    radioChange(e) {
      const value = e.detail.value;
      this.$emit("input", value);
    },
    // 重新加载
    onReLoad() {
      this.$emit("onReLoad");
    },
    // 清除缓存
    onClear() {
      this.$emit("onClear");
    },
    fnDelDynamically(item) {
      let _key = null;
      try {
        _key = item._key;
        if (this.ctHeaderList.length <= 1) return;
        this.ctHeaderList = this.ctHeaderList.filter((v) => v._key !== _key);
      } catch (error) {
        console.log("error", error);
      }
    },
    fnAddDynamically() {
      this.ctHeaderList.push({
        key: "",
        value: "",
        _key: new Date().valueOf(),
      });
      this.$nextTick(() => {
        uni.pageScrollTo({
          scrollTop: 1000,
        });
      });
    },
    fnSaveCtHeader() {
      setLocalStorage(this.ctHeaderList);
      this.$emit("saveHeader", this.ctHeaderList);
    },
    fnClearCtHeader() {
      this.ctHeaderList = deepClone(localData.defaultTemp);
      this.$nextTick(() => {
        setLocalStorage(this.ctHeaderList);
        this.$emit("clearHeader");
      });
    },
    fnWriteH5() {
      this.$emit("writeH5", this.ctHeaderList);
    },
    fnClearCtHeaderWriteH5() {
      this.$emit("clearH5");
    },
  },
};
</script>

<style lang="scss" scoped>
// 全面屏、刘海屏适配（iphoneX适配）及安全区设置
.safe-area {
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.wx-env-warp {
  padding: 28rpx;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  .title {
    font-size: 50rpx;
    margin-bottom: 88rpx;
  }
  .wx-env__switch {
    margin-bottom: 120rpx;
    .switch__group {
      display: flex;
      margin-bottom: 88rpx;
      .group__radio {
        flex: 1;
      }
    }
    .switch__current {
      font-size: 50rpx;
    }
  }
  .wx-env__button-group {
    display: flex;
    flex-wrap: wrap;
    .button-group__btn {
      flex: 1;
      margin: 0 24rpx;
      margin-bottom: 24rpx;
    }
  }

  .custom-request-header {
    padding-top: 40rpx;
    font-size: 22px;
    .item {
      margin-left: 8px;
      padding: 0 10px;
      white-space: nowrap;
      border-radius: 5px;
      color: #fff;
      &.options {
        background-color: #e64340;
      }
      &.disabled {
        background-color: #d4a2a1;
      }
    }
    .edit-input {
      margin-bottom: 20px;
    }
    .edit-item {
      display: flex;
      margin-bottom: 10px;
      justify-content: center;
      input {
        color: #333;
        width: 110px;
        border: none;
        border-radius: 5px;
        height: 37px;
        border: 1px solid #ccc;
        &:nth-of-type(1) {
          width: 150px;
        }
      }
    }
  }
}
</style>
