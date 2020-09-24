<template>
    <div class="main">
        <!-- 背景图片 -->
        <div class="imgBackground" :style="imgBackground">
        </div>
        <div :style="backgound">
            <!-- 歌手信息 -->
            <div class="demo-basic--circle">
                <div class="block">
                    <img :size="120" :src="circleUrl" class="circleStyle">
                    <div style="text-align:center;">
                        <div style="text-align:center">
                          <!-- <p class="nickname">
                              {{ detail.name }}
                              <i class="iconfont" :class="gender"></i>
                            </p> -->
                            <h2 style="color:white;display:inline-block">毛不易</h2>
                            <i class="el-icon-male" :class="gender" style="color:blue;text-indent:10px;"></i>
                        </div>
                            <el-button class="addbtn" :style="btn2" round>
                                <span class="add">+</span>&nbsp;&nbsp;关注TA</el-button> 
                        <p>
                            毛不易，原名王维家，1994年10月1日出生于黑龙江省齐齐哈尔市泰来县，
                            中国内地流行乐男歌手，毕业于杭州师范大学护理专业。2017年，参加选
                            秀娱乐节目《明日之子》的比赛，获得全国总决赛冠军，从而正式进入演
                            艺圈；9月1日，…
                        </p>
                        <ul id="example-1">
                            <!-- <li v-for="item in items1" :key="item.message">
                                {{ item.message1 }}
                            </li> -->
                            <li style="margin-left:155px">226</li>
                            <li style="margin-left:145px">27</li>
                            <li style="margin-left:145px">57</li>
                            <li>5157340</li>
                        </ul>
                        <ul id="example-1-1">
                            <!-- <li v-for="item in items11" :key="item.message">
                                {{ item.message2 }}
                            </li> -->
                            <li>单曲数</li>
                            <li>专辑数</li>
                            <li>MV数</li>
                            <li>粉丝数</li>
                        </ul>
                    </div>
                </div>
            </div>
             <img :src="imgSrc1" :style="img1Style1">
        </div>
        
        <div class="section">
            <!-- 中间导航栏 -->
            <div>
                <ul id="example-2">
                    <li>
                       <router-link to="/singerDetails/songs">作品</router-link>
                    </li>
                    <li>
                        <a>专辑</a>
                    </li>
                    <li>
                        <a>MV</a>
                    </li>
                    <li>
                        <router-link to="/singerDetails/work">歌手详情</router-link>
                    </li>
                    <li>
                        <router-link to="/singerDetails/similar">相似歌手</router-link>
                    </li>
                </ul>
            </div>
            <!-- 播放按钮 -->
            <div>
                <el-row> 
                    <el-button class="btn" :style="btn1" type="danger" round>
                        <i class="el-icon-caret-right"></i>
                        播放全部
                    </el-button>
                </el-row>
            </div>
            <router-view></router-view>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { createSong } from '@/model/song'
