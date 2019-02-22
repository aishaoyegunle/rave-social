import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import router from './router';
import FlashMessage from "@smartweb/vue-flash-message";

Vue.use(FlashMessage);

Vue.config.productionTip = false;

Vue.filter( 'currency', function(value){
  return "N " + parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "0,");
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
