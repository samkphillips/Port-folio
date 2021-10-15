<template>
  <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/explore">Explore</router-link>
    <router-link class="link" to="/portfolio">Portfolio[Temp Link]</router-link>
    <router-link class="link" to="/login">Login/Signup</router-link>
    <router-link class="link" to="/account">Account</router-link>
    <h3 v-if="this.$root.$data.store.authenticated">Hello, {{ this.$root.$data.store.user.email }}!</h3>
    <h3 v-else>User not signed in.</h3>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.link {
  margin: 0 10px;
}
</style>
