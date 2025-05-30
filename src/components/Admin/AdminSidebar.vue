<script setup>
import { useRouter } from 'vue-router'
import { useAdminAuthStore } from '@/stores/adminAuth'

defineProps({
  sidebarOpen: Boolean,
})

defineEmits(['toggle-sidebarclose'])

const router = useRouter()
const authStore = useAdminAuthStore()

function logout() {
  authStore.logout() // Nettoie le token côté Pinia
  router.push('/admin/login')
}
</script>

<template>
  <aside
    :class="[
      'fixed z-40 inset-y-0 left-0 w-[20em] bg-gray-800 text-white flex flex-col transform transition-transform duration-300 ease-in-out',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'lg:translate-x-0 lg:static lg:flex',
    ]"
  >
    <!-- Header -->
    <div class="h-16 flex items-center justify-between px-4 border-b border-gray-700">
      <span class="text-xl font-bold">Mackcheck Admin</span>
      <button @click="$emit('toggle-sidebarclose')" class="lg:hidden text-white text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
          <path
            fill="#991818"
            d="m3.5 2.086l4.5 4.5l4.5-4.5L13.914 3.5L9.414 8l4.5 4.5l-1.414 1.414l-4.5-4.5l-4.5 4.5L2.086 12.5l4.5-4.5l-4.5-4.5z"
          />
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4 space-y-2">
      <router-link
        to="/admin/dashboard"
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition"
        active-class="bg-gray-700 text-white font-semibold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08"
          />
        </svg>
        <span>Admin Dashborad</span>
      </router-link>

      <!-- Nouvelles demandes -->
      <router-link
        to="/admin/demandes"
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition"
        active-class="bg-gray-700 text-white font-semibold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 8v8"
            />
            <path d="M11 6h5a2 2 0 0 1 2 2v8" />
            <path d="m14 9l-3-3l3-3" />
          </g>
        </svg>
        <span>Nouvelles demandes</span>
      </router-link>

      <!-- Liste des vendeurs -->
      <router-link
        to="/admin/vendeurs"
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition"
        active-class="bg-gray-700 text-white font-semibold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5.08 15.296c-1.218.738-4.412 2.243-2.466 4.126c.95.92 2.009 1.578 3.34 1.578h7.593c1.33 0 2.389-.658 3.34-1.578c1.945-1.883-1.25-3.389-2.468-4.126a9.06 9.06 0 0 0-9.338 0M13.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M17 5h5m-5 3h5m-2 3h2"
            color="currentColor"
          />
        </svg>
        <span>Liste des vendeurs</span>
      </router-link>
    </nav>

    <!-- Déconnexion -->
    <div class="py-3 flex justify-center border-t border-gray-700">
      <button
        @click="logout"
        class="w-full flex items-center justify-center space-x-2 text-red-500 hover:text-red-300"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 16v1a3 3 0 003 3h4a3 3 0 003-3v-1"
          />
        </svg>
        <span>Déconnexion</span>
      </button>
    </div>
  </aside>

  <!-- Overlay -->
  <div
    v-if="sidebarOpen"
    class="fixed inset-0 z-30 backdrop-blur-sm  bg-opacity-40 lg:hidden"
    @click="$emit('toggle-sidebarclose')"
  ></div>
</template>
