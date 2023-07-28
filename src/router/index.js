import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { showNavbar: true },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    meta: { showNavbar: true },
    component: () => import('../views/Forget.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { showNavbar: true },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import('../views/Roles.vue'),
    
  },
  {
    path: '/roles/create',
    name: 'addroles',
    component: () => import('../views/Addroles.vue'),
    
  },
  {
    path: '/roles/:id',
    name: 'rolesedit',
    component: () => import('../views/Rolesedit.vue'),
    props: true
    
  },
  {
    path: '/user/edit/:id',
    name: 'useredit',
    component: () => import('../views/Useredit.vue'),
    props: true
    
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),

  },
  {
    path: '/user/create',
    name: 'usercreate',
    component: () => import('../views/Adduser.vue'),

  },
  {
    path: '/user/show/:id',
    name: 'userprofile',
    component: () => import('../views/Userprofile.vue'),

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
