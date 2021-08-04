import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Login from '@/views/Login'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [{
            name: 'Shop',
            path: '/shop',
            component: Shop,
            meta: {
                title: '统计'
            }
        }]
    },

    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录',
        }

    }
]
