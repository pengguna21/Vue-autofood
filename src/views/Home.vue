<template>
  <div class="home">
    <Navbar />

    <!-- first content -->
    <div class="first-content">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="jumbotron">
              <h1 class="jumbotron-title mb-5">Why bother when you can order?</h1>
              <p class="jumbotron-text mb-5">Dengan <strong>Autofood</strong> semua permasalahan lapar dapat terselesaikan. Tidak perlu lagi bingung mengantri dan terjebak macet. karena semua sudah Auto-selesai dengan <strong>Autofood</strong>!</p>
              <router-link to="/" class="btn btn-primary btn-lg">TENTANG KAMI</router-link>
            </div>
          </div>
          <div class="col-md-7">
            <img src="../assets/Slideshow.svg" alt="first-image" class="first-img">
          </div>
        </div>
      </div>
    </div>
    <!-- ./first content -->
    <hr>
    <!-- second content -->
    <div class="second-content">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <img src="../assets/tentang-image.svg" alt="" class="d-none d-md-block">
          </div>
          <div class="col-md-6">
            <p class="text-secondary">sekilas info</p>
            <h1 class="text-logo mb-5">Auto<span class="text-food mr-4">food.</span><img src="../assets/Logo.svg" alt="logo"></h1>
            <p class="text-desc mb-5">Adalah aplikasi untuk memudahkan kebutuhan sehari hari terutama dalam masalah makanan. Kini anda tak perlu lagi datang langsung ke tempat untuk memesan makanan. Anda hanya perlu menggunakan Autofood dan masalah Auto-selesai.</p>
            <button class="btn btn-outline-primary btn-lg">LAYANAN KAMI</button>
          </div>
        </div>
        <div class="row second-group">
          <div class="col-md-4">
            <div class="media mb-4">
              <div class="media-body">
                <h5 class="mt-0 mb-1 mr-4 text-right media-title">Diunduh sebanyak</h5>
              </div>
              <img src="../assets/Group-1.svg" class="ml-3 media-img" alt="group-1">
            </div>
            <h1 class="media-number text-center">72.3<span class="text-second">rb</span></h1>
          </div>
          <div class="col-md-4">
            <div class="media mb-4">
              <div class="media-body">
                <h5 class="mt-0 mb-1 mr-4 text-right media-title">Pengguna Aktif sebanyak</h5>
              </div>
              <img src="../assets/Group-2.svg" class="ml-3 media-img" alt="group-2">
            </div>
            <h1 class="media-number text-center">58.8<span class="text-second">rb</span></h1>
          </div>
          <div class="col-md-4">
            <div class="media mb-4">
              <div class="media-body">
                <h5 class="mt-0 mb-1 mr-4 text-right media-title">Restaurant tergabung</h5>
              </div>
              <img src="../assets/Group-3.svg" class="ml-3 media-img" alt="group-3">
            </div>
            <h1 class="media-number text-center">30.6<span class="text-second">rb</span></h1>
          </div>
        </div>
      </div>
    </div>
    <!-- ./second content -->

    <!-- third content -->
    <div class="third-content">
      <div class="row third-row">
        <div class="col-md-4 third-left">
          <div class="list-group">
            <router-link to="/" class="list-group-item mb-5">
              <img src="../assets/logo-autofood.svg" alt="logo">
            </router-link>
            <p to="/" class="list-group-item list-group-item-title mb-4">Kami menawarkan solusi.</p>
            <router-link to="/" class="list-group-item list-group-item-active">PEMESANAN</router-link>
            <router-link to="/" class="list-group-item">PEMBAYARAN</router-link>
            <router-link to="/" class="list-group-item">PENGIRIMAN</router-link>
          </div>
          <img src="../assets/Plater.svg" alt="plate" class="mt-3">
        </div>
        <div class="col-md-8 third-right">
          <div class="row">
            <div class="col-md-6 mb-5">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title mb-5">Pemesanan</h5>
                  <img src="../assets/order.svg" class="card-img-top mb-5" alt="order">
                  <p class="card-text">Anda dapat memesan makanan ke restaurant favorit di sekitar. Memudahkan pembelian makanan tanpa harus mengantri.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title mb-5">Pembayaran</h5>
                  <img src="../assets/Pembayaran.svg" class="card-img-top mb-5" alt="order">
                  <p class="card-text">Pembayaran semakin mudah terintegrasi dengan Virtual payment seperti Ovo, Dana, dan Mobile banking dari bank ternama.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title mb-5">Pengiriman</h5>
                  <img src="../assets/Pengiriman Icon.svg" class="card-img-top mb-5" alt="order">
                  <p class="card-text">Pembayaran semakin mudah terintegrasi dengan Virtual payment seperti Ovo, Dana, dan Mobile banking dari bank ternama.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./third content -->

    <!-- fourth content -->
    <div class="fourth-content">
      <img src="../assets/Download stripe background.svg" alt="background-content" class="fourth-background">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Unduh <img src="../assets/logo-autofood.svg" alt="logo" class="ml-4"></h5>
          <p class="card-text">Unduh dan pasang aplikasi Autofood di handphone anda sekarang juga. Tersedia pada iOS dan Android.</p>
          <ul class="list-group list-group-horizontal justify-content-center">
            <li class="list-group-item">
              <button class="btn btn-purple">IOS store</button>
            </li>
            <li class="list-group-item">
              <button class="btn btn-purple">Google Play</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ./fourth content -->

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  $primary: #1FAB89;

  .text{
    color: #171717;
    font-style: normal;
  }

  .first-content{
    padding: 7rem 0;
  }

  .jumbotron{
    background-color: white;
    padding: 2rem 5rem 2rem 0;
  }

  .jumbotron-title{
    @extend .text;
    font-family: Rubik;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
  }

  .jumbotron-text{
    @extend .text;
    font-size: 18px;
    line-height: 32px;
  }

  .first-img{
    width: 42rem;
    float: right;
  }

  .second-content{
    padding: 5rem 0;

    .text-secondary{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 26px;
    }

    .text-logo{
      @extend .text;
      font-family: Rubik;
      font-weight: bold;
      font-size: 48px;
      line-height: 60px;
    }

    .text-food{
      color: $primary;
    }

    .text-desc{
      @extend .text;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      color: #4F4F4F;
    }
  }

  .second-group{
    padding-top: 3rem;
  }

  .media-title{
    font-family: Rubik;
    font-weight: bold;
    font-size: 28px;
    line-height: 26px;
    color: #333333;
  }

  .media-number{
    color: $primary;
    font-style: normal;
    font-weight: normal;
    font-size: 52px;
    line-height: 61px;

    .text-second{
      color: #B1B1B1;
    }
  }

  .third-row{
    margin-left: 0;
    margin-right: 0;
  }

  .third-left{
    background-color: #F7F7F7;
    padding: 0;
  }

  .third-right{
    padding: 5rem;
    
    .card{
      padding: 2rem;
    }

    .card-img-top{
      width: 100px;
    }
  }

  .list-group{
    padding: 5rem 5rem 0 4rem;
  }

  .list-group-item{
    @extend .text;
    border: none;
    background-color: transparent;
    font-family: Rubik;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-decoration: none;
  }

  .list-group-item-active{
    color: $primary;
  }

  .list-group-item-title{
    @extend .text;
    font-family: Rubik;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
  }

  .fourth-content{
    height: 600px;

    .card{
      width: 50%;
      position: relative;
      top: -150px;
      left: 25%;
      padding: 3rem 5rem;

      .list-group{
        padding-top: 0;
      }
    }
  }

  .fourth-background{
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
</style>