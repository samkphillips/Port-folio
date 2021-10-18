<template>
  <div>
    <h2>Portfolio</h2>
    <p>Portfolio detail view! See some art.</p>
    <p>This portfolio ID is {{ this.$route.params.portfolio_id }}</p>
    <div v-if="portfolioDetails">
      <img
        v-for="image in portfolioDetails.Images"
        :key="`image-${image.id}`"
        :src="image.image"
      />
    </div>
    <div v-else>
      <h5>Loading...</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { BASE_URL } from '../globals'

export default {
  name: 'Portfolio',
  data: () => ({
    portfolioDetails: null
  }),
  mounted() {
    this.getPortfolioDetails()
  },
  methods: {
    async getPortfolioDetails() {
      const res = await axios.get(`${BASE_URL}/portfolio/byId/${this.$route.params.portfolio_id}`)
      this.portfolioDetails = res.data
    }
  }
}
</script>