window.Vue = require("vue").default;

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import App from './App.vue'
import routes from './router'
import './plugins'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
