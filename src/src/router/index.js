import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const ToursView = () => import('@/views/ToursView.vue')
const TourDetailsView = () => import('@/views/TourDetailsView.vue')
const FavoritesView = () => import('@/views/FavoritesView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { titleKey: 'seo.home.title', descKey: 'seo.home.desc' } },
    { path: '/about', name: 'about', component: AboutView, meta: { titleKey: 'seo.about.title', descKey: 'seo.about.desc' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { titleKey: 'seo.contact.title', descKey: 'seo.contact.desc' } },
    { path: '/tours', name: 'tours', component: ToursView, meta: { titleKey: 'seo.tours.title', descKey: 'seo.tours.desc' } },
    {
      path: '/tours/:id',
      name: 'tour-details',
      component: TourDetailsView,
      meta: { titleKey: 'seo.tour.title', descKey: 'seo.tour.desc' }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
      meta: { titleKey: 'seo.favorites.title', descKey: 'seo.favorites.desc' }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

// Basic SEO: dynamic title/description based on i18n keys
router.afterEach((to) => {
  const t = i18n.global.t
  const brand = t('brand')
  const title = to.meta?.titleKey ? t(to.meta.titleKey) : brand
  const desc = to.meta?.descKey ? t(to.meta.descKey) : ''

  document.title = `${title} | ${brand}`

  if (desc) {
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', desc)
  }
})

export default router
