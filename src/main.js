import Vue from 'vue'
import App from './App.vue'
import store from './store'
import elementUI from 'element-ui'
import router from "@/router";
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/reset.css'


Vue.use(elementUI)

new Vue({
    store,
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
