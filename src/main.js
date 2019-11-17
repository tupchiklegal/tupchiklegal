import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import AOS from 'aos';

Vue.config.productionTip = false;

new Vue({
  created () {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app');
