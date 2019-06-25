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
                        <button class="btn btn-outline-dark">Mulai di sini</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
    name: 'navbar'
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