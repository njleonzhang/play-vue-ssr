import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

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
