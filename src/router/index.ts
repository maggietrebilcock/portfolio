import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/projects', name: 'Projects', component: ProjectsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Add navigation guard to toggle scrolling
router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    document.body.style.overflow = 'hidden' // Disable scrolling
    document.body.style.position = 'fixed'
    document.body.style.width = '100vw' // Set background width to full
  } else {
    document.body.style.overflow = 'auto' // Enable scrolling
    document.body.style.position = 'relative'
  }
  next()
})

export default router