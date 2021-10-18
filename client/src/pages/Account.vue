<template>
  <div class="account-body">
    <h2>Account</h2>
    <div v-if="userData">
      <p>Hello, {{ userData.username }}</p>

      <h3>Portfolio Settings</h3>
      <div v-if="userData.Portfolio">
        <p>Your account has a portfolio.</p>
        <p>Add new images with the following form.</p>
        <AddImageForm :portfolioId="userData.Portfolio.id" />
      </div>
      <div v-else>
        <p>Your account does not yet have an associated portfolio.</p>
        <p>Simply click below to create one.</p>
        <button @click="createPortfolio">Create Portfolio</button>
      </div>

      <!-- <h3>Account Settings</h3>
      <p>Password Change Form</p>
      <p>Light/Dark Mode Toggle</p> -->
    </div>

    <div v-else>
      <h5>Gathering your account data, this may take a moment.</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { BASE_URL } from '../globals'
import { CreatePortfolio } from '../services/PortfolioServices'
import AddImageForm from '../components/AddImageForm.vue'

export default {
  name: 'Account',
  data: () => ({
    userData: null
  }),
  components: {
    AddImageForm
  },
  computed: {
    user: function () {return this.$root.$data.store.user}
  },
  mounted() {
    this.fetchUserData()
  },
  methods: {
    async fetchUserData() {
      const res = await axios.get(`${BASE_URL}/user/byId/${this.user.id}`)
      this.userData = res.data
    },
    async createPortfolio() {
      const res = await CreatePortfolio({ "user_id": this.userData.id })
      this.userData.Portfolio = res
    }
  }
}
</script>

<style scoped>
.account-body {
  width: calc(100vw - 15px);
  padding: 0 70px;
}
</style>