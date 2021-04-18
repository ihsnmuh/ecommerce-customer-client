import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cartitems: [],
    cartitem: {}
  },
  mutations: {
    FETCH_PRODUCTS (state, data) {
      state.products = data
    },
    FETCH_CARTITEMS (state, data) {
      state.cartitems = data
    },
    FETCH_CART_ONE (state, data) {
      state.cartitem = data
    }
  },
  actions: {
    fetchProducts (context, payload) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCartItems (context, payload) {
      axios.get('/carts', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_CARTITEMS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCartOne (context, id) {
      axios
        .get(`/carts/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_CART_ONE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    login (context, payload) {
      axios.post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },

    register (context, payload) {
      axios.post('/register', payload)
        .then(({ data }) => {
          console.log('Berhasil Register')
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },

    AddtoCard (context, payload) {
      console.log(payload.id, '<<<<<<<< Produk yang di Add')
      axios.post(`/carts/${payload.id}`, payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          console.log('Produk berhasil ditambahkan ke dalam Cart')
          context.dispatch('fetchProducts')
          router.push('/').catch(() => {})
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteCart (context, payload) {
      console.log(payload.id, '<<<<< ID Cart yang mau didelete')
      axios
        .delete(`/carts/${payload.id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log('Cart berhasil didelete')
          context.dispatch('fetchCartItems')
          // balik lagi ke cartpage
          router.push('/cart').catch(() => {})
        })
        .catch(err => {
          console.log(err)
        })
    },

    updateCart (context) {
      // console.log(context.state.cartitem)
      const newQuantity = {
        id: context.state.cartitem.id,
        quantity: context.state.cartitem.quantity
      }

      axios
        .put(`/carts/${newQuantity.id}`, newQuantity, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data, '<<<<<< didata')
          // console.log(`${data.}`);
          context.dispatch('fetchCartItems')
          router.push('/cart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
