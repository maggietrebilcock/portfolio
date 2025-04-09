<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app" class = "flex-container">
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/projects">projects</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>

nav {
  display: flex;
  justify-content: left;
  gap: 2rem;
  margin: 2rem 0;

  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;


  position: fixed;
      top: 0;
      
      margin: 3rem;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

 @media (min-width: 1024px) { 


  nav {
    position: fixed;
    right:0;
  }
 }
</style>