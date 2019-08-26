import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import PracticeArea1 from './components/PracticeArea1'
import PracticeArea2 from './components/PracticeArea2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/practice/1',
      name: 'Practice 1',
      component: PracticeArea1
    },
    {
      path: '/practice/2',
      name: 'Practice 2',
      component: PracticeArea2
    }
  ]
})