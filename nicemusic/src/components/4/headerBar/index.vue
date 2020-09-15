<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="#000"
    active-text-color="red"
    router
  >
    <img src="../../../assets/images/logo_black.png" alt="search" class="logo"/>

    <el-menu-item index="home">发现音乐</el-menu-item>
    <el-menu-item index="home/rank">排行榜</el-menu-item>
    <el-menu-item index="home/album">歌单</el-menu-item>
    <el-menu-item index="home/singer">歌手</el-menu-item>
    <i class="el-icon-search"></i>
    <div class="line"></div>
    <el-button ></el-button>
  </el-menu>
</template>
<script>
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
  .logo{
    float: left;
   margin-top: 15px;
}
</style>
