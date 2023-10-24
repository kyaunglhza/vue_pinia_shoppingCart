<template>

    <h2 class="text-center mt-5" v-if="!product_store.load_products">Loading...</h2>
    <div class="container" v-else>
         <h3>Shopping Cart</h3>
 
    <table class="table mt-5">
        <thead>
            <tr>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart, index) in carts" :key="index">
                <td>
                    <img :src="cart.product.image" alt="" class="img-thumbnail" width="100">
                    {{ cart.product.title }}
                </td>
                <td>$ {{ cart.product.price }}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" @click="cart_store.decrement_quantity(index)">-</button> 
                    <span class="mx-2">{{ cart.quantity }}</span>
                    <button class="btn btn-sm btn-secondary" @click="cart_store.increment_quantity(index)">+</button>
                </td>
                <td>{{ cart.total_product }}</td>
                <td>
                    <button class="btn btn-danger" @click="cart_store.remove_cart(index)">Remove</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-danger btn-sm" @click="cart_store.clear_cart()">Clear Cart</button>
    <button class="btn btn-primary btn-sm mx-3">$ {{ cart_store.total }}</button>
    </div>
</template>  

<script setup>
    import { computed } from 'vue';

    //useCartStore 
    import { useCartStore } from '../store/cart';
     const cart_store = useCartStore()

    //useProductStore 
    import { useProductStore } from '../store/product';
    const product_store = useProductStore( )

    const carts = computed(() => cart_store.cart_previews)

   
</script>

<style lang="scss" scoped>

</style>