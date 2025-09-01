<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Paises from '../components/Paises.vue'
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <Paises />
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
  color: var(--white-color);
  padding: 20px 0;
}
</style>
