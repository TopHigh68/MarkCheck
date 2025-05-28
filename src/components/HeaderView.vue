<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Nom de la plateforme -->
        <div class="text-2xl font-bold text-gray-800">MarkCheck</div>

        <!-- Menu desktop -->
        <nav class="hidden md:flex space-x-6">
          <RouterLink to="/" class="block text-gray-700 hover:text-blue-600 transition"
            >Accueil</RouterLink
          >
          <RouterLink to="/adhesion" class="block text-gray-700 hover:text-blue-600 transition"
            >Adhésion</RouterLink
          >
          <RouterLink to="/contact" class="block text-gray-700 hover:text-blue-600 transition"
            >Contact</RouterLink
          >
        </nav>

        <!-- Bouton menu mobile -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <RouterLink to="/" class="block text-gray-700 hover:text-blue-600 transition"
        >Accueil</RouterLink
      >
      <RouterLink to="/adhesion" class="block text-gray-700 hover:text-blue-600 transition"
        >Adhésion</RouterLink
      >
      <RouterLink to="/contact" class="block text-gray-700 hover:text-blue-600 transition"
        >Contact</RouterLink
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
