<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminAuthStore } from '@/stores/adminAuth.js'

import AdminHeader from '../AdminHeader.vue'
import AdminFooter from '../AdminFooter.vue'
import AdminSidebar from '../AdminSidebar.vue'

const router = useRouter()
const authStore = useAdminAuthStore()
const isSidebarOpen = ref(false)

const isAuthenticated = computed(() => authStore.isAuthenticated)

function logout() {
  authStore.logout()
  router.push('/admin/login')
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AdminSidebar
      v-if="isAuthenticated"
      :sidebarOpen="isSidebarOpen"
      @toggle-sidebarclose="isSidebarOpen = false"
    />

    <div class="flex-1 flex flex-col">
      <!-- ✅ Header toujours visible -->
      <AdminHeader
        v-if="isAuthenticated"
        @toggle-sidebar="isSidebarOpen = true"
      />

      <main class="h-full overflow-auto bg-[#ddddddc4]">
        <router-view />
      </main>

      <AdminFooter v-if="isAuthenticated" />
    </div>
  </div>
</template>
