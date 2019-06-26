import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      carts: [],
      orders: []
    }
  },
  mutations: {
    addOrder(state, {id, foodName, foodImage, qty}) {
      var itemFood = state.data.carts.find(carts => carts.idFood == id)
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
        state.data.carts.push(addItem)
      }
      itemFood = ''
    },
    saveCart(state) {
      const cartItem = [
        {
          order: 1,
          shopCart: state.data.carts
        }
      ]
      state.data.orders = JSON.parse(localStorage.getItem("orders"))
      if (state.data.orders == null) {
        const final = JSON.stringify(cartItem)
        localStorage.setItem("orders", final) 
      } else {
        state.data.orders.push(cartItem)
        const final = JSON.stringify(state.data.orders)
        localStorage.setItem("orders", final)
      }
      
      state.data.carts = []
    }
  },
  actions: {

  }
})
