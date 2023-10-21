<template>
    <div class="container">
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
                    <button class="btn btn-sm btn-secondary">-</button> 
                    <span class="mx-2">{{ cart.quantity }}</span>
                    <button class="btn btn-sm btn-secondary">+</button>
                </td>
                <td>{{ cart.total_product }}</td>
                <td>
                    <button class="btn btn-danger">Remove</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    //useCartStore 
    import { useCartStore } from '../store/cart'

    const carts = computed(() => cart_store.cart_previews)

    const cart_store = useCartStore()
</script>

<style lang="scss" scoped>

</style>