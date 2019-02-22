import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import router from './router';
import FlashMessage from "@smartweb/vue-flash-message";

Vue.use(FlashMessage);

Vue.config.productionTip = false;

Vue.filter( 'currency', function(value){
  return "N " + parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
