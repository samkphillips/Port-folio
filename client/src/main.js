import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'

import { CheckSession } from './services/Auth'

Vue.config.productionTip = false
Vue.use(VueRouter)

//create store and add it to data.
//This object can be accessed anywhere within the Vue instance.
//Access via this.$root.$data.store
let store = {
  authenticated: false || localStorage.getItem('authenticated'),
  setAuthenticated(newValue) {
    this.authenticated = newValue
  },
  user: null, //user object lives here, just defaults as null
  setUser(newUser) {
    this.user = newUser
  },
  handleLogOut() {
    this.user = null
    this.authenticated = false
    localStorage.clear()
  },
  async checkToken() {
    const session = await CheckSession()
    this.user = session
    this.authenticated = true
    localStorage.setItem('authenticated', '1')
  },
  initializeToken() {
    const token = localStorage.getItem('token')
    if (token) {
      this.checkToken()
    }
  }
}

store.initializeToken()

new Vue({
  render: h => h(App),
  router,
  data: {
    store
  }
}).$mount('#app')
