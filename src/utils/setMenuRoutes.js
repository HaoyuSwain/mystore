/**
 *储存角色对应的名称
 */
const roleToRoute = {
    'coustomer': [{
        name: 'product',
    }, {
        name: 'shoplist'
    }, {
        name: 'addlist'
    }],
    'admin': [{
        name: 'product',
    }, {
        name: 'shoplist'
    }, {
        name: 'addlist'
    }, {
        name: 'category'
    }],
}

/**
 *
 * 根据权限创建新的路由
 * @param {String}role
 * @param {Array}routes
 */
export default function getMenuRoute(role, routes) {
    const allowedRouteName = roleToRoute[role].map(r => r.name)
    return routes.filter(r => {
        if (allowedRouteName.indexOf(r.name) !== -1) {
            const children = r.children
            r.children = children.filter(res => allowedRouteName.indexOf(res.name) !== -1)
            return true
        } else {
            return false
        }
    })
}



