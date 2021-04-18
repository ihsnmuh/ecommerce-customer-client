<template>
<!-- Login -->
    <div id="form-login">
        <div class="container mt-5 md-5">
            <div class="row align-items-center">
                <div class="col-md-8 text-center">
                    <div class="container" style="background-color: #fdfde3">
                        <img src="..\assets\061-shopping-cart-colour.svg" alt="" style="height: 400px;">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-light border-radius shadow" style="height: 400px;">
                        <div class="card-body">
                            <form @submit.prevent="login" id="login">
                                <center>
                                    <h3
                                        class="mb-3 mt-3"
                                        style="font-weight: bold; color: #FFC107"
                                    >
                                        Login User
                                    </h3>
                                    <hr style="border: 1px solid black" />
                                </center>
                                <div class="mb-3">
                                    <label for="email" class="form-label"
                                        >Email address:</label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        v-model="email"
                                        required
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password:</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        v-model="password"
                                        required
                                    />
                                </div>
                                <div class="row">
                                    <div class="col d-grid gap-2">
                                        <button type="submit" class="btn btn-warning">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <div>
                                <p>Don't Have Any Account ? <a href="#form-register" @click.prevent='toRegister'>Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register').catch(() => {})
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
