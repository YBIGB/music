<template>
  <div id="app">
    <el-row>
      <el-col :span="4" id="col1">
        <img
          src=""
          alt="歌曲封面"
          title="歌曲封面"
          class="cover"
        />
        <span id="songname">薛定谔的猫</span>
        <span id="singer">薛定谔</span>
      </el-col>

      <el-col :span="4" style="font-size:40px" id="col2">
        <i class="el-icon-caret-left"></i>
        <i class="el-icon-video-pause" v-show="pp"></i>
        <i class="el-icon-video-play" v-show="!pp"></i>
        <i class="el-icon-caret-right"></i>
      </el-col>

      <el-col :span="5" id="col3">
        <div class="block">
          <span>1</span>
          <el-slider v-model="time" :show-tooltip="false"></el-slider>
          <span>10</span>
        </div>
      </el-col>

      <el-col :span="5" id="col4">
        <div class="block">
          <img
            src="../../../assets/images/音量.png"
            alt=""
            style="height:20px"
          />
          <el-slider v-model="voice" :show-tooltip="false"></el-slider>
        </div>
      </el-col>

      <el-col :span="4" id="col5">
        <div class="block">
          <img
            src="../../../assets/images/列表循环.png"
            alt=""
            style="height:20px"
            v-if="mode == 1"
          />
          <img
            src="../../../assets/images/单曲循环.png"
            alt=""
            style="height:20px"
            v-else-if="mode == 2"
          />
          <img
            src="../../../assets/images/随机播放.png"
            alt=""
            style="height:20px"
            v-else
          />

          <img
            src="../../../assets/images/歌词未点击.png"
            alt=""
            style="height:20px"
          />
          <img
            src="../../../assets/images/歌单.png"
            alt=""
            style="height:20px"
          />
        </div>
      </el-col>
      <div id="word" v-show="word">1232132131232</div>
      
    </el-row>

  </div>
</template>
<script>
export default {
  data() {
    return {
      pp: false,
      word:false,
      time: 0,
      voice: 0,
      mode: 1,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
#app {
  position: relative;
  z-index: 999;
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: turquoise 0 0 10px;
  .block {
    display: inline-block;
    width: 200px;
    font-size: 12px;
  }
  img {
    height: 80px;
  }
}

#col1 {
  position: relative;
  .cover {
    margin: 10px 0 0 10px;
  }
  #songname{
    position: absolute;
    top: 30px;
    left: 120px;
  }
 #singer{
    position: absolute;
    top: 60px;
    left: 120px;
 }
}

#col2{
  position: relative;
  i{
    position: relative;
    top: 20px;
    cursor: pointer;
  }
}

#col3{
  position: relative;
  .block{
    position: relative;
    top: 10px;
    div{
      display: inline-block;
      width: 200px;
      margin: 0 10px;
    }
    span{
     position: relative;
      left:100px;
    }
  }
}

#col4{
  img{
    position: relative;
    left: 85px;
    top: 63px;
  }
}

#col5{
  img{
    margin: 30px 20px 0 20px;
  }
}

#word{
  width:500px;
  height: 600px;
  background-color: white;
  position: absolute;
  right: 0;
  bottom: 80px;
  z-index: 999;
}
</style>
