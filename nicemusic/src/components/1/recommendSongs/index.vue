<template>
  <div>
  <h4>推荐歌单</h4>
  <el-row :gutter="30">
    <el-col :span="4" :key='index' v-for='(item,index) in songsData'>
      <div class="grid-content bg-purple">
        <img :src="item.src">
        <h6>{{item.remarks}}</h6>
      </div>
    </el-col>
  </el-row>
    <el-row :gutter="30">
      <el-col :span="4" :key='index' v-for='(item,index) in songsData'>
        <div class="grid-content bg-purple">
          <img :src="item.src">
          <h6>{{item.remarks}}</h6>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'recommendSongs',
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        songsData: [
          {
          src:require('../../../assets/images/songlist.png'),
          remarks: '变得温柔一些，生活也会顺遂很多'
          },
          {
            src:require('../../../assets/images/fu.jpg'),
            remarks: '变得温柔一些，生活也会顺遂很多'
          },
          {
            src:require('../../../assets/images/liao.jpg'),
            remarks: '变得温柔一些，生活也会顺遂很多'
          },{
            src:require('../../../assets/images/yang.jpg'),
            remarks: '变得温柔一些，生活也会顺遂很多'
          },{
            src:require('../../../assets/images/yu.jpg'),
            remarks: '变得温柔一些，生活也会顺遂很多'
          },{
            src:require('../../../assets/images/songlist.png'),
            remarks: '变得温柔一些，生活也会顺遂很多'
          }
        ]
      }
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  div h4 {
    text-indent: 4vw;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 150px;
  }
  .grid-content img {
    padding-left: 40px;
    width: 10vw;
  }
  .grid-content h6 {
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    width: 10vw;
    margin-left: 2px;
    padding-left: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
