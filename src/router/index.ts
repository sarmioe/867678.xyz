import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Github from '../views/github.vue'
import tkkhs from '../views/tkkhs.vue'
import spt from '../views/spt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tkkhs',
      name: 'tkkhs',
      component: tkkhs,
    },
    {
      path: '/spt',
      name: 'spt',
      component: spt,
    },
    {
      path: '/github',
      name: 'Github',
      component: Github,
    },
  ],
})

export default router
