<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    // api =  https://www.bilibili.com/
    onMounted(async () => {
      // 写法1,直接调用axios 在内部method属性声明
      axios({
        method: "get",
        url: `api/index/ding.json`,
      }).then((res) => {
        console.log(res);
      });

      // 写法2, 调用axios的get方法
      axios.get("api/index/ding.json").then((res) => {
        console.log(res);
      });
    });
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
