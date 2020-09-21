<template>
  <div>
    <h4>推荐歌单</h4>
    <div :key="index" v-for="(item, index) in personalizeds">
      <img :src="item.picUrl" lazy />
      <h6>{{ item.name }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendSongs",
  data() {
    return {
      personalizeds: [],
      limit: 24,
    };
  },
  computed: {},
  methods: {
    // 获取推荐歌单
    async getPersonalized() {
      //定义异步方法
      try {
        let res = await this.$api.getPersonalized(this.limit);
        //async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。
        //这里我们触发的异步操作是：调用Vue原型中的'$api'方法,这个方法是哪里来的呢? 可以在main.js中看到下面两行
        //import getApi from '@/api/index'
        //Vue.prototype.$api = getApi
        //可以看到这个'$api'方法来自api接口文件包  就是项目刚开始我就放进来的那个api文件夹
        //在那个文件夹中就可以看到许许多多的方法 ，里面就包含了'getPersonalized'这个方法
        //可以在api文件夹中的api.js中找到这个方法，它的作用就是通过接口获得推荐歌单数据，而我们只需要按照这个方法的要求 传一个limit参数 告诉他我们需要去多少个数据
        //然后数据就被取出来了，它存放在res里
        this.personalizeds = res.result;
        //将res里的数据赋给我们自己定义的空数组'personalizeds'
      } catch (error) {
        console.log(error); //捕获错误
      }
    },
  },
  mounted() {
    this.getPersonalized(); //自动执行获取数据的方法
  },
};
</script>

