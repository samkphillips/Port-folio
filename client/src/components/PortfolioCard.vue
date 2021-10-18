<template>
<div @click="selectPortfolio">
  <h3>Portfolio! ID is {{ portfolio.id }}</h3>
</div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    portfolio: Object
  },
  mounted() {
    console.log(this.portfolio)
  },
  methods: {
    selectPortfolio() {
      this.$router.push(`/portfolio/${this.portfolio.id}`)
    }
  }
}
</script>

<style scoped>
div {
  background-color: cornflowerblue;
  height: 150px;
  width: 150px;
  padding: 10px;
  margin: 5px;
}
</style>