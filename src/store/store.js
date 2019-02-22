import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    productInModal: {},
    productsInCart: [
      {
        product: {
          id: 'f001',
          src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
          price: 240000,
          name: 'Gucci Flops: Men shoe',
          info: 'Available in 44,45,46',
        },
        quantity: 2
      },
      {
        product: {
          src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
          price: 240000,
          name: 'Gucci Flops: Men shoe',
          info: 'Available in 44,45,46',
        },
        quantity: 2
      }
    ]
  },
  mutations: {
    SHOW_MODAL:(state, product) => {
      state.showModal = true;
      state.productInModal = product
    },
    HIDE_MODAL: (state) => {
      state.showModal = false;
      state.productInModal = {}
    },
    ADD_TO_CART: (state, product) => {
      state.productsInCart.push(product);
    },
    INCREMENT_QUANTITY: (state, index) => {
      state.productsInCart[index].quantity += 1;
    },
    DECREMENT_QUANTITY: (state, index) => {
      state.productsInCart[index].quantity -= 1;
    },
    REMOVE_FROM_CART: (state, index) => {
      state.productsInCart.splice(index, 1);
    }
  },
  getters: {
    getModalStatus: state => state.showModal,
    getProductInModal: state => state.productInModal,
    getProductsInCart: (state) => state.productsInCart,
    getCartCount: (state) => state.productsInCart.length,
  }
});

