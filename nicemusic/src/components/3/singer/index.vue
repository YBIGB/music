<template>
  <div class="main">
    <!-- 背景图片 -->
    <div class="imgBackground" :style="imgBackground"></div>
    <div :style="backgound">
      <!-- 歌手信息 -->
      <div class="demo-basic--circle">
        <div class="block">
          <img :size="120" :src="circleUrl" class="circleStyle" />
          <div data-v-52441f16 class="level flex-center transition" style>
            <i data-v-52441f16 class="iconfont icon-level nicelevel-1"></i>
          </div>
          <div style="text-align:center;">
            <div style="text-align:center">
              <h2 style="color:white;display:inline-block">毛不易</h2>
              <i class="el-icon-male" style="color:blue;text-indent:10px;"></i>
            </div>
            <el-button class="addbtn" :style="btn2" round>
              <span class="add">+</span>&nbsp;&nbsp;关注TA
            </el-button>
            <p>
              毛不易，原名王维家，1994年10月1日出生于黑龙江省齐齐哈尔市泰来县，
              中国内地流行乐男歌手，毕业于杭州师范大学护理专业。2017年，参加选
              秀娱乐节目《明日之子》的比赛，获得全国总决赛冠军，从而正式进入演
              艺圈；9月1日，…
            </p>
            <ul id="example-1">
              <li v-for="item in items1" :key="item.message">{{ item.message1 }}</li>
            </ul>
            <ul id="example-1-1">
              <li v-for="item in items11" :key="item.message">{{ item.message2 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <img :src="imgSrc1" :style="img1Style1" />
    </div>

    <div class="section">
      <!-- 中间导航栏 -->
      <div>
        <ul id="example-2">
          <li>
            <router-link to="/singer/songs">作品</router-link>
          </li>
          <li>
            <a>专辑</a>
          </li>
          <li>
            <a>MV</a>
          </li>
          <li>
            <router-link to="/singer/work">歌手详情</router-link>
          </li>
          <li>
            <a>相似歌手</a>
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
export default {
  name: "singer",
  data() {
    return {
      //   背景图片
      imgBackground: {
        backgroundImage: "url(" + require("@/assets/images/top-bg1.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
        width: "100%",
        height: "600px",
      },
      backgound: {
        backgroundColor: "rgba(0,0,0,0.6)",
        marginTop: "-600px",
        width: "100%",
        height: "600px",
      },
      imgSrc1: require("../../../assets/images/arrow-lr.png"),
      img1Style1: {
        width: "100%",
        position: "relative",
        bottom: "30px",
      },
      // 歌手头像
      circleUrl: require("../../../assets/images/singer.jpg"),
      items1: [
        { message1: "226" },
        { message1: " 27" },
        { message1: "57" },
        { message1: "5157340" },
      ],
      items11: [
        { message2: "单曲数" },
        { message2: "专辑数" },
        { message2: "MV数" },
        { message2: "粉丝数" },
      ],
      btn2: {
        display: "block",
        margin: "0px auto",
        backgroundColor: "rgba(255,255,255,0.1)",
        border: "1px solid #999",
        color: "white",
      },
      // 播放按钮
      btn1: {
        backgroundColor: "rgb(198,47,47)",
        float: "right",
        border: "0",
        margin: "10px",
      },
    };
  },
};
</script>

<style lang="less">
.block {
  display: block;
  padding-top: 100px;
}
.singer-detail
  .singer-info
  .top
  .top-mask
  .singer-box
  .avatar
  .level[data-v-52441f16] {
  width: 100%;
  height: 25px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(0, 0%, 100%, 0.8);
}
.btn:hover i {
  transform: translate(-4px) scale(1.4);
  transition: 0.3s linear;
}
.addbtn:hover {
  opacity: 0.8;
  transition: 0.2s linear;
}
.addbtn .add {
  display: inline-block;
  font-size: 18px;
  vertical-align: middle;
}
.circleStyle {
  display: block;
  margin: 0px auto;
  width: 120px;
  border: 4px solid white;
  border-radius: 50%;
}
.circleStyle:hover {
  box-shadow: -4px 4px 8px white;
  opacity: 0.9;
  transition: 0.2s ease-in-out;
}
.block p {
  width: 760px;
  height: 48px;
  font-size: 14px;
  font-weight: bolder;
  color: hsla(0, 0%, 100%, 0.6);
  line-height: 24px;
  margin: 35px auto;
}
#example-1 li {
  width: 50px;
  color: white;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-left: 125px;
}
#example-1-1 {
  margin-top: 0;
  margin-left: -80px;
}
#example-1-1 li {
  color: hsla(0, 0%, 100%, 0.6);
  font-weight: 400;
  margin-left: 125px;
}
#example-2 li a:link {
  color: #4a4a4a;
  text-decoration: none;
}
#example-2 li a:visited {
  color: #4a4a4a;
  text-decoration: none;
}
#example-2 li a:hover {
  color: rgb(198, 47, 47);
  text-decoration: none;
}
#example-2 li a:active {
  color: rgb(198, 47, 47);
  text-decoration: none;
}
ul {
  text-align: center;
  margin-top: 25px;
  margin-left: -45px;
}
ul li {
  list-style: none;
  display: inline;
  margin-left: 30px;
  font-size: 15px;
  font-weight: bold;
  color: #4a4a4a;
}
// .details{
//     // display: none;
//     margin-left: 60px;
//     margin-bottom: 40px;
// }
// .details,.details h3{
//     color: #4a4a4a;
//     text-align: center;
// }
// .details h4{
//     text-indent: 30px;
//     text-align: left;
// }
// .details p{
//     text-align: left;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 20px;
//     margin-left: 30px;
//     width: 90%;
// }
// .details .bottomLine{
//     margin: 0px auto;
//     margin-top: -5px;
//     width: 60px;
//     height: 3px;
//     background: rgb(198, 47, 47);
// }
</style>