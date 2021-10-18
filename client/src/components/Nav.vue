<template>
  <nav>
    <div>
      <h2>Port-Folio</h2>
    </div>
    <div>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/explore">Explore</router-link>
      <router-link class="link" to="/about">About</router-link>
    </div>
    <div>
      <div v-if="authenticated && user" class="flex-row">
        <router-link class="link" to="/account">My Account</router-link>
        <button @click="logOut">Log Out</button>
      </div>
      <div v-else>
        <router-link class="link" to="/login">Login/Signup</router-link>
      </div>
    </div>
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
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
* {
  color: #F0F1F9;
}

nav {
  background-color: #07189D;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

h2,
.link {
  margin: 0 10px;
}

h5 {
  margin: 0 20px;
}

button {
  background-color: #F0F1F9;
  color: #7582E6;
  border: none;
  border-radius: 20px;
  padding: 5px;
  margin: 0 10px;
}

button:hover {
  cursor: pointer;
  background-color: #7582E6;
  color: #F0F1F9;
}
</style>
