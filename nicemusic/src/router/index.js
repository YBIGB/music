import Vue from 'vue';
import VueRouter from 'vue-router';

import FoundMusic from '../views/foundMusic'
import Rank from '../views/rank'
import Album from '../views/album'
import Singer from '../views/singer'
import Login from '../views/login';
import singerDetails from '../views/testhu'
import songs from '../components/3/singer/singerDetails/songs'
import work from '../components/3/singer/singerDetails/work'
import Personal from '../views/personal'
import PlayList from '../components/4/playList'

// 测试right left插件


//Vue中安装路由插件
Vue.use(VueRouter);
//路由配置
var routes = [{
        path: '/found',
        name: 'found',
        component: FoundMusic,
    },
    {
        path: '/rank',
        name: 'rank',
        component: Rank,
    },
    {
        path: '/album',
        name: 'album',
        component: Album,
    },
    /*{
        path: '/singer',
        component: Singer,
    },*/
    {
        path: '/login',
        name: 'login',
        component: Login,
        //     meta: {
        //       title: '登录',
        //       isLogin: true
        //  }
    },
    {
        path:'/singer',
        component:Singer,
        
            
        
    },
    {
        path: '/personal',
        component: Personal
    },
    {
        path: '/playList',
        component: PlayList
    },
    {
        path:'/singerDetails',
        component:singerDetails,
        children:[
            {
                path: '/',
                component:songs,
            },
            {
                path:'songs',
                component:songs,
            },
            {
                path:'work',
                component:work,
            }
        ]
    }
    
   




]

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
    originPush.call(this, location).catch(err => err);
}

//创建路由对象

originPush.call(this, location).catch(err => err);

//创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})


export default router;