<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="#000"
    active-text-color="red"
  >
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item
      ><img src="../../../assets/images/logo_black.png" alt="search"
    /></el-menu-item>
    <el-menu-item index="home/1">发现音乐</el-menu-item>
    <el-menu-item index="2">排行榜</el-menu-item>
    <el-menu-item index="3">歌单</el-menu-item>
    <el-menu-item index="4">歌手</el-menu-item>
    <el-menu-item index="5"><i class="el-icon-search"></i></el-menu-item>
  </el-menu>
</template>
<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
img {
  margin: 0 30px 5px 10px;
}
</style>
