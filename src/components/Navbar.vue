<template>
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-warning shadow sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand bold-font" style="font-weight: bold" >Barokah Gadget Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav col-8">
                    <a class="nav-link" href="#">Cart</a>
                </div>
                <div class="col-4 text-end">
                    <button class="btn btn-dark">Logout</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
