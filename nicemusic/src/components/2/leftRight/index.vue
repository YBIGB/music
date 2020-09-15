<template>
  <div class="main">
    <el-container>
  <el-aside width='250px'> 
    <div>
        <h4>云特色音乐榜</h4>
      <ul>
        <li class="left-li bgPink">
        <img src="" alt="云音乐飙升榜" class="img1">
        <p class="colorBlack">云音乐飙升榜</p>
        <p class="colorGray">每天更新</p>
        </li>
        <li class="left-li">
        <img src="" alt="云音乐新歌榜" class="img1">
        <p class="colorBlack">云音乐新歌榜</p>
        <p class="colorGray">每天更新</p>
        </li>
      </ul>
      <h4>全球媒体榜</h4>
     
      </div></el-aside>
  <el-main>
    <div>
      <ul>
        <li class="rightLiBig">
        <img src="" alt="" class="img2">
        <div class="rightLiDiv">
        <h2>云音乐飙升榜</h2>
        <p class="colorGrayBig"><i class="el-icon-pie-chart"></i>最近更新：09月15日<span class="colorGray">（每天更新）</span></p>
       <el-button-group style="z-index:0;position:relative"> <el-button type="primary" size='mini'><i class="el-icon-video-play"></i>播放</el-button>
        <el-button type="primary" size='mini'><i class="el-icon-plus"></i></el-button>
        </el-button-group>

         <el-button size='mini'><i class="el-icon-folder-add"></i>(3359176)</el-button>
          <el-button size='mini'><i class="el-icon-share"></i>(9070)</el-button>
           <el-button size='mini'><i class="el-icon-download"></i>下载</el-button>
            <el-button size='mini'><i class="el-icon-s-comment"></i>(195001)</el-button>
        </div>
      
        </li>
        <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
      </ul>
      </div> </el-main>
</el-container>

  </div>
</template>

<script>

export default {
  name:'index',
   data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }

}
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
}
.main {
  margin: 0 auto;
  width: 80%;
  border: 1px solid #d3d3d3;
} 
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  border: 1px solid #d3d3d3;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 40px;
}
li {
  list-style: none;
 
}
h4{
  margin:20px ;
  margin-top:40px;
  font-weight: 500;
  font-size: 17px;
}
.left-li{
  height: 60px;
  padding: 20px;
  border: solid 1px salmon;
}
.bgPink{
    background-color: #e6e6e6  ;
}
.img1{
  width: 60px;
  height: 60px;
  float: left;
  border: olivedrab 1px solid;
  margin-right: 10px;
}
.img2{
  width: 150px;
  height: 150px;
  float: left;
  border: olivedrab 1px solid;
  margin-right: 10px;
}
.el-container {
  margin-top: 40px;
}

.colorBlack{
  color: black;
  font-size: 16px;
  margin-bottom:10px ;
}

.colorGray{
  color: gray;
    font-size: 12px;
}

h2{
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 22px;
}

.colorGrayBig{
  font-size: 15px;
  color: rgb(90, 86, 86);
}

.rightLiBig{
  padding-bottom:20px;
  background-color: pink;
  height: 170px;
}
.rightLiDiv{
  margin-top: 20px;
  background-color: #fff;
  float: right;
  width: 490px;
}
</style>