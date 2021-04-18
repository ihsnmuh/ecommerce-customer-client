<template>
  <div class="home" style="text-align: center;">
    <Navbar></Navbar>
    <Carousel></Carousel>
    <ProductContainer></ProductContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import ProductContainer from '@/views/ProductContainer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    ProductContainer
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
