import {getCookie, removeCookie, setCookie} from "@/utils/setCookie";


export default {
    namespaced: true,
    state: {
        user: getCookie(),
        isLoading: [],
    },
    mutations: {
        setData(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.user = payload
        },
        logout(state) {
            state.user = {
                username: '',
                role: '',
                appkey: '',
                email: '',
            }
        }
    },
    actions: {
        setUserInfo(ctx, payload) {
            ctx.commit('setData', payload)
            setCookie(payload)
        },
        setUserLogout(ctx) {
            ctx.commit('logout');
            removeCookie()
        }
    }
}
