<template>
  <div>
    <h2>Explore</h2>
    <p>There'll be portfolios here.</p>
    <div v-if="featuredPortfolios">
      <PortfolioCard
        v-for="port in featuredPortfolios"
        :key="`portfolio-${port.id}`"
        :portfolio="port"
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
import PortfolioCard from '../components/PortfolioCard.vue'

export default {
  name: 'Explore',
  components: {
    PortfolioCard
  },
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