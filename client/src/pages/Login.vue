<template>
  <div>
    <h2>Login</h2>
    <p>Login and Sign Up here.</p>
    <div>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>