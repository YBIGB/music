<template>
  <div>
    <!-- <ul :key='index' v-for='(item,index) in singerData'>
      <img :src="item.src" alt="">
      <p>{{item.name}}</p>
      <span>单曲数：{{item.number}}</span>
    </ul> -->
    <el-row :gutter="20">
        <el-col :key='index' v-for='(item,index) in singers' :span="4"  >
        <router-link to="../../../singerDetails" >
          <div class="grid-content bg-purple" ><img :src="item.picUrl" lazy alt="" ></div>
          <p>{{item.name}}</p>
          <span>单曲数：{{item.musicSize}}</span>
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
        singers:[]   
      }
    },
    methods:{
      setsingerID(index){
        localStorage.setItem('singerID',singer[index])
      },

      async getHotSinger() { 
      try {
        let res = await this.$api.getHotSinger();
        this.singers = res.artists;
      } catch (error) {
        console.log(error);  
      }
    },
    
    },
    mounted() {
    this.getHotSinger();
    
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
  .el-col p{
    font-weight: bold;
  }
  .el-col:hover p {
    color: rgb(198, 47, 47);
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