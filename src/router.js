import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    { path: '/', name: 'Main', component: Main },
    //{ path: '/gigi-shokai', name: 'GigiShokai', component: GigiShokai },
    { path: '*', redirect: '/'}
  ]
})