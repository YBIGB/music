<template>
  <div>
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
    <img
      src="../../../assets/images/logo_black.png"
      alt="search"
      class="logo"
    />

    <el-menu-item index="/found" class="active">发现音乐</el-menu-item>
    <el-menu-item index="/rank">排行榜</el-menu-item>
    <el-menu-item index="/album">歌单</el-menu-item>
    <el-menu-item index="/singer">歌手</el-menu-item>
    <router-link to="/login">登录</router-link>
    <i class="el-icon-search"></i>
  </el-menu>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      x:200,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-demo{
  width: 100%;
  margin-left:0px ;
  position: fixed;
  top: 0;
}
.logo {
  float: left;
  margin: 15px 20px 0 10px ;
  outline: none;
}
i,a{
  float: right;
  display: inline-block;
  line-height:60px;
  margin-right:70px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  &:hover{
    color: red;
  }
}

</style>
