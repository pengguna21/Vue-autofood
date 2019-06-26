<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <img src="../assets/logo-autofood.svg" alt="logo" class="navbar-brand">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Tentang</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">layanan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/category" class="btn btn-outline-dark">Mulai di sini</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="fa fa-shopping-cart"></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <ul class="list-group">
                                <li class="list-group-item" v-for="item in carts" :key="item.idFood">
                                    <div class="media">
                                        <img :src="item.foodImage" class="mr-3" alt="" width="50px">
                                        <div class="media-body">
                                            <p>{{ item.foodName }}</p>
                                            <p>Qty : {{ item.qty }} <!--<button class="btn btn-danger"><i class="fa fa-trash"></i></button>--> </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="dropdown-divider"></div>
                            <button class="btn btn-success float-right mr-2" @click="clickCheckout()">Checkout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        carts() {
            return this.$store.state.data.carts
        }
    },
    methods: {
        clickCheckout: function () {
            this.$store.commit('saveCart')
        }
    },
}
</script>

<style lang="scss" scoped>
    $primary: #1FAB89;

    .nav-item{
        margin-left: 20px;
    }

    .active{        
        a{
            color: $primary !important;
        }
    }

    .nav-link{
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }
</style>