import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
//为路由对象，添加beforEach导航守卫
router.beforeEach((to, from, next) => {
  //to将要访问的路径
  //from代表从哪个路径跳转而来
  //next是一个函数，表示放行
  //next() 放行 next('/login') 强制跳转

  //r如果页面访问login，直接放行
  if (to.path === '/login') return next()
  //从sessionStorage中获取token值
  const tokenStr = window.sessionStorage.getItem('token')
  //若没有token直接跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})


export default router
