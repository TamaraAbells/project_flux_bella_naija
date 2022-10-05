const routes = [
    {
        path: '/foo',
        component: () => import('../components/Foo.vue')
    },
    // { path: '/bar', component: Bar }
]

export default routes

