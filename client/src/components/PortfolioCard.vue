<template>
<div>
  <h3>Portfolio! ID is {{ portfolio.id }}</h3>
</div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    portfolio: Object
  }
}
</script>