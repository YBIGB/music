<template>
  <div class="detail">
    <div
      class="detailBg"
      :style="{backgroundImage: 'url(' + (userInfo.backgroundUrl)  + ')', backgroundSize:'cover'}"
    ></div>
    <div class="topDetail">
      <img :src="userInfo.avatarUrl" alt class="avatar" />
      <span class="uname">{{userInfo.nickname}}</span>
      <el-button size="mini" class="checkBtn" type="danger" round>签到</el-button>
    </div>
    <div>
      <ul class="infoUl">
        <li class="level">
          <span class="reddot"></span> 等级：
          <span v-text="level"></span>
        </li>
        <li class="age">
          <span class="reddot"></span> 年龄：
          <span></span>
        </li>
        <li class="region">
          <span class="reddot"></span> 地区：
          <span></span>
        </li>
      </ul>
    </div>
    <div class="followInfo">
      <ul>
        <li>
          <div>
            <span>动态</span>
          </div>
          <span v-text="userInfo.eventCount">1</span>
        </li>
        <li>
          <div>
            <span>关注</span>
          </div>
          <span v-text="userInfo.follows">1</span>
        </li>
        <li>
          <div>
            <span>粉丝</span>
          </div>
          <span v-text="userInfo.followeds">1</span>
        </li>
      </ul>
    </div>
    <div class="infoBtn">
      <el-button type="danger" round>个人设置</el-button>
      <el-button type="danger" round>我的等级</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalDetail",
  props: ["level", "userInfo"],
  mounted() {},
};
</script>

<style lang='css' scoped>
.detail {
  text-align: center;
}
.avatar {
  width: 60px;
  border-radius: 5px;
  float: left;
  margin-left: 20px;
  position: relative;
  top: -30px;
}
.detailBg {
  background: url("../../../../assets/images/zhou.jpg") no-repeat;
  height: 100px;
  width: 280px;
  border-radius: 5px 5px 0 0;
}
.uname {
  float: left;
  font-weight: 500;
  color: #333;
  margin-left: 10px;
}
.checkBtn {
  float: right;
  margin-right: 20px;
}
.topDetail {
  position: relative;
  top: 10px;
}
.infoUl {
  clear: both;
  text-align: left;
  list-style: none;
  overflow: hidden;
}
.infoUl .reddot {
  display: inline-block;
  width: 6px;
  height: 6px;
  line-height: 18px;
  border-radius: 50%;
  background-color: #fa2800;
  margin-right: 5px;
  position: relative;
  top: -3px;
}
.infoUl li {
  color: black;
  font-size: 12px;
  line-height: 24px;
  height: 24px;
}
.followInfo {
  color: gray;
  overflow: hidden;
}

.followInfo li {
  list-style: none;
  float: left;
  width: 60px;
  height: 60px;
  z-index: 88;
  /* text-align: center; */
}
</style>
