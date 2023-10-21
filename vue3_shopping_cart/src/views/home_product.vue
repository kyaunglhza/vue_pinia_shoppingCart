<template>
     <h2 class="text-center my-5" v-if="!product_store.load_products">Loading...</h2>
    <div class="container mt-5" v-else> 
        <div class="row">
             <div class="col mb-4" v-for="(product, index) in list" :key="index">
                    <div class="card" style="width: 300px; height: 400px;">
                        <img :src="product.image" width="100" class="mx-auto mt-2" alt="">
                        <div class="card-body">
                            <h4 class="card-title text-center">{{ product.title }}</h4>
                            <p class="card-text text-center">{{ product.category }}</p>
                            <p class="card-text text-center">$ {{ product.price }}</p>
                        <router-link :to="`/product_detail/${product.id}`" class="btn btn-primary mx-2">View Detail</router-link>
                            <button class="btn btn-primary" @click="cart_store.add_cart(product.id, product.price)">Add to Cart</button>
                        </div>     
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { computed } from 'vue';

    //useProductStore 
    import { useProductStore } from '../store/product';
    const product_store = useProductStore()

    const list = computed(() => product_store.list_products)

    //useCartStore 
    import { useCartStore } from '../store/cart';
    const cart_store = useCartStore()

</script>

<style lang="scss" scoped>

</style>