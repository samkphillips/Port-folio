<template>
  <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/explore">Explore</router-link>
    <router-link class="link" to="/portfolio">Portfolio[Temp Link]</router-link>
    <router-link class="link" to="/login">Login/Signup</router-link>
    <router-link class="link" to="/account">Account</router-link>
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
