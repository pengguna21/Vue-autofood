<template>
  <div class="detail">
    <Navbar />

    <div class="container mb-5">
      <div class="row mt-5 mb-5">
        <div class="offset-md-3 col-md-6 text-center">
          <hr>
          <p>category</p>
          <h1>{{ category }}</h1>
          <hr>
        </div>
      </div>
      {{local}}
      <div class="row">
        <div class="col-md-3" v-for="item in foods" :key="item.idMeal">
          <a class="card-link" data-toggle="modal" data-target="#clickFood" @click="showFood(item.idMeal)">
            <div class="card mb-3 text-center">
              <img :src="item.strMealThumb" class="card-img-top" :alt="item.strMeal">
              <div class="card-body">
                <h5 class="card-title">{{ item.strMeal }}</h5>
              </div>
            </div> 
          </a>

          <!-- Modal -->
          <div class="modal fade" id="clickFood" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="media">
                    <img :src="detailFood.strMealThumb" class="align-self-start mr-3" :alt="detailFood.strMeal" width="200px">
                    <div class="media-body">
                      <h3 class="mt-0 mb-3 h-3">{{ detailFood.strMeal }}</h3>
                      <p class="text-secondary mb-0">Location</p>
                      <h5>{{ detailFood.strArea }}</h5>
                      <p class="text-secondary mb-0">Category</p>
                      <h5>{{ detailFood.strCategory }}</h5>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="row">
                    <div class="col-8">
                      <input type="number" class="form-control" :class="{ 'is-valid': isTrue, 'is-invalid': isFalse }" placeholder="qty" v-model="qtyBuy">
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                      <div class="invalid-feedback">
                        Please type more than one.
                      </div>
                    </div>
                    <div class="col-4">
                      <button type="button" class="btn btn-primary" @click="clickOrder(detailFood.idMeal, detailFood.strMeal, detailFood.strMealThumb)">Order</button>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
  name: 'detail',
  components: {
    Navbar,
    Footerpart
  },
  data() {
    return {
      category: this.$route.params.category,
      foods: [],
      detailFood: '',
      qtyBuy: '',
      isTrue: false,
      isFalse: false,
      local: ''
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
    var asd = JSON.parse(localStorage.getItem("orders"))
    var as = asd[1]
    var zx = as.shopCart
    this.local = zx[0].foodName
  },
  methods: {
    showFood: function (idFood) {
      var self = this;
      axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idFood)
      .then(function (response) {
        self.detailFood = response.data.meals[0];
        
      })
      .catch(function (error) {
        this.error = error
      });
    },
    clickOrder: function (id, foodName, foodImage) {
      const qty = this.qtyBuy
      if (this.qtyBuy < 1) {
        this.isFalse = true
      } else {
        this.isFalse = false
        this.$store.commit('addOrder', {id, foodName, foodImage, qty})
        this.qtyBuy = ''
        $('#clickFood').modal('hide')
      }
    }
  },
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
      cursor: pointer;
    }
  }

  .card-title{
    font-family: Rubik;
    font-weight: 700;
  }

  .modal{
    .form-control{
      width: auto;
    }
  }
</style>