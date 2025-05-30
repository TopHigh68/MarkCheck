<script setup>
import { ref, computed, onMounted } from 'vue'

const vendeurs = ref([])

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('vendeurs') || '[]')
  vendeurs.value = data
})

const total = computed(() => vendeurs.value.length)
const enAttente = computed(() => vendeurs.value.filter(v => v.statut === 'En attente').length)
const acceptes = computed(() => vendeurs.value.filter(v => v.statut === 'Acceptée').length)
const refuses = computed(() => vendeurs.value.filter(v => v.statut === 'Refusée').length)

const recentes = computed(() =>
  [...vendeurs.value]
    .sort((a, b) => b.dateSoumission - a.dateSoumission)
    .slice(0, 5)
)
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Dashboard Administrateur</h1>

    <!-- Statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div class="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl text-center shadow">
        <h2 class="text-xl font-semibold text-blue-800 dark:text-blue-200">Total</h2>
        <p class="text-3xl font-bold">{{ total }}</p>
      </div>
      <div class="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-xl text-center shadow">
        <h2 class="text-xl font-semibold text-yellow-800 dark:text-yellow-200">En attente</h2>
        <p class="text-3xl font-bold">{{ enAttente }}</p>
      </div>
      <div class="bg-green-100 dark:bg-green-900 p-4 rounded-xl text-center shadow">
        <h2 class="text-xl font-semibold text-green-800 dark:text-green-200">Acceptés</h2>
        <p class="text-3xl font-bold">{{ acceptes }}</p>
      </div>
      <div class="bg-red-100 dark:bg-red-900 p-4 rounded-xl text-center shadow">
        <h2 class="text-xl font-semibold text-red-800 dark:text-red-200">Refusés</h2>
        <p class="text-3xl font-bold">{{ refuses }}</p>
      </div>
    </div>

    <!-- Dernières demandes -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Dernières demandes</h2>
      <div class="space-y-3">
        <div
          v-for="d in recentes"
          :key="d.id"
          class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <p class="font-semibold">{{ d.prenom }} {{ d.nom }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-300">
              {{ d.email }} - {{ d.telephone }}
            </p>
          </div>
          <span
            class="px-3 py-1 rounded-full text-sm font-medium"
            :class="{
              'bg-yellow-200 text-yellow-800': d.statut === 'En attente',
              'bg-green-200 text-green-800': d.statut === 'Acceptée',
              'bg-red-200 text-red-800': d.statut === 'Refusée'
            }"
          >
            {{ d.statut }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
