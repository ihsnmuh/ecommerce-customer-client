<template>
    <!-- Carousel Promo -->
    <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" style="height:400px">
                <img src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Samsung Galaxy S21</h5>
                    <p>Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go. And with Galaxy's fastest chipset, strongest glass, 5G and an all-day battery, Ultra easily lives up to its name.</p>
                </div>
            </div>
            <div class="carousel-item" style="height:400px">
                <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1522&q=80" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Canon EOS 70D</h5>
                    <p>Canon EOS 70D Body only without Wifi adalah DSLR termutakhir yang memudahkan pengguna mengubah suasana sehari-hari menjadi foto yang ekspresif. Dilengkapi dengan AF CMOS Piksel Ganda dengan deteksi fasa sensor teknologi AF yang memungkinkan kecepatan pemfokusan cepat yang impresif selama pemotretan foto dan film Live View.</p>
                </div>
            </div>
            <div class="carousel-item" style="height:400px">
                <img src="https://images.unsplash.com/photo-1603946877690-d410437c29aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Apple Watch Series</h5>
                    <p>The future of health is on your wrist.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style>

</style>
