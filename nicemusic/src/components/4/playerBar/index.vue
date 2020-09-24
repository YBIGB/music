<template>
  <div id="app">
    <audio :src="currentUrl" controls></audio>

    <el-row>
      <el-col :span="4">
        <img src="" alt="歌曲封面" title="歌曲封面" class="cover" />
        <span id="songname">薛定谔的猫</span>
        <span id="singer">薛定谔</span>
      </el-col>

      <el-col :span="4">
        <i class="el-icon-caret-left"></i>
        <i class="el-icon-video-pause" v-show="pp"></i>
        <i class="el-icon-video-play" v-show="!pp"></i>
        <i class="el-icon-caret-right"></i>
      </el-col>

      <el-col :span="1">
        <span>1</span>
      </el-col>
      <el-col :span="3">
        <el-slider v-model="time" :show-tooltip="false" />
      </el-col>

      <el-col :span="1">
        <span>10</span>
      </el-col>

      <el-col :span="1">
        <img src="../../../assets/images/音量.png" alt="" style="height:20px" />
      </el-col>

      <el-col :span="4">
        <el-slider v-model="voice" :show-tooltip="false" />
      </el-col>

      <el-col :span="4">
        <img src="../../../assets/images/列表循环.png" v-if="mode == 1" />
        <img src="../../../assets/images/单曲循环.png" v-else-if="mode == 2" />
        <img src="../../../assets/images/随机播放.png" v-else />
        <img src="../../../assets/images/歌词未点击.png" />
        <img src="../../../assets/images/歌单.png" alt="" style="height:20px" />
      </el-col>
      <div id="word" v-show="word">1232132131232</div>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pp: false,
      word: false,
      time: 0,
      voice: 0,
      mode: 1,
    };
  },
  methods: {},
  computed: mapState(["currentUrl"]),
};
</script>
<style lang="less" scoped>
#app {
  position: relative;
  z-index: 999;
  height: 50px;
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
  #songname {
  }
  #singer {
  }
}

#col2 {
  position: relative;
  i {
  }
}

#col3 {
  position: relative;
  .block {
    div {
    }
    span {
    }
  }
}

#col4 {
  img {
  }
}

#col5 {
  img {
  }
}

#word {
  width: 500px;
  height: 600px;
  background-color: white;
  position: absolute;
  right: 0;
  bottom: 80px;
  z-index: 999;
}
</style>
