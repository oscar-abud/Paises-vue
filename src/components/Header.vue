<script setup>
import Nav from '../components/Nav.vue'
</script>

<template>
  <header>
    <h1>LOGO</h1>
    <Nav />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: var(--white-color);
  color: var(--dark-color);
  padding: 0 10%;
}
</style>
