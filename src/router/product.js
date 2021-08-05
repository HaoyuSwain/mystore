import ShopList from '@/views/ShopList'
import AddList from '@/views/AddList'
import ShopEdit from '@/views/ShopEdit'
import Shop from '@/views/Shop'
import Category from '@/views/Category'


export default [{
    path: '/product',
    name: 'Product',
    meta: {
        title: '商品'
    },
    component: Shop,
    children: [
        {
            path: '/product/shoplist',
            name: 'Shoplist',
            meta: {
                title: '商品列表'
            },
            component: ShopList
        },
        {
            path: '/product/addlist',
            name: 'Addlist',
            meta: {
                title: '添加商品'
            },
            component: AddList
        },
        {
            path: '/edit/:id',
            name: 'Productedit',
            meta: {
                title: '编辑商品'
            },
            component: ShopEdit
        },
        {
            path: '/product/category',
            name: 'Category',
            meta: {
                title: '商品类目',
            },
            component: Category
        }
    ]
}]
