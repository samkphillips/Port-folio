<template>
<div>
    <form @submit.prevent="submitImage">
      <input v-model="title" placeholder="Image Title (optional)" />
      <input v-model="description" placeholder="Description (optional)" />
      <input v-model="image" placeholder="Image URL (required)" type="url" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { CreateImage } from '../services/PortfolioServices'

export default {
  name: 'AddImageForm',
  data: () => ({
    title: '',
    description: '',
    image: ''
  }),
  props: {
    portfolioId: Number
  },
  methods: {
    async submitImage() {
      const payload = await CreateImage({
        title: this.title,
        description: this.description,
        image: this.image,
        portfolioId: this.portfolioId
      })
      this.title = ''
      this.description = ''
      this.image = ''
      console.log(`Image ${payload.id} Uploaded`)
    }
  }
}
</script>