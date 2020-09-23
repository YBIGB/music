<template>
  <div class="abCompo">
    <base href="/" />
    <div class="albumImg">
      <img class="albumCover" :src="album.coverImgUrl" alt />
    </div>
    <p class="albumName">{{album.name}}</p>
    <span class="playCount">
      <i class="el-icon-caret-right"></i>
      <span
        class="number"
      >{{album.playCount>100000000?Math.floor(album.playCount/100000000)+'亿':(album.playCount>10000?Math.floor(album.playCount/10000)+'万':album.playCount)}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: ["album"],
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
  /* height: 150px; */
  float: left;
  margin: 5px;
}
.albumImg {
  width: 120px;
  height: 120px;
}
.albumCover {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.playCount {
  display: inline-block;
  background: url("../../../../../assets/images/totalPlay.png") no-repeat;
  width: 70px;
  height: 30px;
  position: absolute;
  right: 3px;
  top: 3px;
  /* background-size: 100% 100%; */
  background-size: cover;
  transform: scale(0.8);
  text-align: center;
  font-weight: bold;
}
.el-icon-caret-right {
  color: #eee;
  margin-left: 5px;
}
.number {
  color: #eee;
  font-size: 12px;
  transform: scale(0.8);
  line-height: 30px;
}
.albumName {
  font-weight: bold;
  color: #333;
}
</style>
