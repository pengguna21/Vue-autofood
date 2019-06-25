<template>
  <div class="detail">
    <Navbar />
    
    <div class="container mb-5">
      <div class="row mt-5 mb-5">
        <div class="offset-md-3 col-md-6 text-center">
          <hr>
          <h1>Category</h1>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="item in foods" :key="item.idMeal">
          <div class="card mb-3 text-center">
            <img :src="item.strMealThumb" class="card-img-top" :alt="item.strMeal">
            <div class="card-body">
              <h5 class="card-title">{{ item.strMeal }}</h5>
            </div>
          </div> 
        </div>  
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'detail',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      foods: []
    }
  },
  mounted: function(){
    var self = this;
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.$route.params.category)
    .then(function (response) {
      self.foods = response.data.meals;
    })
    .catch(function (error) {
      this.error = error
    });
  }
}
</script>

<style lang="scss" scoped>
  $primary: #1FAB89;

  .card{
    border: none;
    color: #1F1F1F;
    padding: 2rem;
    
    &:hover{
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
      color: $primary;
    }
  }

  .card-title{
    font-family: Rubik;
    font-weight: 700;
  }
</style>