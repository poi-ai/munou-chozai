import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import GigiShokai from './components/GigiShokai'
import Problem from './components/Problem'
import Gacha from './components/Gacha'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/gigi-shokai', name: 'GigiShokai', component: GigiShokai },
    { path: '/problem', name: 'Problem', component: Problem },
    { path: '/gacha', name: 'Gacha', component: Gacha },
    { path: '*', redirect: '/'}
  ]
})