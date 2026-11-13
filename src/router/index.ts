import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition; // browser Back/Forward: return to where you were
    if (to.hash) return { el: to.hash, behavior: 'smooth' }; // links to a spot on a page
    return { top: 0 }; // every new page starts at the top
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/meet-jared',
      name: 'meet',
      component: () => import('../views/MeetJared.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/JaredBooks.vue'),
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: () => import('../views/NewsletterSignup.vue'),
    },
    {
      path: '/schoolvisits',
      name: 'schoolvisits',
      component: () => import('../views/EducatorGuide.vue'),
    },
    {
      path: '/extras',
      name: 'extras',
      component: () => import('../views/AboutExtras.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue'),
    },
    {
      path: '/parents',
      redirect: '/schoolvisits',
    },
  ],
});

export default router;
