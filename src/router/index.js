import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { people, practices } from './../globals.js';
import VueScrollTo from 'vue-scrollto';


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
    name: `person-${person.id}`,
    component: () => import(`./../views/People/${person.id}.vue`)
  });
}

for (const i in practices) {
  const practice = practices[i];
  routes.push({
    path: '/practice/' + encodeURI(practice.name.split(' ').join('_')),
    name: `practice-${practice.id}`,
    component: () => import(`./../views/Practices/${practice.id}.vue`)
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, {
        onDone: _ => window.location.hash = ""
      });
      return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }  
  }
});

export default router;
