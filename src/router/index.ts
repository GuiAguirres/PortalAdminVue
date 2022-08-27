import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainStructure from '../views/MainStructure/MainStructure.vue'
import Login from '../views/Login/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'MainStructure',
    component: MainStructure,
    children: [
      {
        path: 'students',
        name: 'Students',
        component: () => import('../views/Students/Students.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../views/About.vue'),
        children: [
          {
            path: "config",
            name: "Users Config",
            component: () => import('../views/Config/Config.vue')
          }
        ]
      },
      {
        path: 'classes',
        name: 'Classes',
        component: () => import('../views/About.vue')
      },
      {
        path: 'config',
        name: 'Config',
        component: () => import('../views/Config/Config.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name != "Login") {
    if (localStorage.getItem('login') != "guilherme") {
      next({ name: 'Login' })
    } else next()
  } else next()
})

export default router
