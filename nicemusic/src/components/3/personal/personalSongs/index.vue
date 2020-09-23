<template>
  <div class="songsMain">
    <p class="title">
      <strong>听歌排行</strong>
      <span class="total">（累计听歌{{listenSongs}}首）</span>
      <span class="right">
        <a href class="active">最近一周</a> |
        <a href>所有时间</a>
      </span>
    </p>
    <p>
      <el-button type="danger" round>播放全部</el-button>
    </p>
    <div>
      <table cellspacing="0" cellpadding="0" style="width:100%;">
        <thead>
          <tr style="height: 50px" class="even">
            <th style="width: 30px">序号</th>
            <th style="width: 250px;text-align: left;text-indent: 20px">歌曲</th>
            <th style="width: 100px;text-align: left;text-indent: 20px">歌手</th>
            <th style="width: 60px;text-align: left;text-indent: 20px">专辑</th>
            <th>时长</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in songList" :key="item.song.id">
            <td>{{ index+1 }}</td>
            <td>
              <img :src="item.song.al.picUrl" alt />
              <span>{{ item.song.name }}</span>
            </td>
            <td>{{ item.song.al.name.substring(0,10) }}</td>
            <td>{{ item.album }}</td>
            <td>{{ item.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalSongs",
  data() {
    return {
      type: 1,
      songList: [],
    };
  },
  props: ["listenSongs", "userInfo"],
  methods: {
    indexMethod(index) {
      return index * 2;
    },
  },
  mounted() {
    const userId = window.localStorage.getItem("userId");
    console.log(userId);

    this.$api
      .getUserRecord(userId, this.type)
      .then((res) => {
        console.log("res", res);
        this.songList = res.weekData;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang='css' scoped>
table {
  width: 1150px;
  height: 1510px;
  margin-top: 70px;
}

table thead tr {
  color: gray;
  font-size: 14px;
}

table tbody tr td:first-of-type {
  text-align: center;
}

table tbody tr {
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #000;
  cursor: pointer;
}
tbody tr td span {
  display: inline-block;
  line-height: 40px;
}
.even {
  background-color: #f0f0f0;
}

tbody tr:hover {
  background: #e8e9ed;
}

tr img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

tr td:nth-of-type(2) {
  text-indent: 15px;
}
.right a {
  text-decoration: none;
  color: gray;
}
.right .active {
  color: #fa2800;
}
.songsMain .title {
  border-left: 5px solid #fa2800;
  padding-left: 10px;
}
.songsMain .title .total {
  color: gray;
  font-size: 12pxpx;
}
.songsMain .title .right {
  float: right;
}
.songsMain button {
  float: right;
}
.songCover {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
</style>
