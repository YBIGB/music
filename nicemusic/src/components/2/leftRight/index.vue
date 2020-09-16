<template>
  <div class="main">
    <el-row>
  <el-col :span="24">  <img src="../../../assets/images/logbg.jpg" alt="" class="img2"></el-col>
</el-row>
    <el-container>
  <el-aside width='200px'> 
    <div>
       <!-- <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"> -->

<!-- <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"> -->
       <!-- <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#b8b8ba">  -->
      <!-- <h4>云特色音乐榜</h4>
      <el-menu-item index="1">
        <img src="../../../assets/images/logbg.jpg" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span> 
      </el-menu-item>
        <el-menu-item index="2" >
       <img src="../../../assets/images/logbg.jpg" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span>
      </el-menu-item>
      <h4>全球媒体榜</h4>
    
      <el-menu-item index="3" >
        <img src="../../../assets/images/logbg.jpg" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span>
      </el-menu-item>
            <el-menu-item index="4" >
        <img src="../../../assets/images/logbg.jpg" alt="图片" class="img1">
        云音乐飙升榜
        <span class="colorGray">每天更新</span>
      </el-menu-item> -->
    <!-- </el-menu> -->

<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>

      </div>
     
      </el-aside>
  <el-main>
    <div>
      <ul>
        <!-- <li class="rightLiBig"> -->
      <!-- <el-row> -->
        <!-- <el-col :span="6" :xs="24"><div>
           <img src="../../../assets/images/logbg.jpg" alt="" class="img2">
         </div>
    </el-col> -->
  <!-- <el-col :span="18" :xs="24"> <div class="rightLiDiv">
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
        </div></el-col> -->
<!-- </el-row> -->
        <!-- </li> -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column width="50">
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
        <el-table-column width="40"><img style="width:30px" src="../../../assets/images/logbg.jpg" alt="歌曲封面"></el-table-column>
        <el-table-column  width="30"><i class="el-icon-video-play"></i></el-table-column>
        <el-table-column  prop="date" label="标题"></el-table-column>
        <!-- <el-table-column prop="name" width="100">
          <div>
            <i class="el-icon-folder-add"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-download"></i>
            <i class="el-icon-s-comment"></i>
          </div>
        </el-table-column> -->
         <el-table-column prop="name" label="时长" width="100"></el-table-column>
        <el-table-column prop="address" label="歌手" width="120"></el-table-column>
        </el-table>

          <el-table :data="tableData" stripe style="width: 100%" :show-header='false'>
          <el-table-column width="50">
            <template slot-scope="scope">{{scope.$index+4}}</template>
          </el-table-column>
        <el-table-column  width="30"><i class="el-icon-video-play"></i></el-table-column>
        <el-table-column  prop="date" label="标题"></el-table-column>
        <!-- <el-table-column prop="name" width="100">
          <div>
            <i class="el-icon-folder-add"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-download"></i>
            <i class="el-icon-s-comment"></i>
          </div>
        </el-table-column> -->
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
        tableData: 
        [
         {date: '他只是经过', name: '03：35',address: 'Felix Bennett'},
         {date: '麻雀',name: '04：12',address: '李荣浩'}, 
         {date: '所念皆星河',name: '王小虎',address: '上海市普陀区'}, 
         {date: '所念皆星河', name: '王小虎',address: '上海市普陀区'}
        ],    
         isCollapse: true
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
  border-radius: 10px;
  border: black 2px solid; 
  background-color: black;
  
  background-size:contain;
} 
.el-aside {
  /* */
  color: #333;
  /* background-color:"#353D48"; */
  /* border: 1px solid #d3d3d3; */
  /* background: url('../../../assets/images/pljj5.jpeg') no-repeat; */
  /* background-size: cover; */
  /* background-position: 150 */
    background-color: #222222;
}

.el-main {
  background-color: #222222;
  color: #333;
  padding: 40px;
  /* background: url('../../../assets/images/pljj3.jpeg'); */
 
}
li {
  list-style: none;
 
}
h4{
  margin:20px ;
  /* color: #ffff; */
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
 width: 100%;
 height: 150px;
  /* float: left; */
  border: olivedrab 1px solid;
  /* margin-right: 10px; */
}


.colorBlack{
  color: #ffff;
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
  /* background-color: #fff; */
  /* float: right; */
  /* width: 490px; */
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>