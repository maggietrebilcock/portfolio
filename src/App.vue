<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app" class = "flex-container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* @media (min-width: 1024px) { */


  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

</style>