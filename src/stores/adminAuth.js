import { defineStore } from 'pinia'

export const useAdminAuthStore = defineStore('adminAuth', {
  state: () => ({
    token: localStorage.getItem('admin_token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    login(token) {
      this.token = token
      localStorage.setItem('admin_token', token)
    },
    logout() {
      this.token = null
      localStorage.removeItem('admin_token')
    }
  },
})
