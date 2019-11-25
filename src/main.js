import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import AOS from 'aos';
import { practices, people } from './globals.js';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;

Vue.prototype.$people = people;
Vue.prototype.$practices = practices;

Vue.use(VueScrollTo, {
  duration: 1400,
  offset: -100
});

new Vue({
  created () {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app');
