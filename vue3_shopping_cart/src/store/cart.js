import { defineStore } from "pinia";

import { computed, ref } from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

//useProductStore
import { useProductStore } from "./product";


export const useCartStore = defineStore('useCartStore', () => {

    const cart = ref([])

    const add_cart = (id, price, quantity = 1) => {
        const data = {
            id,
            price,
            quantity
        }


        const findId = cart.value.find(e => e.id === data.id)

            if(findId)
            {
                alert_cart_fail()
            }
            else
            {
                cart.value.push(data)
                saveToLocalStorage()
                alert_cart_add()
            }

        console.log(cart.value)
    }

    const add_cart_detail = (id, price, quantity) => {
        const data = {
            id,
            price,
            quantity
        }

        const findId_detail = cart.value.find(e => e.id == data.id )

        if(findId_detail)
        {
            const findIndexProduct = cart.value.findIndex(e => e.id == data.id)
            cart.value[findIndexProduct].quantity = cart.value[findIndexProduct].quantity + quantity
            saveToLocalStorage()
            alert_cart_add()
        }
        else
        {
            cart.value.push(data)
            saveToLocalStorage()
            alert_cart_add()
        }
    }



    const saveToLocalStorage = () => {
        localStorage.setItem('cart' , JSON.stringify(cart.value))
    }

    const loadFromLocalStorage = () => {
        if(localStorage.getItem('cart'))
        {
            cart.value= JSON.parse(localStorage.getItem('cart'))
        }
    }

    const cart_previews = computed(() => {
        const product_store = useProductStore()

        return cart.value.map((prd , i) => {
            const findIndexProduct = product_store.products.findIndex(e => e.id == prd.id )

           return {
                product : product_store.products[findIndexProduct],
                quantity : cart.value[i].quantity,
                total_product : product_store.products[findIndexProduct].price * cart.value[i].quantity
            }
        })
    })


    const alert_cart_add = () => {
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Successfully Added to Cart',
        showConfirmButton: false,
        timer: 1500
        })

        // alert('success')
    }

    const alert_cart_fail = () => {
        Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Fail to Add Product',
        showConfirmButton: false,
        timer: 1500
        })

        // alert('fail')
    }

    const increment_quantity = (i) => {
        cart.value[i].quantity += 1
        saveToLocalStorage()
    }

    const decrement_quantity = (i) => {
        cart.value[i].quantity -= 1 
        saveToLocalStorage()

        if(cart.value[i].quantity == 0)
        {
            cart.value.splice(i, 1)
            saveToLocalStorage()
        }
    }

    const remove_cart = (i) => {
        cart.value.splice(i, 1)
        saveToLocalStorage()
    }

    const clear_cart = () => {
        cart.value = []
        saveToLocalStorage()
    }

    const total = computed(() => {
        return cart.value.reduce((sum, prd) => sum + prd.price * prd.quantity , 0)
    })

    return { cart, add_cart, loadFromLocalStorage, cart_previews, increment_quantity, decrement_quantity, remove_cart, clear_cart, add_cart_detail, total }

})