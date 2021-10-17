<template>
<div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <input v-model="email" placeholder="email" type="email" />
      <input v-model="username" placeholder="username" />
      <input v-model="password" placeholder="password" type="password" />
      <input v-model="confirmPassword" placeholder="confirm password" type="password" />
      <button type="submit" :disabled="!submitReady">Submit</button>
    </form>
  </div>
</template>

<script>
import { RegisterUser } from '../services/Auth'

export default {
  name: 'LoginForm',
  data: () => ({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }),
  computed: {
    submitReady: function () {
      return this.email.length > 0 && this.username.length > 0 && this.password.length > 0 && this.password === this.confirmPassword
    }
  },
  methods: {
    async signup() {
      const payload = await RegisterUser({ email: this.email, password: this.password, username: this.username })
      console.log(payload)
      this.email = ''
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
    }
  }
}
</script>