import { createRouter, createWebHistory } from 'vue-router'
import ListPage from './components/pages/ListPage.vue'
import CartPage from './components/pages/CartPage.vue'
import AdPage from './components/pages/AdPage.vue'
import GitHubPage from './components/pages/GitHubPage.vue'
import PhotoPage from './components/pages/PhotoPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ListPage
    },
    {
      path: '/cart',
      component: CartPage
    },
    {
      path: '/ad',
      component: AdPage
    },
    {
      path: '/github',
      component: GitHubPage
    },
    {
      path: '/photo',
      component: PhotoPage
    },
  ]
})