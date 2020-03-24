// web 路由配置
// import HomePage from '@/components/HomePage'

const Login = r => require.ensure([], () => r(require('@/components/Login')))
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')))
const HomePage = r => require.ensure([], () => r(require('@/components/HomePage')))

export const router = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: Login
  },
  {
    path: '/view/hello',
    name: 'HelloWorld',
    meta: { title: 'HelloWorld' },
    component: HelloWorld
  },
  {
    path: '/',
    name: 'HomePage',
    meta: { title: '首页' },
    component: HomePage
  },
  {
    path: '/view/home',
    name: 'HomePage',
    meta: { title: '首页' },
    component: HomePage
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const appRouter = [...router]
