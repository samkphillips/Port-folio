<template>
  <div>
    <div v-if="!authenticated" class="container">
      <div class="login">
        <LoginForm />
      </div>
      <div class="signup">
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

<style scoped>
.container {
  width: calc(100vw - 15px);
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.login,
.signup {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login {
  background-color: #7582E6;
}

.signup {
  background-color: #1A2123;
  color: white;
}
</style>