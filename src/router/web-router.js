// web 路由配置
// import HomePage from '@/components/HomePage'

const HomePage = r => require.ensure([], () => r(require('@/components/HomePage')))

export const router = [
  {
    path: '/',
    name: 'HomePage',
    meta: { title: '首页' },
    component: HomePage
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const appRouter = [...router]
