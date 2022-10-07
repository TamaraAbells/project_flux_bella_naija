const routes = [
  {
    path: '/',
    name: 'HomeModule',
    component: () => import('../modules/HomeModule')
  },
  {
    path: '/category/:category',
    name: 'CategoryModule',
    component: () => import('../modules/CategoryModule')
  },
  {
    path: '/post/:post',
    name: 'PostModule',
    component: () => import('../modules/PostModule')
  },
]

export default routes

