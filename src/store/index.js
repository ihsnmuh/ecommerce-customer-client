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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Login in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
        })
    },

    register (context, payload) {
      axios.post('/register', payload)
        .then(({ data }) => {
          console.log('Berhasil Register')
          router.push('/login')

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Register in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Add to Cart is successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
        })
    },

    AddOnetoCard (context, payload) {
      console.log(payload.id, '<<<<<<<< Produk yang di Add')
      axios.post(`/carts/${payload.id}`, payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          console.log('Produk berhasil ditambahkan')
          context.dispatch('fetchCartItems')
          router.push('/cart').catch(() => {})

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Add to Cart is successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Delete Cart is successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please correctly',
            text: `${err.response.data.message}`
          })
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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Update Cart is successfully'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/login')

      // Sweetalert
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Logout is successfully'
      })
    }
  },
  modules: {
  }
})
