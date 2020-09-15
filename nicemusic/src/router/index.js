import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home'
//import Login from '../views/login'
import Login from '../components/3/login/index.vue'
//Vue中安装路由插件
Vue.use(VueRouter);
//路由配置
var routes = [{
        path: '/home',
        name: 'home',
        component: Home,

    },
    { //测试路由--Amber
        path: '/amber',
        name: 'amber',
        component: Login
    }
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: Login,
    //     meta: {
    //       title: '登录',
    //       isLogin: true
    //  }
    //}

]

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
        originPush.call(this, location).catch(err => err);
    }
    //创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})


export default router;