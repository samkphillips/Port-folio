<template>
<div @click="selectPortfolio">
  <img src="https://source.unsplash.com/random/?art" class="fit" />
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
  background-color: #7582E6;
  color: #F0F1F9;
  height: 180px;
  width: 180px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

div:hover {
  cursor: pointer;
}

.fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>