<script setup>
import { useRouter } from 'vue-router'
import { useAdminAuthStore } from '@/stores/adminAuth'
const router = useRouter()
const authStore = useAdminAuthStore()

function logout() {
  authStore.logout() // Nettoie le token côté Pinia
  router.push('/admin/login')
}
</script>

<template>
  <header class="h-16 bg-white  shadow flex items-center lg:justify-end justify-between px-4">

    <button @click="$emit('toggle-sidebar')" class="text-gray-800 lg:hidden text-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>

      <button 
      class="text-gray-600 flex gap-1.5 cursor-pointer hover:text-gray-800"
        @click="logout"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        Déconnexion
      </button>

  </header>
</template>
