<template>
  <div class="recommend-music">
<!--    <song-list :songList="songs"></song-list>-->
    <div class="news">
      <h4 class="title">
        推荐歌曲
      </h4>
      <div class="items">
        <div class="item" v-for="(item, index) in songs" :key="index">
          <div class="img-wrap">
            <!-- 封面 -->
            <img :src="item.picUrl" alt="" />
<!--            <span  class="iconfont icon-play"></span>-->
          </div>
          <div class="song-wrap ellipsis">
            <!-- 歌名 -->
            <div class="song-name ellipsis">{{ item.name }}</div>
            <!-- 歌手名 -->
            <div class="singer ellipsis">{{ item.song.artists[0].name }}</div>
            <div @click="playMusic(item.id)" class="playicon"><img src="../../../assets/images/cd.png"></div>
          </div>
        </div>
      </div>
    </div>
<!--    <audio :src='murl' controls autoplay></audio>-->

    <h4>推荐歌手</h4>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        songs: [],
        url: []
      }
    },
    components: {

    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    created() {
      axios({
        url: 'https://autumnfish.cn/personalized/newsong',
        method: 'get'
      }).then(res => {
        // console.log(res)
        this.songs = res.data.result
      })
    },
    methods: {
      playMusic(id) {
        // console.log(id)
        axios({
          url: 'https://autumnfish.cn/song/url',
          method: 'get',
          params: {
            id // id:id
          }
        }).then(res => {
          // console.log(res)
          let url = res.data.data[0].url
          // 设置给父组件的 播放地址
          this.$parent.musicUrl = url
          // console.log(this.$parent.musicUrl)

          // console.log(url)
        })
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less" scoped>
div h4 {
  text-indent: 4vw;
}
  .recommend-music .title {
      margin: 0 0 15px 0;
    }
 .items {
   display: flex;
   flex-wrap: wrap;
   margin-left: 6vw;
   margin-bottom: 4vw;
 }
 .item {
   flex: 0 0 43%;
   display: flex;
   width: 43%;
   align-items: center;
   margin-bottom: 2vw;
   margin-right: 3vw;
   padding: 0.8vw;
   /*background-color: #F9F9F9;*/
   background-color: #F8F8F8;
   border-radius: 5px;
 }
 .item:hover {
   background-color: #F0F1F1;
 }
  .img-wrap img {
    width: 5vw;
    height: 5vw;
    margin-left: 1vw;
  }
  .song-wrap {
    /*border: 1px black solid;*/
    width: 75%;
    height: 50%;
    margin-left: 2vw;
    text-overflow: ellipsis;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .song-wrap .song-name{
    /*border: 1px black solid;*/
    width: 60%;
    padding: 0.5vw;
    padding-left: 1vw;
    margin-right: 1vw;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .song-wrap .singer {
    /*border: 1px black solid;*/
    padding: 0.5vw;
    margin-left: 1vw;
    width: 50%;
    margin-right: 7vw;
  }
.playicon img{
  width: 3vw;
  height: 3vw;
}
</style>



<!--<template>-->
<!--  <div>-->
<!--    <h4>推荐歌曲</h4>-->
<!--    <el-row :gutter="30">-->
<!--      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">-->
<!--        <div class="list">-->
<!--          <div-->
<!--            class="item"-->
<!--            :class="numClass"-->
<!--            v-for="item of sheetList"-->
<!--            :key="item.id"-->
<!--            @click="toDetail(item)"-->
<!--          >-->
<!--            <div class="wrapper">-->
<!--              <a>-->
<!--                <div class="cover">-->
<!--                  <div class="image">-->
<!--                    <el-image-->
<!--                      :key="item.picUrl || item.coverImgUrl + '?param=300y300'"-->
<!--                      :src="item.picUrl || item.coverImgUrl + '?param=300y300'"-->
<!--                      lazy-->
<!--                    >-->
<!--                      <div-->
<!--                        slot="placeholder"-->
<!--                        class="image-slot flex-center flex-column"-->
<!--                      >-->
<!--                        <i class="iconfont niceicon-3"></i>-->
<!--                        <p>加载中<span class="dot">...</span></p>-->
<!--                      </div>-->
<!--                      <div slot="error" class="image-slot flex-center">-->
<!--                        <i class="el-icon-picture-outline"></i>-->
<!--                      </div>-->
<!--                    </el-image>-->
<!--                  </div>-->
<!--                  <div class="count">-->
<!--                    <i class="arrow"></i>-->
<!--                    <span>{{ utils.tranNumber(item.playCount, 0) }}</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="info">-->
<!--              <h2 class="name ellipsis-two">-->
<!--                {{ item.name }}-->
<!--              </h2>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div></el-col>-->
<!--      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">-->
<!--      </div></el-col>-->
<!--      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--    </el-row>-->
<!--    <br>-->
<!--    <el-row :gutter="30">-->
<!--      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">-->
<!--        <img src="../../../assets/images/musiclist.png">-->
<!--      </div></el-col>-->
<!--      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content bg-purple">-->
<!--        <img src="../../../assets/images/musiclist.png">-->

<!--      </div></el-col>-->
<!--      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--    </el-row>-->
<!--    <h4>推荐歌手</h4>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: 'recommendMusic',-->
<!--    data() {-->
<!--      return {-->
<!--        banners: [],-->
<!--        sleet:[]-->
<!--      }-->
<!--    },-->
<!--    computed: {-->

<!--    },-->
<!--    methods: {-->
<!--      sheetList(){}-->
<!--    },-->
<!--    mounted() {-->

<!--    }-->
<!--  }-->
<!--</script>-->


<!--<style scoped>-->
<!--  /*.el-col {*/-->
<!--  /*  border-radius: 4px;*/-->
<!--  /*}*/-->
<!--  /*.bg-purple-dark {*/-->
<!--  /*  background: #99a9bf;*/-->
<!--  /*}*/-->
<!--  div h4 {-->
<!--    text-indent: 4vw;-->
<!--  }-->
<!--  .bg-purple {-->
<!--    background: #ffffff;-->
<!--  }-->
<!--  .bg-purple-light {-->
<!--    background: #ffffff;-->
<!--  }-->
<!--  .grid-content {-->
<!--    border-radius: 4px;-->
<!--    min-height: 80px;-->
<!--  }-->
<!--  .grid-content img {-->
<!--    width: 45vw;-->
<!--  }-->
<!--</style>-->

