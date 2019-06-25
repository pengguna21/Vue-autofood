<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <img src="../assets/logo-autofood.svg" alt="logo-autofood">
                </div>
                <div class="col-lg-2">
                    <div class="list-group">
                        <li class="list-group-item list-group-item-action list-group-item-title mb-3">
                            Umum
                        </li>
                        <router-link to="/" class="list-group-item list-group-item-action">Home</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Tentang</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Layanan</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Download</router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="list-group">
                        <li class="list-group-item list-group-item-action list-group-item-title mb-3">
                            Layanan
                        </li>
                        <router-link to="/" class="list-group-item list-group-item-action">Pemesanan</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Pembayaran</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Pengiriman</router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="list-group">
                        <li class="list-group-item list-group-item-action list-group-item-title mb-3">
                            Bantuan
                        </li>
                        <router-link to="/" class="list-group-item list-group-item-action">Ketentuan Layanan</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Privasi</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">Contact</router-link>
                        <router-link to="/" class="list-group-item list-group-item-action">FAQ</router-link>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="list-group">
                        <li class="list-group-item list-group-item-action list-group-item-title mb-3">
                            Langganan
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <input type="text" class="form-control" placeholder="@   Email anda"> 
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <button class="btn btn-outline-primary">BERLANGGANAN</button>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        background-color: #F6F6F6;    
    
        .container{
            padding: 4rem 0;
        }
    }

    .list-group-item{
        border: none;
        background-color: transparent;
    }

    .list-group-item-title{
        font-family: Rubik;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
        color: #4D4D4D;
    }
</style>