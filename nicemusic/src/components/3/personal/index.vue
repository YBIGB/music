<template>
  <div class="container">
    <div class="topBg">
      <!-- <el-row :gutter="20">
        <el-col :span="5" :offset="3">
          <personal-detail></personal-detail>
        </el-col>
        <el-col :span="9">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>-->
      <div class="main">
        <div class="box personalDetail">
          <personal-detail></personal-detail>
        </div>
        <div class="box personalSongs">
          <personal-songs></personal-songs>
        </div>
        <div class="box personalAlbum" >
          <personal-album></personal-album>
          <personal-album></personal-album>
          <personal-album></personal-album>
          <personal-album></personal-album>
          <personal-album></personal-album>
          
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import personalDetail from "./personalDetail";
import personalSongs from "./personalSongs/index";
import personalAlbum from "./personalAlbum/index";
export default {
  name: "Personal",
  components: {
    personalDetail,
    personalSongs,
    personalAlbum,
  },
};
</script>

<style lang='less' scoped>
.container {
  margin-bottom: 200px;
  // overflow: hidden;
  font-size: 12px;
}
.clear {
  clear: both;
}
.el-button--danger {
  color: #fff;
  background-color: #f94622 !important;
  border-color: #fa2800;
}
.el-button--danger:focus,
.el-button--danger:hover {
  color: #fff;
  background-color: #fa2800;
  border-color: #c52100;
}
.topBg {
  background: url("../../../assets/images/personal.jpg") no-repeat 0 -150px;
  // background-size: 100% 450px;
  width: 100%;
  height: 150px;
  padding-top: 200px;
}
.main {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0 0 0;
  // overflow: hidden;
}
.box {
  margin: 0 10px;
  float: left;

  width: 100%;
  background: #fff;
  border-radius: 5px;
  // box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}
.personalDetail {
  width: 280px;
}
.personalSongs {
  width: 580px;
  position: relative;
  top: 150px;
}
.personalAlbum {
  width: 280px;
  position: relative;
  top: 150px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
