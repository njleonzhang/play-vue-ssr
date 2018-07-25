import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { Order } from '../api'

export function createStore() {
  return new Vuex.Store({
    state: {
      orders: []
    },
    mutations: {
      setOrders(state, orders) {
        state.orders = orders
      }
    },
    actions: {
      async getOrders({ commit }) {
        let orders = await Order.all()
        commit('setOrders', orders)
      }
    }
  })
}
