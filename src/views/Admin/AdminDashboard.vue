<template>
  <div class="min-h-screen bg-gray-50">

    <div class="container mx-auto py-10 px-4">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Tableau de bord administrateur</h1>

      <!-- Filtres de statut -->
      <div class="flex flex-wrap gap-4 mb-6">
        <button
          v-for="status in statuses"
          :key="status"
          @click="selectedStatus = status"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium',
            selectedStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          ]"
        >
          {{ status }}
        </button>
      </div>

      <!-- Liste des vendeurs -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="vendeur in filteredVendeurs"
          :key="vendeur.id"
          class="bg-white rounded-2xl shadow p-4 border"
        >
          <h3 class="text-lg font-semibold text-gray-800">{{ vendeur.nom }}</h3>
          <p class="text-sm text-gray-600">Téléphone : {{ vendeur.telephone }}</p>
          <p class="text-sm text-gray-600">Statut : <span class="font-semibold">{{ vendeur.statut }}</span></p>

          <div class="mt-4 flex gap-2 flex-wrap">
            <button
              class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              @click="changerStatut(vendeur.id, 'Acceptée')"
              v-if="vendeur.statut === 'En attente'"
            >
              Accepter
            </button>
            <button
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              @click="changerStatut(vendeur.id, 'Refusée')"
              v-if="vendeur.statut === 'En attente'"
            >
              Refuser
            </button>
            <select
              v-model="vendeur.statut"
              @change="changerStatut(vendeur.id, vendeur.statut)"
              class="border px-2 py-1 rounded text-sm"
            >
              <option value="En attente">En attente</option>
              <option value="Acceptée">Acceptée</option>
              <option value="Refusée">Refusée</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref, computed } from 'vue'

// Filtres de statut
const statuses = ['Tous', 'En attente', 'Acceptée', 'Refusée']
const selectedStatus = ref('Tous')

// Liste simulée des vendeurs
const vendeurs = ref([
  { id: 1, nom: 'Ahouansè Bio', telephone: '+229 91234567', statut: 'En attente' },
  { id: 2, nom: 'Zinsou Agossou', telephone: '+229 98765432', statut: 'Acceptée' },
  { id: 3, nom: 'Togbé Dossou', telephone: '+229 80001122', statut: 'Refusée' },
])

const filteredVendeurs = computed(() => {
  if (selectedStatus.value === 'Tous') return vendeurs.value
  return vendeurs.value.filter(v => v.statut === selectedStatus.value)
})

const changerStatut = (id, nouveauStatut) => {
  const vendeur = vendeurs.value.find(v => v.id === id)
  if (vendeur) {
    vendeur.statut = nouveauStatut
    // 🟡 À remplacer par une requête API vers le backend PHP (ex: fetch('/api/update-vendeur.php'))
    console.log(`Vendeur ${id} changé à ${nouveauStatut}`)
  }
}
</script>

<style scoped>
</style>
