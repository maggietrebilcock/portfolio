<!-- filepath: c:\Users\mtreb\OneDrive\Desktop\mysite\portfolio\src\views\AboutPage.vue -->
<template>
    <div class ="sections first">
      <div class ="image_div">
        <img src="@/assets/placeholder.jpg" alt="super swag picture of me, maggie trebilcock" />
      </div>
      <div class ="text_div">
        <h1>hi, nice to meet you!</h1>
        <p>I am currently studying computer science at Rensselaer Polytechnic Institute seeking
          an internship or co-op position for the spring and summer of 2026. I am intereted in a 
          variety of fields including (but not limited to) software engineering, web development, 
          and design. Scroll down to learn more about both my professional and personal life, or 
          to get in touch.
        </p>
      </div>  
    </div>

    <div class ="sections second">
      <div class ="text_div">
        <h1>education</h1>
        
        <div class = "schools">

          <div class = "school">
            <h1 @click="toggleSection('rpi')">Rensselaer Polytechnic Institute</h1>
            <p v-if="isSectionVisible('rpi')">RPI is a great place to study engineering and technology.</p>
          </div>

          <div class = "school">
            <h1 @click="toggleSection('srjc')">San Jose City College</h1>
            <p v-if="isSectionVisible('srjc')">SJCC offers a variety of programs and is a great place to start your education.</p>
          </div>

          <div class = "school">
            <h1 @click="toggleSection('hhs')">High School</h1>
            <p v-if="isSectionVisible('hhs')">My high school experience was enriching and laid the foundation for my future studies.</p>
          </div>

        </div>


      </div> 
      <div class ="image_div">
        <img src="@/assets/placeholder.jpg" alt="picture of RPI" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    name: 'AboutPage',
    setup() {
    // Reactive state to track visibility of sections
    const visibleSections = ref({
      rpi: false, // Initially hidden
      srjc: false, // Initially hidden
      hhs: false, // Initially hidden
    })

    // Function to toggle visibility
    const toggleSection = (section) => {
      visibleSections.value[section] = !visibleSections.value[section]
    }

    return {
      visibleSections,
      toggleSection,
    }
  },
  }
  </script>

<style scoped>
  h1, p {
    color: black;
  }

  html, body {
    overflow: auto;
    height: 100%;
    position: relative;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 2rem;
  }

  .sections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }


</style>