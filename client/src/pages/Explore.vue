<template>
  <div>
    <h2>Explore</h2>
    <p>There'll be portfolios here.</p>
    <div>
      <h3 v-for="port in featuredPortfolios" :key="`portfolio-${port.id}`">Portfolio here!</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { BASE_URL } from '../globals'

export default {
  name: 'Explore',
  data: () => ({
    featuredPortfolios: null
  }),
  mounted() {
    this.getFeaturedPortfolios()
  },
  methods: {
    async getFeaturedPortfolios() {
      //post-project, add a route for getting special featured portfolios
      //for now, just gets all of them
      const res = await axios.get(`${BASE_URL}/portfolio/all`)
      this.featuredPortfolios = res.data
    }
  }
}
</script>