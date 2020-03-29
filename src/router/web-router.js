// web 路由配置
// import HomePage from '@/components/HomePage'

const Login = r => require.ensure([], () => r(require('@/components/Login')))
const Page404 = r => require.ensure([], () => r(require('@/components/Page404')))
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')))
const HomePage = r => require.ensure([], () => r(require('@/components/HomePage')))

const MainLayout = r => require.ensure([], () => r(require('@/components/layout/MainLayout')))

const AddArticle = r => require.ensure([], () => r(require('@/components/article/AddArticle')))
const AddArticle2 = r => require.ensure([], () => r(require('@/components/article/AddArticle2')))

const AllIcons = r => require.ensure([], () => r(require('@/components/icons/AllIcons.vue')))

const CommodityList = r => require.ensure([], () => r(require('@/components/commodity/CommodityList.vue')))
const CommodityDetail = r => require.ensure([], () => r(require('@/components/commodity/CommodityDetail.vue')))

export const router = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: Login,
    children: []
  },
  {
    path: '/view',
    name: '发表文章',
    iconCls: 'el-icon-tickets', // 图标样式class
    component: MainLayout,
    children: [
      {
        path: 'addArticle',
        name: 'AddArticle',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        meta: { title: '发表文章' },
        component: AddArticle,
        children: []
      },
      {
        path: 'addArticle2',
        name: 'AddArticle2',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        meta: { title: '发表文章-2' },
        component: AddArticle2,
        children: []
      }
    ]
  },
  {
    path: '/view',
    name: '图标',
    iconCls: 'el-icon-platform-eleme',
    component: MainLayout,
    children: [
      {
        path: 'allIcons',
        name: 'AllIcons',
        iconCls: 'el-icon-platform-eleme', // 图标样式class
        meta: { title: '内置图标' },
        component: AllIcons,
        children: []
      }
    ]
  },
  {
    path: '/view',
    name: '商品展示',
    iconCls: 'el-icon-picture-outline',
    component: MainLayout,
    children: [
      {
        path: 'commodityList',
        name: 'CommodityList',
        iconCls: 'el-icon-cold-drink', // 图标样式class
        meta: { title: '商品列表' },
        component: CommodityList,
        children: []
      },
      {
        path: 'commodityDetail',
        name: 'CommodityDetail',
        iconCls: 'el-icon-cold-drink', // 图标样式class
        meta: { title: '商品详情' },
        component: CommodityDetail,
        children: []
      }
    ]
  },
  {
    path: '/view',
    name: '分类一',
    component: MainLayout,
    children: [
      {
        path: 'hello',
        name: 'HelloWorld',
        meta: { title: 'HelloWorld' },
        component: HelloWorld,
        children: []
      },
      {
        path: 'home',
        name: 'HomePage',
        meta: { title: '首页' },
        component: HomePage,
        children: []
      },
      {
        path: 'mainLayout',
        name: 'MainLayout',
        meta: { title: 'MainLayout' },
        component: MainLayout,
        children: []
      },
      {
        path: 'page404',
        name: 'page404',
        meta: { title: '404' },
        component: Page404,
        children: []
      }
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const appRouter = [...router]
