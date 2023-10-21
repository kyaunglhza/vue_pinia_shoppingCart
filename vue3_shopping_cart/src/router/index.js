
import { createRouter, createWebHistory } from 'vue-router' 
import home_products from '../views/home_product.vue'
import product_detail from '../views/product_detail.vue'
import cart from '../views/cart.vue'

const routes = [
  {
    path: '/',
    name: 'home_products',
    component: home_products
  },
  {
    path: '/product_detail/:id',
    name: 'product_detail',
    component: product_detail
  },
    {
    path: '/cart',
    name: 'cart',
    component: cart
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router