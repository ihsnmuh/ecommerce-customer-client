<template>
<!-- List Cart -->
<div class="container mb-5">
    <div class="row bg-warning border-radius shadow">
        <div class="text-center mt-4">
            <h1 style="font-weight: bold; color:white">Your Cart</h1>
            <hr class="garis">
        </div>
        <div class="col">
            <!-- Tabel Product -->
            <table class="table table-light table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem
                    v-for="(cartitem) in cartitems"
                    :key="cartitem.id"
                    :cartitem="cartitem"
                    ></CartItem>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import CartItem from '@/components/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  created () {
    this.fetchCartItems()
  },
  computed: {
    cartitems () {
      return this.$store.state.cartitems
    }
  },
  methods: {
    fetchCartItems () {
      this.$store.dispatch('fetchCartItems')
    }
  }

}
</script>

<style>

</style>
