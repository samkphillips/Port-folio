<template>
  <div>
    <h2>Account</h2>
    <div v-if="userData">
      <p>Settings and etc.</p>
      <p>Hello, {{ userData.username }}</p>
    </div>
    <div v-else>
      <h5>Gathering your account data, this may take a moment.</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { BASE_URL } from '../globals'

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
    }
  }
}
</script>