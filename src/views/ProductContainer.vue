<template>
<!-- Product Container -->
<div class="container mb-5">
    <div class="row bg-warning border-radius shadow">
            <div class="text-center mt-4">
                <h1 style="font-weight: bold; color:white" >All Product</h1>
                <hr class="garis">
            </div>
        <!-- Card Product -->
        <div class="row">
            <CardProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
            ></CardProduct>
        </div>
    </div>
</div>
</template>

<script>
import CardProduct from '@/components/CardProduct'

export default {
  name: 'ProductContainer',
  components: {
    CardProduct
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>

</style>
