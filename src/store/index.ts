import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
        price: 200,
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Product 3 description',
        price: 300,
      },
    ],
  },
  getters: {
    products: (state) => {
      return state.products;
    },

    halfOffProducts: (state) => {
      return state.products.map((product) => {
        return {
          ...product,
          price: product.price / 2,
        };
      });
    },
  },
  // make fetch from mockapi to get products
  mutations: {
    reducePriceByAmount(state, payload) {
      state.products.forEach((product) => {
        product.price -= payload;
      });
    },
  },
  actions: {
    reducePriceByCertainAmount(context, payload) {
      setTimeout(() => {
        context.commit('reducePriceByAmount', payload);
      }, 2000);
    },
  },
  modules: {},
});

