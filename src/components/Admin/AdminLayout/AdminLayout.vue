<script setup>
import { ref } from 'vue'
import AdminHeader from '../AdminHeader.vue'
import AdminFooter from '../AdminFooter.vue'
import AdminSidebar from '../AdminSidebar.vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AdminSidebar :sidebarOpen="isSidebarOpen" @toggle-sidebarclose="isSidebarOpen = false" />

    <div class="flex-1 flex flex-col">
      <AdminHeader @toggle-sidebar="isSidebarOpen = true" />

      <main class="flex-1 p-4 overflow-auto bg-[#ddddddc4]">
        <router-view /> <!-- C’est ici que chaque vue spécifique s’affiche -->
      </main>

      <AdminFooter />
    </div>
  </div>
</template>
