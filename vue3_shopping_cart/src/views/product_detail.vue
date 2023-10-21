<template>
    <h2 v-if="!load_product" class="text-center mt-5">Loading...</h2>
    <div v-else class="row mt-5">
        <div class="col-md-6">
            <img :src="product.image" width="400" alt="product_image" class="img_fluid">
        </div>
            <div class="col-md-6">
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }}</p>
                <h4>$ {{ product.price }}</h4>

                <div class="d-flex mt-3">
                    <div class="btn-group me-auto">
                        <button class="btn btn-outline-primary btn-sm">+</button>
                        <button class="btn btn-outline-primary  btn-sm">0</button>
                        <button class="btn btn-outline-primary  btn-sm">-</button>
                    </div>
                </div>
                 <button class="btn btn-primary mt-3">Add to Cart</button>   
            </div>
       
            
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    const route = useRoute()
    const product = ref({})
    const load_product = ref(false)

    const product_detail = async() => {
        await axios.get(` https://fakestoreapi.com/products/${route.params.id}`)
        .then((response) => {
            // console.log(response.data)

            product.value = response.data 
            load_product.value = true
        }).catch((err) => {
            console.log(err)
        })
    }

    onMounted(() => product_detail())

    console.log(route.params.id)

</script>

<style lang="scss" scoped>

</style>