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
  {
    path: '/admin',
    name: 'AdminModule',
    component: () => import('../modules/AdminModule')
  },
]

export default routes

