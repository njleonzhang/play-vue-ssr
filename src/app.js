import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'
import { createStore } from './store/index'
import { sync } from 'vuex-router-sync'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  // create the router instance
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
