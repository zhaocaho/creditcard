import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/Home/component/Login.vue'
import Creditcard from '../views/Creditcard.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/home/register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/creditcard',
    name: 'Creditcard',
    component: Creditcard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
