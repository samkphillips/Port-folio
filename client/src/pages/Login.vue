<template>
  <div>
    <h2>Login</h2>
    <p>Login and Sign Up here.</p>
    <div v-if="!authenticated">
      <div>
        <LoginForm />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
    <div v-else>
      <h5>You are already logged in.</h5>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: 'Login',
  computed: {
    authenticated: function () {return this.$root.$data.store.authenticated}
  },
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>