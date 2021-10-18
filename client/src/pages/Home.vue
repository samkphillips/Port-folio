<template>
  <div class="home-body">
    <h2>Welcome to Port-Folio</h2>
    <p>Port-Folio is the world's least popular online portfolio service. It is free, though, so that's cool.</p>
    <p>Sign up for free today and get your art online for the world to see.</p>
    <img src="https://source.unsplash.com/random/?art" class="fit" />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-body {
  width: calc(100vw - 15px);
  padding: 0 0 70px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fit {
  max-width: 90%;
}
</style>