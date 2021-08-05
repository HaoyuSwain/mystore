/**
 *储存角色对应的名称
 */
const roleToRoute = {
    coustomer: [{
        name: 'Product',
    }, {
        name: 'Shoplist'
    }, {
        name: 'Addlist'
    }],
    admin: [{
        name: 'Product',
    }, {
        name: 'Shoplist'
    }, {
        name: 'Addlist'
    }, {
        name: 'Category'
    }],
}

/**
 *
 * 根据权限创建新的路由
 * @param {String}role
 * @param {Array}routes
 */
export default function (role, routes) {
    console.log(role, routes);
    const allowRoutesName = roleToRoute[role].map((item) => item.name);
    return routes.filter((r) => {
        const obj = r;
        if (allowRoutesName.indexOf(r.name) !== -1) {
            const {children} = obj;
            obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
            return true;
        }
        return false;
    });
}



