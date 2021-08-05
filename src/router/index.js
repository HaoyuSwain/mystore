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
        if (store.state.login.user.appkey && store.state.login.user.username && store.state.login.user.role) {
            if (!isChange) {
                console.log(product)
                const resultMenu = getMenuRoute(store.state.login.user.role, product)

                store.dispatch('menuRoutes/setMenuRoutes', routes.concat(resultMenu)).then(() => {
                    router.addRoutes(resultMenu);
                    next();
                });
                isChange = true
            }
            return next()
        }
        return next('/login')

    }
    return next()

}))


export default router
