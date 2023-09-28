<template>
    <div class="product-card">
        <h3>{{ product.name }}</h3>
        <p class="paragraph">{{ product.description }}</p>
        <p class="paragraph">Price: ${{ product.price }}</p>
        <div class="buttons">
            <button class="button btn-primary" @click="addToCart">Add to cart</button>
            <button class="button btn-success" @click="buyNow">Buy now</button>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'

type Product = {
    id: number
    name: string
    description: string
}

export default Vue.extend({
    name: 'ProductCard',
    props: {
        product: {
            type: Object as () => Product,
            required: true
        }
    },
    methods: {
        addToCart() {
            console.log('Add to cart')
        },
        buyNow() {
            console.log('Buy now')
        }
    }
})

</script>

<style lang="scss" scoped>
@import './ProductCard.scss';
</style>