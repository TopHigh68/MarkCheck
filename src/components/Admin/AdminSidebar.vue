<script setup>
import { useRouter } from 'vue-router'
defineProps({
  sidebarOpen: Boolean,
})

defineEmits(['toggle-sidebarclose'])

const router = useRouter()

function logout() {
  localStorage.removeItem('admin_token') // ou sessionStorage, ou clear(), selon ton cas
  // tu peux aussi vider un store si tu utilises pinia/vuex
  router.push('login')
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
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        active-class="nav-link-active"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span>Dashboard</span>
      </router-link>

      <router-link
        to="/admin/dashboard"
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        active-class="nav-link-active"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span>Nouvelles demandes</span>
      </router-link>

      <router-link
        to="/admin/dashboard"
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        active-class="nav-link-active"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span>Liste des vendeurs</span>
      </router-link>
      <router-link
        to="/admin/dashboard"
        class="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        active-class="nav-link-active"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span> Gestion des statuts</span>
      </router-link>



    </nav>

    
    <div class="py-3 flex justify-center border-t border-gray-200 dark:border-gray-700">
      <button
        @click="logout"
        class="w-full flex items-center justify-center cursor-pointer space-x-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span>Log out</span>
      </button>
    </div>

  </aside>

  <!-- Overlay (mobile only) -->
  <div
    v-if="sidebarOpen"
    class="fixed inset-0 z-30 blur bg-[#0000003f] bg-opacity-50 lg:hidden"
    @click="$emit('toggle-sidebarclose')"
  ></div>
</template>
