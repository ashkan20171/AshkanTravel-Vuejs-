import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const ToursView = () => import('@/views/ToursView.vue')
const TourDetailsView = () => import('@/views/TourDetailsView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/tours', name: 'tours', component: ToursView },
    { path: '/tours/:id', name: 'tour-details', component: TourDetailsView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
