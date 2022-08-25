<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger" @click="sum">{{ numComputed }}</el-button>
    </el-row>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    // ref reactive 是对象，想要获得值，必须要加上.value
    const num = ref(0);
    const num2 = ref(10);

    const sum = () => {
      numComputed.value = numComputed.value + numComputed.value;
    };

    const numComputed = computed({
      // 在没有进行任何操作之前get就会自动执行，计算属性numComputed会发生变化
      get: () => {
        console.log("调用了get方法");
        return num.value + num2.value;
      },

      // 当 手动设置了计算属性numComputed时，才触发set函数
      // 这里的回调参数val是numComputed.value
      set: (val) => {
        console.log("调用了set方法");
        console.log(val);
      },
    });

    console.log(numComputed.value); // 10
    return {
      sum,
      num,
      num2,
      numComputed,
    };
  },
};
</script>

