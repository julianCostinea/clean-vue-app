<template>
  <div class="about">
    <h1>This is the products page</h1>
    <button class="button btn-primary" @click="reducePriceByCertainAmount(1)">Reduce price by $1</button>
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters(['products'])

    // products() {
    //   return this.$store.state.products
    // }
  },
  methods: {
    // reducePriceByOne() {
    //   this.$store.dispatch('reducePriceByCertainAmount', 1);
    // }
    ...mapActions(['reducePriceByCertainAmount'])
  }
})

</script>

<style lang="scss">
@import './ProductsView.scss';
</style>
