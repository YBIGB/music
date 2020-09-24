import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        currentUrl: '',
        currentData: '',

        isPlaying: false,
    },

    mutations: {
        changeUrl(state, val) {
            state.currentUrl = val
            state.isPlaying = true
        },
        changeData(state, val) {
            state.currentData = val
        }
    },

    actions: {

    },

    getters: {

    },
    modules: {

    }
})

export default store;