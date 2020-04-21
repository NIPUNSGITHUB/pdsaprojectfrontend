import Vue from 'vue'
import App from './App.vue'
import Multiselect from 'vue-multiselect'
import VueRouter from 'vue-router'
import '../node_modules/vue-multiselect/dist/vue-multiselect.min.css';

Vue.config.productionTip = false

import Login from "./components/Login.vue";
import LocationCrud from "./components/LocationCrud.vue";
import LocationDistance from "./components/LocationDistance.vue";
import LocationFind from "./components/LocationFind.vue";

Vue.use(VueRouter) 
Vue.component('multiselect', Multiselect)

const routes = [
  {
    path: '/',
    name: 'ManageLocation',
    get component() {
      if (localStorage.getItem("logged")) {
        return LocationCrud
      } else {
        return Login
      }
    }
  },
  {
    path: '/login',
    name: "login",
    get component() {
      if (localStorage.getItem("logged")) {
        return LocationCrud
      } else {
        return Login
      }
    }
  },
  {
    path: '/location/distance', get component() {
      if (localStorage.getItem("logged")) {
        return LocationDistance
      } else {
        return Login
      }
    }
  },
  {
    path: '/location/find', get component() {
      if (localStorage.getItem("logged")) {
        return LocationFind
      } else {
        return Login
      }
    }
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// const app = new Vue({
//   router
// }).$mount('#app')

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
