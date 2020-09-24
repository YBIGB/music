<template>
  <div class="main">
  <div class="wrapper">
        <div class="parallax-img1">
       
     
     <div class="container">
        <div class="wrap" v-for="item in personalizeds" :key="item.imageUrl">
            <div class="image">
                <div class="display front">
                    <img :src="item.picUrl" alt="" />
                </div>
                <div class="display back">
                    <h3>{{item.name}}</h3>
                </div>
            </div>
        </div>
    </div>
     
        </div>
        <div class="center">
            <h1>榜单歌曲</h1>
            <p>
                            <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column width="50">
                        <template slot-scope="scope">{{scope.$index+1}}</template>
                    </el-table-column>
                    <el-table-column width="40"><img style="width:30px;height:30px" src="../../../assets/images/logbg.jpg" alt="歌曲封面"></el-table-column>
                    <el-table-column width="30"><i class="el-icon-video-play"></i></el-table-column>
                    <el-table-column prop="date" label="标题"></el-table-column>
                    <el-table-column prop="name" label="时长" width="100"></el-table-column>
                    <el-table-column prop="address" label="歌手" width="120"></el-table-column>
                </el-table>

                <el-table :data="tableData" stripe style="width: 100%" :show-header='false'>
                    <el-table-column width="50">
                        <template slot-scope="scope">{{scope.$index+4}}</template>
                    </el-table-column>
                    <el-table-column width="30"><i class="el-icon-video-play"></i></el-table-column>
                    <el-table-column prop="date" label="标题"></el-table-column>
                    <el-table-column prop="name" label="时长" width="100"></el-table-column>
                    <el-table-column prop="address" label="歌手" width="120"></el-table-column>
                </el-table>
            </p>
        </div>
        <div class="parallax-img2">
            <div class="caption">
                <span>查看更多</span>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
    name:'index',
    data() {
      return {
           personalizeds: [],
      limit:9,
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
  }
}
</script>

<style scoped>

  * {
    padding: 0;
    margin: 0;
    /* font-family: Candara; */
    box-sizing: border-box;
}

.main {
    background: #202020;
    height: 100%;
    width: 100%;
}

.wrapper {
    height: 100%;
}

.parallax-img1 {
    height: 200px;
    background-image: url('http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/182/7/thumb.jpg');
}

.parallax-img2 {
    min-height: 300px;
    background-image: url('http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/182/5/thumb.jpg');
}

.parallax-img1,
.parallax-img2 {
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.caption {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
}


.caption1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 200px;
    text-align: center;
    display: flex; 
     justify-content: center;
}


.caption>span {
    background: rgb(32, 32, 32, 0.85);
    color: #82fcfd;
    padding: 18px 50px;
    font-size: 30px;
    border-radius: 16px;
}

.caption1>span {
    background: rgb(32, 32, 32, 0.85);
    color: #82fcfd;
    /* padding: 18px 50px; */
    /* font-size: 30px; */
    border-radius: 16px;
}

.caption p {
    margin: 0 0 15px 0;
    padding: 0 0 15px 0;
    border-bottom: 2px solid #82fcfd;
}

.caption>span p {
    font-size: 40px;
}

p {
    margin: 15px;
    font-size: 1.1rem;
    padding: 1.5rem 5rem;
    color: #fff;
}

.center {
    width: 1000px;
    margin: 0 auto;
    color: #ddd;
}

h1 {
    text-align: center;
    margin: 3rem 0 0 0;
    color: #fff;
}

.block {
 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.container {
    width: 1000px;
    margin: auto;
    margin-top: 3em;
    clear: left;
}

.wrap {
   -perspective: 400;
    /* -moz-perspective: 400; */
    float: left;
    width: 80px;
    margin-right: 20px;
}

.image {
    width: 100%;
    height: 80px;
    transform-style: preserve-3d;
    transition: 1.5s;
    /* -moz-transform-style: preserve-3d;
    -moz-transition: 1.5s; */
}

img {
    width: 80px;
    height: 80px;
}

.wrap:hover .image {
  transform: rotateY(180deg);
    /* -moz-transform: rotateY(180deg); */
}

.display {
    position: absolute;
    backface-visibility: hidden;
    /* -moz-backface-visibility: hidden; */
}

.display h3 {
    color: rgb(182, 35, 35);
    text-align: center;
    font-size: 13px;
}

.back {
   transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    /* background: -webkit-gradient(linear, left top, left bottom, from(#fdbb5a), to(#db5726)); */
    background: linear-gradient(to top, #fdbb5a, #db5726);
    width: 80px;
    height: 80px;
    /* line-height: 200px; */
}
</style>