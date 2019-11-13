<template>
    <b-navbar id="nav-container" toggleable="lg" type="dark" class="fixed-top">
      <b-container>
        <b-navbar-brand href="#">
          <router-link to="/">
            <img src="./../assets/logo_1.png" height="80" alt="logo" class="mt-1 mb-1 mr-4">
            <h3 id="brand-name">Tupchik Legal Group</h3>
          </router-link>
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
</template>


// <script>

// export default {
//   data() {
//     return {
//       navAlpha: 0,
//       navBGTweened: {}
//     }
//   },
// }

// </script>

<style scoped lang="scss">
#nav-container {
  background: white;
}
#brand-name {
  color: rgba(white, .8) !important;
  display: inline;
  font-family: 'sf_old_republicregular';
}
.nav-link {
  font-family: 'sf_old_republicregular';
  color: rgba(white, .8) !important;
}
</style>