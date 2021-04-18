<template>
    <tr>
        <th scope="row">{{ cartitem.id }}</th>
        <td>
            <img
            :src="cartitem.Product.image_url"
            :alt="cartitem.Product.name"
            width="150px"
            >
        </td>
        <td>{{cartitem.Product.name}}</td>
        <td>{{cartitem.Product.price}}</td>
        <td>{{cartitem.quantity}}</td>
        <td>{{cartitem.quantity * cartitem.Product.price}}</td>
        <td>
            <button class="btn btn-success btn-sm" @click.prevent="addCart">
            <i class="bi bi-plus-circle"></i>
            </button>
            <button class="btn btn-dark btn-sm" @click.prevent="editQuantityCart">
            <i class="bi bi-pencil-square"></i>
            </button><br>
            <button class="btn btn-danger btn-sm" @click.prevent="deleteCart">
            <i class="bi bi-trash-fill"></i>
            </button>
        </td>
    </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cartitem'],
  methods: {
    deleteCart () {
      const payload = {
        id: +this.cartitem.id
      }
      this.$store.dispatch('deleteCart', payload)
    },
    editQuantityCart () {
      this.$router.push(`/edit/${this.cartitem.id}`)
    },
    addCart () {
      this.$store.dispatch('AddOnetoCard', this.cartitem.Product)
    }
  }
}
</script>

<style>

</style>
