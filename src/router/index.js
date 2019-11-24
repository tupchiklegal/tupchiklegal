import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { people, practices } from './../globals.js';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

for (const i in people) {
  const person = people[i];
  routes.push({
    path: '/people/' + encodeURI(person.name.split(' ').join('_')),
    name: 1,
    component: () => import(`./../views/People/${person.id}.vue`)
  });
}

for (const i in practices) {
  const practice = practices[i];
  routes.push({
    path: '/practice/' + encodeURI(practice.name.split(' ').join('_')),
    name: 1,
    component: () => import(`./../views/Practices/${practice.id}.vue`)
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
