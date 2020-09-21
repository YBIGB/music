<template>
  <div>
    <h4>推荐歌曲</h4>
    <el-row :gutter="30">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">
        <div class="list">
          <div
            class="item"
            :class="numClass"
            v-for="item of sheetList"
            :key="item.id"
            @click="toDetail(item)"
          >
            <div class="wrapper">
              <a>
                <div class="cover">
                  <div class="image">
                    <el-image
                      :key="item.picUrl || item.coverImgUrl + '?param=300y300'"
                      :src="item.picUrl || item.coverImgUrl + '?param=300y300'"
                      lazy
                    >
                      <div
                        slot="placeholder"
                        class="image-slot flex-center flex-column"
                      >
                        <i class="iconfont niceicon-3"></i>
                        <p>加载中<span class="dot">...</span></p>
                      </div>
                      <div slot="error" class="image-slot flex-center">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </div>
                  <div class="count">
                    <i class="arrow"></i>
                    <span>{{ utils.tranNumber(item.playCount, 0) }}</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="info">
              <h2 class="name ellipsis-two">
                {{ item.name }}
              </h2>
            </div>
          </div>
        </div>
        <img src="../../../assets/images/musiclist.png">
      </div></el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">
        <img src="../../../assets/images/musiclist.png">
      </div></el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <br>
    <el-row :gutter="30">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">
        <img src="../../../assets/images/musiclist.png">
      </div></el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">
        <img src="../../../assets/images/musiclist.png">

      </div></el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'recommendMusic',
    data() {
      return {
        banners: [],
        sleet:[]
      }
    },
    computed: {

    },
    methods: {
      sheetList(){}
    },
    mounted() {

    }
  }
</script>

<style scoped>
  /*.el-col {*/
  /*  border-radius: 4px;*/
  /*}*/
  /*.bg-purple-dark {*/
  /*  background: #99a9bf;*/
  /*}*/
  div h4 {
    text-indent: 4vw;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 80px;
  }
  .grid-content img {
    width: 45vw;
  }
</style>
