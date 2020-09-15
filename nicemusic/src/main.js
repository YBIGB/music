import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router';

import Axios from 'axios';
import VueAxios from 'vue-axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, Axios);

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
    }).$mount('#app')
