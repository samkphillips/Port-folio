<template>
  <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/explore">Explore</router-link>
    <router-link class="link" to="/portfolio/1">Portfolio[Temp Link to port 1]</router-link>
    <router-link class="link" to="/login">Login/Signup</router-link>
    <router-link class="link" to="/account">Account</router-link>
    <div v-if="authenticated && user">
      <h5>Hello, {{ user.email }}!</h5>
      <button @click="logOut">Log Out</button>
    </div>
    <h5 v-else>User not signed in.</h5>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    user: function () {return this.$root.$data.store.user},
    authenticated: function () {return this.$root.$data.store.authenticated}
  },
  methods: {
    logOut() {
      this.$root.$data.store.handleLogOut()
    }
  }
}
</script>

<style scoped>
nav {
  background-color: antiquewhite;
}

.link {
  margin: 0 10px;
}
</style>
