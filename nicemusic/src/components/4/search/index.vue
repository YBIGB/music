<template>
    <div class="frame">
        <div class="bgc">
            <input type="text" id="content" placeholder="请输入搜索关键词并按回车键..." @keyup.enter="showHistory">
        </div>
        <div class="blank">
            <img src="./img/fire.png" alt="">
            <p>热门搜索</p>
            <span>中国新说唱 冷血</span>
            <span>讽刺的情书</span>
            <span>姚晨公开朋友圈</span>
            <span>鱼丁糸</span>
            <span>像小强一样活着</span>
            <span>天外来物</span>
            <span>Tfboys</span>
            <br>
            <br>
            <span>巴巴爸爸我看见哦</span>
            <span>米津玄师</span>
            <span>Taylor Swift</span>
            <div class="history">
                <img src="./img/footprint.png" alt="">
                <p>历史搜索</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        padding: 0;
        margin: 0
    }

    .frame{
        width: 825px;
        height: 370px;
        margin: 200px auto;
         background-color: white;
    }

    .bgc{
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
        background-color: white;
    }

    .blank p{
        margin-top: 10px;
        font-size: 16px;
    }

    .blank span{
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

    .change{
        color: red;
    }
</style>

<script>
export default {
    name: "Search",
    data: function(){
        return{
        }
    },
    methods: {
        showHistory:function(){
            //显示历史搜索记录
            document.querySelector(".history").style.display="block";
            var a = document.querySelector(".blank");
            a.style.height = 270 + "px";
            //添加新span节点
            var b = document.querySelector(".history");
            var newNode = document.createElement("span");
            newNode.className="change";
            b.appendChild(newNode);
            //获取输入框value
            var i = document.querySelector("#content").value;
            document.querySelector(".history").lastElementChild.innerHTML= i;
        }
    },

}
</script>