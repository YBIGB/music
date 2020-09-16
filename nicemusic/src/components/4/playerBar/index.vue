<template>
  <div id="app">
      <img src="" alt="歌曲封面" title="歌曲封面">
      <span id="songname"></span>
      <span class="singer"></span>
      <i class="el-icon-caret-left"></i>
      <i class="el-icon-caret-right"></i>
      <i class="el-icon-video-pause" v-show="pp"></i>
      <i class="el-icon-video-play" v-show="!pp"></i>

      
    <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="time" :show-tooltip="false"></el-slider>
  </div>
      

  
      <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="voice" :show-tooltip="false"></el-slider>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pp:true,
      time:0,
      voice:0
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
#app {
  height: 100px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: turquoise 0 0 10px;
  }
</style>
