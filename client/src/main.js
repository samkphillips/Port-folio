import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

let store = {
  message: 'Store seems to get passed down?'
  //accessed via "this.$root.$data.store.message"
  //auth stuff can live here I think, Vuex eat your heart out
  //https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch
  /*
  authenticated: false || localStorage.getItem('authenticated'),
  setAuthenticated (newValue) {
    this.authenticated = newValue
  },
  user: {user details, defaults null},
  setUser (newUser) {
    this.user = newUser
  },
  handleLogOut () {
    this.user = null
    this.authenticated = false
    localStorage.clear()
  },
  async checkToken () {
    const session = await CheckSession() //gotta add that from services
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
  */
}

//store.initializeToken()

new Vue({
  render: h => h(App),
  router,
  data: {
    store
  }
}).$mount('#app')
