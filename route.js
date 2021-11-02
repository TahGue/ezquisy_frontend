import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question',
    name: 'Question',

    component: () => import('../container/Question')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../container/Login')
  },
  {
    path: '/signup',
    name: 'Signup',

    component: () => import('../container/Signup')
  },
  {
    path: '/contact',
    name: 'Contact',

    component: () => import('../container/Contact')
  },
  {
    path: '/aboutus',
    name: 'About us',

    component: () => import('../container/Aboutus.vue')
  },
  {
    path: '/profile',
    name: 'Profile',

    component: () => import('../container/Profile.vue')
  },
  {
    path: '/category',
    name: 'Category',

    component: () => import('../container/Category.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router