<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <h1>Hola Mundo</h1>
      <p>Hola soy un parrafo</p>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}

main {
  background-color: var(--gray-color);
  color: var(--none-color);
}
</style>
