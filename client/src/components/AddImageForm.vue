<template>
<div>
    <form @submit.prevent="login">
      <input v-model="title" placeholder="Image Title (optional)" />
      <input v-model="description" placeholder="Description (optional)" />
      <input v-model="image" placeholder="Image URL (required)" type="url" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
// import { SignInUser } from '../services/Auth'

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
      const payload = await SignInUser({ email: this.email, password: this.password })
      this.title = ''
      this.description = ''
      this.image = ''
      console.log("Image Uploaded.")
    }
  }
}
</script>