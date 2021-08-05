import Vue from 'vue'
import Vuex from 'vuex'
import login from './login';
import menuRoutes from "@/store/menuRoutes";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        menuRoutes
    },
    strict: true
})
