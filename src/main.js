import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import AOS from 'aos';
import { practices, people } from './globals.js';

Vue.config.productionTip = false;

Vue.$people = people;
Vue.$practices = practices;

new Vue({
  created () {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app');
