<template>
  <div class="all-container">
    <h4>推荐歌单</h4>
    <div class="overall-content">
      <div class="for-content" :span="4" :key="index" v-for="(item, index) in personalizeds">
        <div class="single-content">
          <img :src="item.picUrl" lazy />
          <h5>{{ item.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommendSongs",
  data() {
    return {
      personalizeds: [],
      limit:24  
    };
  },
  computed: {},
  methods: {
    // 获取推荐歌单
    async getPersonalized() { 
      try {
        let res = await this.$api.getPersonalized(this.limit);
        this.personalizeds = res.result;
      } catch (error) {
        console.log(error);  
      }
    },
  },
  mounted() {
    this.getPersonalized();
  },
};
</script>
<style lang="less" scoped>
.all-container {
  margin-left: 1.5vw;
}
h5{
  color: red;
}
div h4 {
  text-indent: 4vw;
}
.single-content{
  width: 10vw;
  height: 18vw;
  margin-left: 1.8vw;
}
.single-content img{
  width: 10vw;
  height: 10vw;
}
.single-content h6{
  text-overflow: ellipsis;
}
.overall-content {
  display: flex;
  flex-wrap: wrap;
}
/*.el-row {*/
/*  margin-bottom: 20px;*/
/*  &:last-child {*/
/*    margin-bottom: 0;*/
/*  }*/
/*}*/
/*.el-col {*/
/*  border-radius: 4px;*/
/*}*/
/*.bg-purple-dark {*/
/*  background: #ffffff;*/
/*}*/
/*.bg-purple {*/
/*  background: #ffffff;*/
/*}*/
/*.bg-purple-light {*/
/*  background: #ffffff;*/
/*}*/
/*.grid-content {*/
/*  border-radius: 4px;*/
/*  min-height: 150px;*/
/*}*/
/*.grid-content img {*/
/*  padding-left: 40px;*/
/*  width: 10vw;*/
/*}*/
/*.grid-content h6 {*/
/*  font-size: 14px;*/
/*  font-weight: bold;*/
/*  display: inline-block;*/
/*  width: 10vw;*/
/*  margin-left: 2px;*/
/*  padding-left: 40px;*/
/*}*/
/*.row-bg {*/
/*  padding: 10px 0;*/
/*  background-color: #f9fafc;*/
/*}*/
</style>
