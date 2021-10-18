<template>
  <div class="portfolio-body">
    <h2>Title</h2>
    <p>Description goes here and here and here</p>
    <div v-if="portfolioDetails" class="image-container">
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
      console.log(res.data)
      this.portfolioDetails = res.data
    }
  }
}
</script>

<style scoped>
.portfolio-body {
  width: calc(100vw - 15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 100%;
  padding: 0 0 70px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

img {
  width: 300px;
  margin: 3px;
}
</style>