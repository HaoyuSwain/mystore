export default [{
    path: 'product',
    name: 'Product',
    meta: {
        title: '商品'
    },
    component: () => import('@/views/Shop'),
    children: [{
        path: 'product/shoplist',
        name: 'Shoplist',
        meta: {
            title: '商品列表'
        },
        component: () => import('@/views/ShopList')
    }, {
        path: 'product/addlist',
        name: 'Addlist',
        meta: {
            title: '添加商品'
        },
        component: () => import('@/views/AddList')
    }, {
        path: 'product/category',
        name: 'Category',
        meta: {
            title: '商品类目',
        },
        component: () => import('@/views/Category')
    }]
}]
