<template>
<div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <input v-model="password" placeholder="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    username: '',
    password: ''
  })
}
</script>