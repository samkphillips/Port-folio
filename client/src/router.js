import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'
import Account from './pages/Account'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/explore', component: Explore, name: 'Explore' },
    {
      path: '/portfolio/:portfolio_id',
      component: Portfolio,
      name: 'Portfolio'
    },
    { path: '/login', component: Login, name: 'Login' },
    {
      path: '/account',
      component: Account,
      name: 'Account',
      beforeEnter: async function(to, from, next) {
        try {
          const isAuthenticated = await router.app.$data.store.authenticated
          if (isAuthenticated) {
            next()
          } else {
            next({ path: '/login' })
          }
        } catch (error) {
          console.log(error)
          next({ path: '/login' })
        }
      }
    }
  ],
  mode: 'history'
})

export default router
