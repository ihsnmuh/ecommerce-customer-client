<template>
  <div class="col-3 mb-3 border-radius">
        <div class="card border-radius shadow" style="width: 16rem;">
            <img
            class="card-img-top center"
            width="150px"
            height="100%"
            :src="product.image_url"
            :alt="product.name">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">Price: {{ product.price }}</p>
                <p class="card-text">Stock: {{ product.stock }}</p>
                <a href="#" class="btn btn-warning" @click.prevent="AddtoCard"><i class="bi bi-cart-plus-fill"></i> Add to Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product'],
  methods: {
    AddtoCard () {
      const payload = {
        id: +this.product.id
      }
      this.$store.dispatch('AddtoCard', payload)
    }

  }
}
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
