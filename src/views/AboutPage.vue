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
            <h2 @click="toggleSection('rpi')">Rensselaer Polytechnic Institute (RPI)</h2>
            <p v-if="visibleSection ==='rpi'">Here, I am dual majoring in computer 
              science (with a focus in machine learning and AI) and philosophy. I am a part
              of Rensselaer Center for Open Source (RCOS), a great program my school offers 
              that allows students to create and explore projects of their choice. Alongside
              other RPI students, I am working on a university-wide course scheduler called 
              YACS. For more information about YACS, head to my Projects page. I also run my
              own radio show on WRPI 91.5 FM (RPI's college radio) and play ultimate frisbee
              on RPI's club team.</p>
          </div>

          <div class = "school">
            <h2 @click="toggleSection('srjc')">Santa Rosa Junior College</h2>
            <p v-if="visibleSection === 'srjc'">While in high school, I took numerous
              junior college courses to get a head start on my education at the Santa
              Rosa Junior College. I earned certificates in Full Stack Web Development,
              Web & Multimedia Studies, and Front-End Web Development, along with taking
              classes in subjects such as Spanish, American Sign Language, fashion, and 
              more.
            </p>
          </div>

          <div class = "school">
            <h2 @click="toggleSection('hhs')">Healdsburg High School</h2>
            <p v-if="visibleSection === 'hhs'">While in high school, I started taking
              computer science classes where I learned I enjoyed the subject. I participated
              in web development competitions through SkillsUSA, helped write a bill for the 
              California Senate through Ed100, earned the Rensselaer Medal of Honor (an award 
              given to high school students who excel in math and science), and was a part of/ 
              lead several clubs, including Model UN, FFA, Key Club, cross country, and track 
              & field.
            </p>
          </div>

        </div>


      </div> 
      <div class ="image_div">
        <img src="@/assets/placeholder.jpg" alt="picture of RPI" />
      </div>
    </div>


    <div class ="sections third">
      <div class ="image_div">
        <img src="@/assets/kayak_river.jpg" alt="picture of River's Edge Kayak & Canoe in Healdsburg" />
      </div>
      <div class ="text_div">
        <h1>work experience</h1>
        
        <div class = "jobs">

          <div class = "job">
            <h2 @click="toggleSection2('re')">River's Edge Kayak & Canoe</h2>
            <p v-if="visibleSection ==='re'">Here, I worked as the Office Manager, where
              I helped manage the company's online presence, including the website and 
              social media. I also helped coordinate day-to-day operations, including but not 
              limited to: customer service, scheduling, teaching customers to kayak, and leading
              kayak tours.
            </p>
          </div>

          <div class = "school">
            <h2 @click="toggleSection2('bakery')">Downtown Bakery & Creamery</h2>
            <p v-if="visibleSection === 'bakery'">At the Downtown Bakery & Creamery, 
              I was a front-end worker, where I made drinks, packed pastries, worked 
              on the breakfast line, and more.</p>
          </div>

          <div class = "school">
            <h2 @click="toggleSection2('e&m')">E&M Electric</h2>
            <p v-if="visibleSection === 'e&m'">I worked in the accounting division of
              this company learning about the accounting process and how to use manage
              a large database using SQL and other languagues and techniques.
            </p>
          </div>
        </div>
      </div> 
      
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    name: 'AboutPage',
    setup() {
    const visibleSection = ref(null)
    const visibleSection2 = ref(null)

    const toggleSection = (section) => {
      if (visibleSection.value === section) {
        visibleSection.value = null
      } else {
        visibleSection.value = section
      }
    }

    const toggleSection2 = (section) => {
      if (visibleSection.value === section) {
        visibleSection.value = null
      } else {
        visibleSection.value = section
      }
    }

    return {
      visibleSection,
      visibleSection2,
      toggleSection,
      toggleSection2
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
  }

  .sections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem;
    width: 100%;
  }

  .school, .job, .text_div {
    width: 35rem;
  }

  /* Specifically, the titles for foldable sections */
  h2 {
    font-weight: 100;
  }

  .first, .third {
    text-align: right;
  }

  @media (max-width: 1024px) {
      html, body {
        overflow: auto;
        width: 100%;
      }
      .sections {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .school, .job, .text_div {
        width: auto;
        text-align: center;
      }
      .first, .third {
        text-align: left;
      }
      .second {
        flex-direction: column-reverse;
      }
    }
</style>