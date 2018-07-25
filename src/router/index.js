import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue')
const Test = () => import('../views/Test.vue')

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/test',
        component: Test
      },
    ]
  })
}
