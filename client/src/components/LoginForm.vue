<template>
<div>
    <h1>Log In</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="email" type="email" />
      <input v-model="password" placeholder="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { SignInUser } from '../services/Auth'

export default {
  name: 'LoginForm',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async login() {
      const payload = await SignInUser({ email: this.email, password: this.password })
      this.email = ''
      this.password = ''
      this.$root.$data.store.setUser(payload)
      this.$root.$data.store.setAuthenticated(true)
      this.$router.push('/')
    }
  }
}
</script>