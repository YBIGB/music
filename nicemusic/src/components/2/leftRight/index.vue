<template>
  <div class="main">
    <el-container>
  <el-aside width='250px'> 
    <div>
        <h4>云特色音乐榜</h4>
       <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#D3DCE6">
      <el-menu-item index="1">
        <img src="" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span> 
      </el-menu-item>
        <el-menu-item index="2" >
       <img src="" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span>
      </el-menu-item>
    <!-- </el-menu> -->
      <h4>全球媒体榜</h4>
    
       <!-- <el-menu class="el-menu-vertical-demo" background-color="#D3DCE6"> -->
      <el-menu-item index="3" >
        <img src="" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span>
      </el-menu-item>
            <el-menu-item index="4" >
        <img src="" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span>
      </el-menu-item>
    </el-menu>
      </div>
     
      </el-aside>
  <el-main>
    <div>
      <ul>
        <li class="rightLiBig">
      <el-row>
        <el-col :span="6" :xs="24"><div class="img2">
           <img src="" alt="">
         </div>
    </el-col>
  <el-col :span="18" :xs="24"> <div class="rightLiDiv">
        <h2>云音乐飙升榜</h2>
        <p class="colorGrayBig"><i class="el-icon-pie-chart"></i>最近更新：09月15日<span class="colorGray">（每天更新）</span></p>
         <el-col :span="24" :xs='0'>
       <el-button-group style="z-index:0;position:relative"> <el-button type="primary" size='mini'><i class="el-icon-video-play"></i>播放</el-button>
        <el-button type="primary" size='mini'><i class="el-icon-plus"></i></el-button>
        </el-button-group>
        <el-button size='mini'><i class="el-icon-folder-add"></i>(3359176)</el-button>
        <el-button size='mini'><i class="el-icon-share"></i>(9070)</el-button>
        <el-button size='mini'><i class="el-icon-download"></i>下载</el-button>
        <el-button size='mini'><i class="el-icon-s-comment"></i>(195001)</el-button>
            </el-col>
        </div></el-col>
</el-row>
        </li>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column width="50">
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
        <el-table-column width="50"><img style="width:20px" src="" alt="歌曲封面"></el-table-column>
        <el-table-column  width="30"><i class="el-icon-video-play"></i></el-table-column>
        <el-table-column  prop="date" label="标题"></el-table-column>
        <el-table-column prop="name" width="100">
          <div>
            <i class="el-icon-folder-add"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-download"></i>
            <i class="el-icon-s-comment"></i>
          </div>
        </el-table-column>
         <el-table-column prop="name" label="时长" width="100"></el-table-column>
        <el-table-column prop="address" label="歌手" width="120"></el-table-column>
        </el-table>

          <el-table :data="tableData" stripe style="width: 100%" :show-header='false'>
          <el-table-column width="50">
            <template slot-scope="scope">{{scope.$index+4}}</template>
          </el-table-column>
        <el-table-column  width="30"><i class="el-icon-video-play"></i></el-table-column>
        <el-table-column  prop="date" label="标题"></el-table-column>
        <el-table-column prop="name" width="100">
          <div>
            <i class="el-icon-folder-add"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-download"></i>
            <i class="el-icon-s-comment"></i>
          </div>
        </el-table-column>
         <el-table-column prop="name" label="时长" width="100"></el-table-column>
        <el-table-column prop="address" label="歌手" width="120"></el-table-column>
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
          number:1,
          date: '他只是经过',
          name: '03：35',
          address: 'Felix Bennett'
        }, {
          number:2,
          date: '麻雀',
          name: '04：12',
          address: '李荣浩'
        }, {
          number:3,
          date: '所念皆星河',
          name: '王小虎',
          address: '上海市普陀区'
        }]
      }
    },
    methods:{

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
  width: 80vw;
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


.img1{
  width: 40px;
  height: 40px;
  float: left;
  border: olivedrab 1px solid;
  margin-top: 8px;

}
.img2{
 width: 90%;
 height: 150px;
  /* float: left; */
  border: olivedrab 1px solid;
  /* margin-right: 10px; */
}


.colorBlack{
  color: black;
  font-size: 14px;
  /* margin-bottom:10px ; */
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
  margin-bottom: 20px;
}

.rightLiBig{
  padding-bottom:20px;
  /* background-color: pink; */
  height: 170px;
}
.rightLiDiv{
  margin-top: 20px;
  background-color: #fff;
  /* float: right; */
  /* width: 490px; */
}
</style>