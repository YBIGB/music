<template>
  <div>
    <!-- <ul :key='index' v-for='(item,index) in singerData'>
      <img :src="item.src" alt="">
      <p>{{item.name}}</p>
      <span>单曲数：{{item.number}}</span>
    </ul> -->
    <el-row :gutter="20">
        <el-col :key='index' v-for='(item,index) in singerData' :span="4">
        <router-link to="../../../singerDetails">
          <div class="grid-content bg-purple" ><img :src="item.src" alt=""></div>
          <p>{{item.name}}</p>
          <span>单曲数：{{item.number}}</span>
          <p class="empty"></p>
        </router-link>
        <router-view></router-view>
        </el-col>
      
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'recommendSinger',
    data() {
      return {
        singerData: [{
            src:require('../../../assets/images/liao.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/yang.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/fu.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/zhou.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/yu.jpg'),
            name:'双笙',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/yu.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'华晨宇',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'华晨宇',
            number:234
          },{
            src:require('../../../assets/images/yu.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/yu.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/liao.jpg'),
            name:'河图',
            number:234
          },{
            src:require('../../../assets/images/fu.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/fu.jpg'),
            name:'毛不易',
            number:234
          },{
            src:require('../../../assets/images/fu.jpg'),
            name:'毛不易',
            number:234
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
/* ul{
  list-style:none;
  width: 200px;
  height: 200px;
  text-align: center;
  display: inline-block;
} */

.empty{
  height: 10px;
}
span{
  font-size: small;
  color:red;
}
img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border:1px solid rgb(66, 66, 66);
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    text-align: center;
  }
  .bg-purple-dark {
    background: white;
  }
  .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: white;
  }
</style>