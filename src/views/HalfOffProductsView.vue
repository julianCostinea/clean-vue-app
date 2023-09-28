<template>
    <div class="about">
        <h1>This is the half off products page</h1>
        <div class="products">
            <ProductCard v-for="product in halfOffProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductCard from '@/components/ProductCard/ProductCard.vue'

export default Vue.extend({
    name: 'ProductsView',
    // data() {
    //   return {
    //     products
    //   }
    // },
    components: {
        ProductCard
    },
    computed: {
        halfOffProducts() {
            return this.$store.getters.halfOffProducts
        }
    }
})

</script>

<style lang="scss">
@import './ProductsView.scss';
</style>