// import { createVideo } from '@/model/video'
// import ArtistList from 'components/common/artistList/Index'
// import AlbumList from 'components/common/albumList/Index'
// import MvList from 'components/common/mvList/Index'
// import SingerItem from 'components/common/singerItem/Index'
  export default {
    name:'singer',
    data() {
      return {
        // 歌手基本信息
        singerDetail: {},
        // 歌手用户信息
        userDetail: {},
        // 歌手简介
        singerDesc: {},
        // 热门单曲
        songs: [],
        // 专辑
        albums: [],
        // 相似歌手
        singers: [],
        // 歌手MV
        mvs: [],
        // 歌手id
        singerId: '',
        //   背景图片
        imgBackground: {
            backgroundImage: "url(" + require("@/assets/images/top-bg1.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition:"center",
            width: "100%",  
            height:"600px", 
            // marginTop:"30px"
        },
        backgound:{
            backgroundColor:"rgba(0,0,0,0.6)",
            marginTop:"-600px",
            width: "100%",  
            height:"600px", 
        },
        imgSrc1:require("../../../../assets/images/arrow-lr.png"),
        img1Style1:{
            width:"100%",
            position:"relative",
            top:"-30px"
        },
        // 歌手头像
        circleUrl:require("../../../../assets/images/singer.jpg"),
        btn2:{
            display:"block",
            margin:"0px auto",
            backgroundColor:"rgba(255,255,255,0.1)",
            border:"1px solid #999",
            color:"white",
        },
        // 播放按钮
        btn1:{
            backgroundColor:"rgb(198,47,47)",
            float:"right",
            border:"0",
            margin:"10px",
        },

      }
    },
    computed: {
      ...mapGetters(['singer']),
      //合并歌手详情
      detail() {
        return Object.assign(this.singerDetail, this.userDetail)
      },
      // 设置歌手性别
      gender() {
        if (this.detail.gender > 0) {
          return this.detail.gender === 1
            ? 'niceCRM_icon_nanxing man'
            : 'niceCRM_icon_nvxing woman'
        } else {
          return ''
        }
      },
    },
    watch: {
      $route() {
        let id = this.$route.query.id || this.singer.id
        if (id) {
          this._initialize(id)
        }
      }
    },
    methods: {
    // 获取歌手基本信息和热门50首单曲
    async getArtists(id) {
      try {
        let res = await this.$api.getArtists(id)
        if (res.code === 200) {
          this.singerDetail = res.artist
          this.getUserDetail(res.artist.accountId)
        }
        this.songs = this._normalizeSongs(res.hotSongs)
        this.getArtistAlbum(id)
        this.getArtistMv(id)
      } catch (error) {
        console.log(error)
      }
    },
    // 获取(歌手)用户信息
    async getUserDetail(uid) {
      let detail = {}
      try {
        let res = await this.$api.getUserDetail(uid)
        let profile = res.profile
        if (res.code === 200) {
          detail.level = res.level
          detail.followeds = profile.followeds
          detail.gender = profile.gender
          this.userDetail = detail
        }
      } catch (error) {
        detail.level = ''
        detail.followeds = ''
        detail.gender = ''
        this.userDetail = detail
      }
    },
    // 获取歌手简介
    async getArtistDesc(id) {
      try {
        let res = await this.$api.getArtistDesc(id)
        if (res.code === 200) {
          if (res.introduction.length > 0) {
            res.introduction.map(item => {
              item.txt = item.txt.replace(/(\r\n|\n|\r)/gm, '<br />')
            })
          }
          this.singerDesc = res
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取相似歌手
    async getArtistSimi(id) {
      try {
        let res = await this.$api.getArtistSimi(id)
        if (res.code === 200) {
          this.singers = res.artists
        }
      } catch (error) {
        console.log(error)
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
    },
    //初始化
    _initialize(id) {
      this.active = 1
      this.albumOffset = 0
      this.mvOffset = 0
      this.albums = []
      this.mvs = []
      this.singerId = Number(id)
      this.getArtists(id)
      this.getUserDetail(id)
      this.getArtistDesc(id)
      this.getArtistSimi(id)
    }
  },
  }
</script>

<style lang="less" scoped>
    .block{
        display: block;
        padding-top: 100px;
    }
    .btn:hover i{
       transform: translate(-4px) scale(1.4);
       transition: 0.3s linear;
    }
    .addbtn:hover{
        opacity: 0.8;
        transition: 0.2s linear;
    }
    .addbtn .add{
        display: inline-block;
       font-size: 18px;
       vertical-align: middle;
    }
    .circleStyle{
        display: block;
        margin:0px auto;
        width: 120px;
        border:4px solid white;
        border-radius: 50%;
    }
    .circleStyle:hover{
        box-shadow:-4px 4px 8px white;
        opacity: 0.9;
        transition: 0.2s ease-in-out;
    }
    .block p{
        width: 760px;
        height: 48px;
        font-size: 14px;
        font-weight: bolder;
        color: hsla(0,0%,100%,.6);
        line-height: 24px;
        margin: 35px auto;
    }
    #example-1{
        margin-left: -155px;
    }
    #example-1 li{
        width: 50px;
        color: white;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin-left: 125px;
    }
    #example-1-1{
        margin-top: 0;
        margin-left: -170px;
    }
    #example-1-1 li{
        color: hsla(0,0%,100%,.6);
        font-weight: 400;
        margin-left: 135px;
    }
    #example-2 li a:link{
        color: #4a4a4a;
        text-decoration: none;
    }
    #example-2 li a:visited{
        color: #4a4a4a;
        text-decoration: none;
    }
    #example-2 li a:hover{
        color: rgb(198, 47, 47);
        text-decoration: none;
    }
    #example-2 li a:active{
        color: rgb(198, 47, 47);
        text-decoration: none;
    }
    ul{
        text-align: center;
        margin-top: 25px;
        margin-left: -45px;
    }
    ul li{
        list-style: none;
        display: inline;
        margin-left: 30px;
        font-size:15px;
        font-weight: bold;
        color: #4a4a4a;
    }
</style>