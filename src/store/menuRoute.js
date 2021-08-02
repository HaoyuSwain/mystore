export default {
    namespaced: true,
    state: {
        menuRoute: [],
    },
    mutations: {
        setMenuRoute(state, payload) {
            state.menuRoute = payload
        }
    },
    actions: {
        setMenuRoutes(ctx, payload) {
            console.log('actions')
            ctx.commit('setMenuRoute', payload)
        }
    }
}
