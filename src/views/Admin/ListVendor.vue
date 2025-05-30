<script setup>
import { ref, computed, onMounted } from 'vue'

const vendeurs = ref([])
const filtreStatut = ref('Tous')

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('vendeurs') || '[]')
  vendeurs.value = data
})

const vendeursFiltres = computed(() => {
  if (filtreStatut.value === 'Tous') return vendeurs.value
  return vendeurs.value.filter(v => v.statut === filtreStatut.value)
})

function changerStatut(id) {
  const index = vendeurs.value.findIndex(v => v.id === id)
  if (index !== -1) {
    vendeurs.value[index].statut =
      vendeurs.value[index].statut === 'Acceptée' ? 'Refusée' : 'Acceptée'
    localStorage.setItem('vendeurs', JSON.stringify(vendeurs.value))
  }
}

function supprimerVendeur(id) {
  if (confirm('Voulez-vous vraiment supprimer ce vendeur ?')) {
    vendeurs.value = vendeurs.value.filter(v => v.id !== id)
    localStorage.setItem('vendeurs', JSON.stringify(vendeurs.value))
  }
}
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Gestion des vendeurs</h2>

    <!-- Filtres -->
    <div class="mb-4 flex flex-wrap gap-2">
      <button
        v-for="statut in ['Tous', 'En attente', 'Acceptée', 'Refusée']"
        :key="statut"
        @click="filtreStatut = statut"
        :class="[
          'px-4 py-2 rounded-lg',
          filtreStatut === statut
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        ]"
      >
        {{ statut }}
      </button>
    </div>

    <!-- Liste des vendeurs -->
    <div v-if="vendeursFiltres.length" class="grid gap-4 md:grid-cols-2">
      <div
        v-for="vendeur in vendeursFiltres"
        :key="vendeur.id"
        class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
      >
        <p><strong>Nom :</strong> {{ vendeur.prenom }} {{ vendeur.nom }}</p>
        <p><strong>Produits vendus :</strong> {{ vendeur.produits }}</p>
        <p><strong>Email :</strong> {{ vendeur.email }}</p>
        <p><strong>Téléphone :</strong> {{ vendeur.telephone }}</p>
        <p><strong>Statut :</strong>
          <span :class="{
            'text-yellow-600': vendeur.statut === 'En attente',
            'text-green-600': vendeur.statut === 'Acceptée',
            'text-red-600': vendeur.statut === 'Refusée'
          }">
            {{ vendeur.statut }}
          </span>
        </p>

        <div class="mt-4 flex gap-2">
          <button
            v-if="vendeur.statut !== 'En attente'"
            @click="changerStatut(vendeur.id)"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Changer statut
          </button>
          <button
            @click="supprimerVendeur(vendeur.id)"
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-500">Aucun vendeur trouvé pour ce filtre.</div>
  </div>
</template>
