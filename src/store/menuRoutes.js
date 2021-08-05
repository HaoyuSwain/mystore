export default {
    namespaced: true,
    state: {
        menuRoute: [],
    },
    mutations: {
        setMenuRoute(state, payload) {
            state.menuRoute = payload
        },
        getMenuRoute(state) {
            return state.menuRoute
        }
    },
    actions: {
        setMenuRoutes(ctx, payload) {
            ctx.commit('setMenuRoute', payload)
        },
        getMenuRoutes(ctx) {
            ctx.commit('getMenuRoute')
        }
    }
}
