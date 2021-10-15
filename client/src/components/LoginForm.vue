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
import { /*SignInUser /*, RegisterUser/* */ } from '../services/Auth'

export default {
  name: 'LoginForm',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      // await SignInUser({  })
      console.log(this.$root.$data.store.message)
      this.$root.$data.store.message += '?'
      console.log(this.$root.$data.store.message)
    }
  }
}
</script>