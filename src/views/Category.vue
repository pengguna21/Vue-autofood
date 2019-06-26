<template>
  <div class="category">
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
        <div class="col-md-3" v-for="item in categories" :key="item.idCategory">
          <router-link :to="{name: 'foods', params: {category: item.strCategory}}" class="card-link">
            <div class="card mb-3 text-center">
              <img :src="item.strCategoryThumb" class="card-img-top" :alt="item.strCategory">
              <div class="card-body">
                <h5 class="card-title">{{ item.strCategory }}</h5>
              </div>
            </div> 
          </router-link>
        </div>  
      </div>
    </div>

    <Footerpart />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footerpart from '@/components/Footerpart.vue'
import axios from 'axios'

export default {
  name: 'category',
  components: {
    Navbar,
    Footerpart
  },
  data() {
    return {
      categories: []
    }
  },
  mounted: function(){
    var self = this;
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(function (response) {
      self.categories = response.data.categories;
    })
    .catch(function (error) {
      this.error = error
    });
  }
}
</script>

<style lang="scss" scoped>
  $primary: #1FAB89;
  
  .card-link{
    &:hover{
      text-decoration: none;
      
      .card{
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
      }

      .card-title{
        color: $primary;
      }
    }
  }

  .card{
    border: none;
    color: #1F1F1F;
    padding: 2rem;
  }

  .card-title{
    font-family: Rubik;
    font-weight: 700;
  }
</style>