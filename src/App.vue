<template>
  <div id="app">
    
    <div class="bg-dark">
      <b-container class="text-right text-white p-1">
        <a class="text-light small" href="#">Contact Us (716) 261-0917</a>
      </b-container>
    </div>

    <b-navbar toggleable="lg" type="light" variant="light" class="shadow">
      <b-container>
        <b-navbar-brand href="#">
          <img src="./assets/logo_1.png" height="60" alt="logo" class="mr-4">

          <span>Tupchick Legal Group</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">ABOUT</router-link>
            </li>
            <b-nav-item-dropdown text="PRACTICE AREAS" right>
              <li>
                <router-link class="dropdown-item" to="/practice/divorce-seperation">
                  Divorce & Seperation
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/high-asset">
                  High-Asset / High Net Worth Divorce Representation
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/child-custody">
                  Child Custody & Visitation
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/pre-marriage">
                  Pre-Marriage Planning
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/modifications">
                  Modifications of Divorce Judgment
                </router-link>
              </li>
                      
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

      <div style="min-height: 900px;">
        <transition name="router-anim" enter-active-class="animated fadeIn">
            <router-view ></router-view>
        </transition>
      </div>

    <footer class="p-4">
      <div>
        Home About Practice Areas
      </div>
      <div>Tupckick Legal Group Copyright 2019</div>
    </footer>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css';
</style>

