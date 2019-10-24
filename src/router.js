import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'

import Practice1 from './components/practices/1'
import Practice2 from './components/practices/2'
import Practice3 from './components/practices/3'
import Practice4 from './components/practices/4'
import Practice5 from './components/practices/5'
import bio from './components/bio'



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
      path: '/practice/divorce-seperation',
      name: 'Divorce & Seperation',
      component: Practice1
    },
    {
      path: '/practice/high-asset',
      name: 'High-Asset / High Net Worth Divorce Representation',
      component: Practice2    
    },
    {
      path: '/practice/child-custody',
      name: 'Child Custody & Visitation',
      component: Practice3    
    },
    {
      path: '/practice/pre-marriage',
      name: 'Pre-Marriage Planning',
      component: Practice4    
    },
    {
      path: '/practice/modifications',
      name: 'Modifications of Divorce Judgment',
      component: Practice5    
    },
    {
      path: '/about/vanessa-gabriele',
      name: 'vanessa-gabriele',
      component: bio    
    }
  ]
})