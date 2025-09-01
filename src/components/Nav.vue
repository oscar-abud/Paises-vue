<template>
  <nav>
    <ul>
      <a href="/" target="_blank">Home</a>
      <a href="/">Api</a>
      <a href="/">Footer</a>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 250px;
}
nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 1.3rem;
  font-weight: 800;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: var(--dark-color);
  transition: ease-in-out 0.2s;
  &:hover {
    color: var(--yellow-color);
  }
}
</style>
