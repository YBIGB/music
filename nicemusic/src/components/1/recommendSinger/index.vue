<template>
  <div>
    <h4>推荐歌手</h4>
    <ul :key='index' v-for='(item,index) in singerData'>
      <img :src="item.src" alt="">
      <p>{{item.name}}</p>
      <span>单曲数：{{item.number}}</span>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'recommendSinger',
    data() {
      return {
        singerData: [{
            src:'../../../assets/images/liao.jpg',
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          },{
            name:'毛不易',
            number:234
          }
        ]
      }
    }
  }
</script>

<style scoped>
ul{
  list-style:none;
  width: 200px;
  height: 200px;
  text-align: center;
  display: inline-block;
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
</style>