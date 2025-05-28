import { createRouter, createWebHistory } from 'vue-router'
import { useAdminAuthStore } from '../stores/adminAuth.js'

import HomeView from '../views/HomeView.vue'
import AdhesionForm from '../views/AdhesionForm.vue'
import ContactView from '../views/ContactView.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import Layout from '../components/layout/layout.vue'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', name: 'Accueil', component: HomeView },
        { path: 'adhesion', name: 'Adhesion', component: AdhesionForm },
        { path: 'contact', name: 'contact', component: ContactView },
      ],
    },

    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: AdminLogin,
          meta: { requiresGuest: true },
        },
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: AdminDashboard,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
})

// 🔐 Navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAdminAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/admin/login')
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/admin/dashboard')
  } else {
    next()
  }

   if (to.path.startsWith('/admin') && to.name !== 'login') {
    if (!authStore.isAuthenticated) {
      return next('/admin/login')
    }
  }
})

export default router
