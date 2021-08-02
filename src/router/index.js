import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import store from '@/store/index'
import product from "@/router/product";
import getMenuRoute from "@/utils/setMenuRoutes";

Vue.use(VueRouter)


const router = new VueRouter({
    routes,
    product,
    mode: 'history',

})
let isChange = false
router.beforeEach(((to, from, next) => {
    if (to.path !== '/login') {
        if (store.state.login.user.appkey && store.state.login.user.username &&
            store.state.login.user.email && store.state.login.user.role) {
            console.log(store.state.login.user.role, product)
            if (!isChange) {
                const menuRoute = getMenuRoute(store.state.login.user.role, product)
                for (let i = 0; i < menuRoute.length; i++) {
                    const element = menuRoute[i];
                    router.addRoute(element)
                }
                store.dispatch('menuRoute/setMenuRoutes', routes.concat(menuRoute))
                isChange = true
                return next()
            }
        } else {
            return next('/login')
        }
    }
    return next()

}))


export default router
