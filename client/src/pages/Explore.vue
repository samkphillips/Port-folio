<template>
  <div>
    <h2>Explore</h2>
    <h3>Featured Portfolios</h3>
    <div v-if="featuredPortfolios" class="scroll-list">
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

<style scoped>
.scroll-list {
  width: 90%;
  margin: 0 20px;
  padding: 0 5px;
  border: solid #07189D 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
</style>