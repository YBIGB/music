<template>
  <div class="recommend-music">
    <h2 class="title">推荐新歌曲</h2>
    <song-list :songList="songs"></song-list>
  </div>
</template>
<script>
  import songList from '../../../views/Ftest/songList/Index'
  // import { createSong } from '../../../views/Ftest/song'
  export default {
    data() {
      return {
        songs: []
      }
    },
    components: {
      songList
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      // 获取推荐新音乐
      async getNewSongs() {
        try {
          let res = await this.$api.getNewSongs()
          let list = []
          if(res.code === 200) {
            res.result.map(item => {
              list.push(item.id)
            })
            this.getSongDetail(list)
          }
        } catch (error) {
          console.log(error)
        }
      },
      // 获取歌曲列表
      async getSongDetail(sliceArr) {
        let timestamp = new Date().valueOf()
        sliceArr = sliceArr.join(',')
        try {
          let res = await this.$api.getSongDetail(sliceArr, timestamp)
          this.songs = this._normalizeSongs(res.songs)
          console.log(this.songs)
        } catch (error) {
        }
      },
      // 处理歌曲
      _normalizeSongs(list) {
        let ret = []
        list.map(item => {
          if (item.id) {
            ret.push(createSong(item))
          }
        })
        return ret
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getNewSongs()
    }
  }
</script>
<style scoped>
  .recommend-music .title {
      margin: 0 0 15px 0;
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

