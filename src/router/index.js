import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/login',
    name: 'login',
    meta: { showNavbar: true },
    component: () => import('../views/Authentication/Login.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    meta: { showNavbar: true },
    component: () => import('../views/Authentication/Forget.vue')
  },
  {
    path: '/resetpassword/:id',
    name: 'reset',
    component: () => import('../views/Authentication/Resetpassword.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { showNavbar: true },
    component: () => import('../views/Authentication/Register.vue')
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import('../views/Roles/Roles.vue'),
    
  },
  {
    path: '/roles/create',
    name: 'addroles',
    component: () => import('../views/Roles/Addroles.vue'),
    
  },
  {
    path: '/roles/:id',
    name: 'rolesedit',
    component: () => import('../views/Roles/Rolesedit.vue'),
    props: true
    
  },
  {
    path: '/user/edit/:id',
    name: 'useredit',
    component: () => import('../views/User/Useredit.vue'),
    props: true
    
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User/User.vue'),

  },
  {
    path: '/user/create',
    name: 'usercreate',
    component: () => import('../views/User/Adduser.vue'),

  },
  {
    path: '/user/show/:id',
    name: 'userprofile',
    component: () => import('../views/User/Userprofile.vue'),

  },
  {
    path: '/user/loginsessions/:id',
    name: 'loginsession',
    component: () => import('../views/User/Loginsession.vue'),

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
