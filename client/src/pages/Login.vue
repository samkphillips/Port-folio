<template>
  <div>
    <h2>Login</h2>
    <p>Login and Sign Up here.</p>
    <div>
      <LoginForm />
    </div>
    <div>
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>