import { createRouter, createWebHistory } from 'vue-router'
import { useAdminAuthStore } from '../stores/adminAuth.js'

import HomeView from '../views/HomeView.vue'
import AdhesionForm from '../views/AdhesionForm.vue'
import ContactView from '../views/ContactView.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import NewRequest from '../views/Admin/NewRequest.vue'
import ListVendor from '../views/Admin/ListVendor.vue'
import Layout from '../components/layout/layout.vue'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout.vue'
import PageNotFound from '../views/PageNotFound.vue' // Importez votre composant 404

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
      redirect: (to) => {
        const authStore = useAdminAuthStore()
        return authStore.isAuthenticated ? '/admin/dashboard' : '/admin/login'
      },
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
        {
          path: 'demandes',
          name: 'newrequest',
          component: NewRequest,
          meta: { requiresAuth: true },
        },
        {
          path: 'vendeurs',
          name: 'vendor',
          component: ListVendor,
          meta: { requiresAuth: true },
        },
      ],
    },
    // Ajoutez cette route à la fin pour capturer toutes les routes non définies
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound
    }
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