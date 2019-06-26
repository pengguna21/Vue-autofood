import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      orders: [],
    }
  },
  mutations: {
    addOrder(state, {id, foodName, foodImage, qty}) {
      var itemFood = state.data.orders.find(orders => orders.idFood == id)
      if (itemFood) {
        var oldQty = parseInt(itemFood.qty, 10)
        var addQty = parseInt(qty)
        itemFood.qty = oldQty + addQty
      } else {
        const addItem = {
          idFood: id,
          foodName: foodName,
          foodImage: foodImage,
          qty: qty
        }
        state.data.orders.push(addItem)
      }
      itemFood = ''
    }
  },
  actions: {

  }
})
