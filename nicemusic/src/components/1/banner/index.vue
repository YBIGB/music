<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in imagesbox" :key="item.id">
      <img :src="item.idView" class="image" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    data() {
      return {
        imagesbox: [
          { id: 0, idView: require("../../../assets/images/personal.jpg") },
          { id: 1, idView: require("../../../assets/images/personal.jpg") },
          { id: 2, idView: require("../../../assets/images/personal.jpg") },
          { id: 3, idView: require("../../../assets/images/personal.jpg") },
        ],
      };
    },
  };
</script>
<style>
  .image {
    height: 300px;
    width: 760px;
  }
</style>