const routes = [
  {
    path: '/',
    name: 'HomeModule',
    component: () => import('../modules/HomeModule')
  },
]

export default routes

