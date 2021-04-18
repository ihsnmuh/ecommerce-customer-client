<template>
  <!-- Edit Cart Quantity -->
    <div class="col-6 offset-3 bg-primary border-radius p-5 cart-list ">
      <h1 style="color: white; font-weight: bold;" class="text-center">
        Edit Quantity
      </h1>
      <hr class="garis" />
      <form @submit.prevent="updateQuantity">
        <div class="mb-3">
          <label class="form-label" style="color: white">Stock :</label>
          <input type="number" class="form-control" v-model="cartitem.quantity"/>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-warning">Update</button>
          <button class="btn btn-danger" @click.prevent='toCartItemPage'>Cancel</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'EditQuantity',
  created () {
    this.fetchCartOne()
  },
  methods: {
    updateQuantity () {
      this.$store.dispatch('updateCart')
    },
    fetchCartOne () {
      this.$store.dispatch('fetchCartOne', this.$route.params.id)
    },
    toCartItemPage () {
      this.$router.push('/cart').catch(() => {})
    }
  },
  computed: {
    cartitem () {
      return this.$store.state.cartitem
    }
  }
}
</script>

<style>
</style>
