<template>
  <div class="about-body">
    <h2>About Me!</h2>
    <p>My name is Sam Phillips and I am the sole developer of Port-Folio.</p>
    <p>Please feel free to pay me a visit at the below links.</p>
    <a href="https://www.linkedin.com/in/sam-k-phillips/">LinkedIn</a>
    <a href="https://github.com/samkphillips">GitHub</a>
    <p>And if you like the look of this site or any others, I am open to work right now 👀</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-body {
  width: calc(100vw - 15px);
  padding: 0 0 70px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  color: #07189D;
}
</style>