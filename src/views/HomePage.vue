<!-- filepath: c:\Users\mtreb\OneDrive\Desktop\mysite\portfolio\src\views\HomePage.vue -->
<template>
    <div class = "words_div">
      <h1>maggie trebilcock</h1>
      <p>software engineer, web developer, designer</p>
    </div>
</template>
  
  <script>
  export default {
    name: 'HomePage',
  }
  </script>

<style scoped>
  html, body {
  overflow: hidden; /* Disable scrolling */
  height: 100%; /* Ensure height matches viewport */
  position: fixed; /* Fix the position to prevent scrolling */
}
    .words_div {
      text-align: right;
      position: fixed;
      bottom: 0;
      right: 0;
      margin: 3rem;
    }

    p, h1 {
      font-family: "Karla", sans-serif;
      font-optical-sizing: auto;
      
      font-style: normal;
    }

    h1 {
      /* font-weight: 300; */
      font-size: 5rem;
      position: relative;
      top: -10px;
      margin-bottom: -1rem;
    }

    p {
      font-size: 1.5rem;
    }


    @media (max-width: 1024px) {
      html, body {
        overflow: hidden; /* Disable scrolling */
        height: 100%; /* Ensure height matches viewport */
        position: fixed; /* Fix the position to prevent scrolling */
      }
      .words_div {
        text-align: center;
        margin: 2rem 0;
      }

      h1 {
        padding: 0;
        line-height: 1;
        margin-bottom: 0;
      }
    }
</style>