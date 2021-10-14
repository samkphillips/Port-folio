import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'
import Account from './pages/Account'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/explore', component: Explore, name: 'Explore' },
  { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/account', component: Account, name: 'Account' }
]

export default new VueRouter({ routes, mode: 'history' })
