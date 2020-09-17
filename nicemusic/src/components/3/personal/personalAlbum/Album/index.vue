<template>
  
    <div class="abCompo">
      <img class="albumCover" src="../../../../../assets/images/zhou.jpg" alt />
      <p class="albumName">歌单名称</p>
      <span class="playCount">
        <i class="el-icon-caret-right"></i>
        <span class="number">999</span>
      </span>
    </div>
  
</template>

<script>
export default {
  name: "Album",
};
</script>

<style lang='css' scoped>
/* div {
  overflow: hidden;
  width: 120px;
} */
.abCompo {
  position: relative;
  width: 120px;
  float: left;
  margin: 5px;
}
.albumCover {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.playCount {
  display: inline-block;
  background: url("../../../../../assets/images/totalPlay.png") no-repeat;
  width: 50px;
  height: 30px;
  position: absolute;
  right: 3px;
  top: 3px;
  /* background-size: 100% 100%; */
  background-size: cover;
  transform: scale(0.8);
  font-weight: bold;
}
.el-icon-caret-right {
  color: #eee;
  margin-left: 5px;
}
.number {
  color: #eee;
  font-size: 12px;
  line-height: 30px;
}
.albumName {
  font-weight: bold;
  color: #333;
}
</style>
