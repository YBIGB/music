<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in banners" :key="item.imageUrl">
      <img :src="item.imageUrl" class="image" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      // imagesbox: [
      //   { id: 0, idView: require("../../../assets/images/personal.jpg") },
      //   { id: 1, idView: require("../../../assets/images/personal.jpg") },
      //   { id: 2, idView: require("../../../assets/images/personal.jpg") },
      //   { id: 3, idView: require("../../../assets/images/personal.jpg") },
      // ],
      banners: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        paginationClickable: true,
        grabCursor: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    bannersInit() {
      return this.banners.length
    }
  },
  methods: {
    async getBanner() {
      try {
        let res = await this.$api.getBanner()
        // console.log(res)
        this.banners = res.banners
        this.bannerBg = res.banners[0].imageUrl
      } catch (error) {
        console.log(error)
      }
    },
    carouselChange(e) {
      console.log(e)
      this.bannerBg = this.banners[e].imageUrl
    }
  },
  mounted() {
    this.getBanner()
  }
}
</script>
<style>
.image {
  height: 300px;
  width: 760px;
  border-radius: 5px;
}
</style>