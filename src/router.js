import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const About = () => import('./views/About.vue')
const Category = () => import('./views/Category.vue')
const Foods = () => import('./views/Foods.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/category/:category',
      name: 'foods',
      component: Foods
    }
  ]
})
