<template>
  <div>
    <h2>Account</h2>
    <div v-if="userData">
      <p>Hello, {{ userData.username }}</p>

      <h3>Portfolio Settings</h3>
      <div v-if="userData.Portfolio">
        <p>Looks like you have a portfolio, neato.</p>
      </div>
      <div v-else>
        <p>Your account does not yet have an associated portfolio.</p>
        <p>Simply click below to create one.</p>
        <button @click="createPortfolio">Create Portfolio</button>
      </div>

      <h3>Account Settings</h3>
      <p>Password Change Form</p>
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

export default {
  name: 'Account',
  data: () => ({
    userData: null
  }),
  computed: {
    user: function () {return this.$root.$data.store.user}
  },
  mounted() {
    this.fetchUserData()
  },
  methods: {
    async fetchUserData() {
      const res = await axios.get(`${BASE_URL}/user/byId/${this.user.id}`)
      console.log(res)
      this.userData = res.data
    },
    async createPortfolio() {
      const res = await CreatePortfolio({ "user_id": this.userData.id })
      this.userData.Portfolio = res
    }
  }
}
</script>