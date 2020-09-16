<template>
  <div class="songsMain">
    <p class="title">
      <strong>听歌排行</strong>
      <span class="total">（累计听歌6203首）</span>
      <span class="right">
        <a href class="active">最近一周</a> |
        <a href>所有时间</a>
      </span>
    </p>
    <p>
      <el-button type="danger" round>播放全部</el-button>
    </p>
    <div>
      <el-table :data="tableData" style="width: 100%" :stripe="true">
        <el-table-column prop="name" label="序号"></el-table-column>

        <el-table-column prop="address" label="歌曲" width="200">
          <img class="songCover" src="../../../../assets/images/zhou.jpg" alt />
          <div></div>
        </el-table-column>
        <el-table-column prop="name" label="歌手"></el-table-column>
        <el-table-column prop="name" label="专辑"></el-table-column>
        <el-table-column prop="name" label="时长"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalSongs",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司",
        },
      ],
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    },
  },
};
</script>

<style lang='css' scoped>
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
