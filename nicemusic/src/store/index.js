import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        currentUrl:'',

        currentId:'',
        urlList:'',
        isPlaying:false,
    },

    mutations: {
        changeUrl(state,val){
           state.currentUrl =  val
           state.isPlaying = true
        },
    },

    actions: {

    },

    getters: {

    },
    modules: {

    }
})

export default store;