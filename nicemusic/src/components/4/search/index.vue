<template>
<div class="pic">
    
    <transition appear>
        <div class="frame">
        <div class="bgc">
            <input type="text" id="content" placeholder="请输入搜索关键词并按回车键..." @keyup.enter="showHistoryAndGo">
        </div>
        <div class="blank">
            <img src="./img/fire.png" alt="">
            <p>热门搜索</p>
            <span v-for="item in hots" :key="item">{{ item.first }}</span>
            <br>
            <br>
            <div class="history">
                <img src="./img/footprint.png" alt="">
                <p>历史搜索</p>
            </div>
        </div>
        <div class="closeButton" @click="closeButton">
            <i class="el-icon-circle-close " ></i>
        </div>
    </div>
    </transition>
</div>
    
</template>

<style scoped>
    *{
        padding: 0;
        margin: 0
    }

    .pic{
        width: 100%;
        height: 624px;
    }

  

    .frame{
        width: 825px;
        height: 420px;
        margin: 0px auto;
        padding-top: 100px;
    }

    .v-enter,.v-leave-to{
        opacity: 0;
    }

    .v-enter-active,.v-leave-active{
        transition: linear 0.5s;
    }
    
    .v-enter-to,.v-leave{
        opacity: 1;
    }

    .bgc{
        position: relative;
        width: 825px;
        height: 220px;
        text-align: center;
        background: url("./img/singer.jpg") no-repeat center;
        border-radius: 10px 10px 0 0;
    }

    input{
        margin-top: 100px;
        width: 700px;
        height: 30px;
        text-align: center;
        background: transparent;
        border: 1px solid gray;
        outline: none;
    }

    ::-webkit-input-placeholder{/*Webkit browsers*/
        color:white;
    }

    .blank{
        width: 773px;
        height: 150px;
        font-size: 14px;
        border: 1px solid gray;
        padding-left: 50px;
        border-radius: 0 0 10px 10px;
        position: relative;
        background-color:white;
    }

    .blank p{
        margin-top: 10px;
        font-size: 16px;
    }

    .blank span,.change{
        background: #F4F4F5;
        display: inline-block;
        margin-top: 5px;
        margin-left: 10px;
        padding: 3px 5px;
        font-size: 12px;
        border-radius: 3px;
        color: #8C939F;
        cursor: pointer;
    }

    .blank img{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 30px;
        top: 10px;
    }

    .blank span:hover{
        color: black
    }

    .history{
        display: none;
    }

    .history img{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 30px;
        top: 150px;
    }

    .history p{
        margin-top: 50px;
    }

    .closeButton{
        cursor: pointer;
        position: relative;
        width: 25px;
        height: 30px;
        background-color: #fff;
        line-height: 30px;
        border-radius: 50%;
        margin: 30px auto;
        padding-left: 5px;
        font-size: 40px;
    }
    
</style>

<script>
export default {
    name: "Search",
    data: function(){
        return{
            hots: [],
        }
    },
    methods: {
        //----------------------------------------------------------------------------------
        async getSearchHot() {
      try {
        let res = await this.$api.getSearchHot()
        if (res.code === 200) {
          this.hots = res.result.hots
        }
      } catch (error) {
        console.log(error)
      }
    },
        //------------------------------------------------------------------------------------
        closeButton:function(){
            document.querySelector(".frame").style.display = "none";
        },
        showHistoryAndGo:function(){
            //显示历史搜索记录
            document.querySelector(".history").style.display="block";
            var a = document.querySelector(".blank");
            a.style.height = 210 + "px";
            //添加新span节点
            var b = document.querySelector(".history");
            var newNode = document.createElement("span");
            newNode.classaName="change";
            b.appendChild(newNode);
            //获取输入框value
            var i = document.querySelector("#content").value;
            document.querySelector(".history").lastElementChild.innerHTML= i;
            this.$router.replace('/playList');
            document.querySelector(".frame").style.display = "none";
        }
    },
    mounted() {
    this.getSearchHot();
  }
}
</script>