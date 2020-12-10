import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from '../App.vue'

import Login from '../components/Login'
import Signup from '../components/Signup'
import Profile from '../components/Profile'
import Forum from '../components/Forum'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
