import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

// GOOD
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')

  if (to.name === 'about' && !isAuthenticated) {
    next({ name: 'login' })
  } else next()
})

export default router
