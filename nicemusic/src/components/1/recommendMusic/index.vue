<template>
  <div class="banner">
    <h4>推荐歌曲</h4>
    <el-row :gutter="10">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        <div class="grid-content bg-purple-light">

        </div>
      </el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        <div class="grid-content bg-purple-light">

        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        <div class="grid-content bg-purple-light">

        </div>
      </el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        <div class="grid-content bg-purple-light">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'recommendMusic',
    data() {
      return {
        banners: [],
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

<style>
  .el-col {
    border-radius: 4px;
    margin-right: 1vw;
    margin-top: 3vw;
    margin-bottom: -5vw;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 80px;
  }
</style>
