<script setup>
import { ref, computed, onMounted } from 'vue'

const demandes = ref([])

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('vendeurs') || '[]')

  // Injecter des données si le localStorage est vide
  if (data.length === 0) {
    const faussesDemandes = [
      {
        id: 1,
        nom: 'Kouassi',
        prenom: 'Jean',
        produits: 'Tomates, Oignons',
        dejaVendu: true,
        lieuVente: 'Marché Dantokpa',
        actifAilleurs: false,
        email: 'jean.kouassi@example.com',
        telephone: '+22998765432',
        statut: 'En attente',
      },
      {
        id: 2,
        nom: 'Ahouansou',
        prenom: 'Clarisse',
        produits: 'Poissons séchés',
        dejaVendu: false,
        lieuVente: '',
        actifAilleurs: false,
        email: 'clarisse.ahouansou@example.com',
        telephone: '+22991234567',
        statut: 'En attente',
      }
    ]
    localStorage.setItem('vendeurs', JSON.stringify(faussesDemandes))
    demandes.value = faussesDemandes
  } else {
    demandes.value = data
  }
})

const demandesEnAttente = computed(() =>
  demandes.value.filter(d => d.statut === 'En attente')
)

function changerStatut(id, nouveauStatut) {
  const index = demandes.value.findIndex(d => d.id === id)
  if (index !== -1) {
    demandes.value[index].statut = nouveauStatut
    localStorage.setItem('vendeurs', JSON.stringify(demandes.value))
  }
}
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Nouvelles demandes d’adhésion</h2>

    <div v-if="demandesEnAttente.length" class="grid gap-4 md:grid-cols-2">
      <div
        v-for="demande in demandesEnAttente"
        :key="demande.id"
        class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
      >
        <p><strong>Nom :</strong> {{ demande.prenom }} {{ demande.nom }}</p>
        <p><strong>Produits vendus :</strong> {{ demande.produits }}</p>
        <p><strong>A déjà vendu ailleurs ?</strong> {{ demande.dejaVendu ? 'Oui' : 'Non' }}</p>
        <p v-if="demande.dejaVendu"><strong>Lieu de vente :</strong> {{ demande.lieuVente }}</p>
        <p><strong>Actif ailleurs ?</strong> {{ demande.actifAilleurs ? 'Oui' : 'Non' }}</p>
        <p><strong>Email :</strong> {{ demande.email }}</p>
        <p><strong>Téléphone :</strong> {{ demande.telephone }}</p>

        <div class="mt-4 flex justify-between">
          <button
            @click="changerStatut(demande.id, 'Acceptée')"
            class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Accepter
          </button>
          <button
            @click="changerStatut(demande.id, 'Refusée')"
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-500">Aucune demande en attente.</div>
  </div>
</template>
