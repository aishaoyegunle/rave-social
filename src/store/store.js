import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    productInModal: {}
  },
  mutations: {
    SHOW_MODAL:(state, product) => {
      state.showModal = true;
      state.productInModal = product
    },
    HIDE_MODAL: (state) => {
      state.showModal = false;
      state.productInModal = {}
    }
  },
  getters: {
    getModalStatus: state => state.showModal,
    getProductInModal: state => state.productInModal,
  }
});

