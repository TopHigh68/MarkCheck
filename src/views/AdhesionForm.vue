<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()
const showModal = ref(false)

const form = reactive({
  nom: '',
  prenom: '',
  produits: '',
  deja_vendu: '',
  ou_vendu: '',
  actif_ailleurs: '',
  email: '',
  telephone: '',
  valeur_article : '',
})

const submitForm = async () => {
  try {
    // Zone de test localStorage (peut être supprimée ensuite)
    // localStorage.setItem('adhesionForm', JSON.stringify(form))

    // ⏳ Réserver ici la zone d’envoi vers le backend PHP
    await fetch('http://localhost:8000?route=store-vendeur', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    

    // ✅ SweetAlert de confirmation
    await Swal.fire({
      icon: 'success',
      title: 'Formulaire envoyé !',
      text: 'Merci pour votre adhésion. Nous reviendrons vers vous très bientôt.',
      confirmButtonText: 'OK',
    })
// Réinitialisation du formulaire
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    showModal.value = false
    
    // Rechargement de la page (alternative à router.push)
    window.location.reload()
    
    // Ou si vous préférez utiliser vue-router sans rechargement :
    // router.push('/adhesion')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors de l’envoi du formulaire.',
    })
    console.error('Erreur lors de l’envoi du formulaire :', error)
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-20   my-10  rounded-2xl mt-10">    
    <form @submit.prevent="showModal = true" class="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Formulaire d’adhésion vendeur</h2>
      <!-- NOM / PRENOM -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
          <input v-model="form.nom" type="text" required 
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
                placeholder="Votre nom">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Prénom</label>
          <input v-model="form.prenom" type="text" required 
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
                placeholder="Votre prénom">
        </div>
      </div>

      <!-- PRODUITS -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Produits vendus</label>
        <input v-model="form.produits" type="text" required 
              class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
              placeholder="Décrivez vos produits">
      </div>

      <!-- VENDU AILLEURS -->
      <div class="mb-6">
        <p class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Avez-vous déjà vendu ailleurs ?</p>
        <div class="flex flex-wrap gap-3">
          <label class="inline-flex items-center">
            <input type="radio" v-model="form.deja_vendu" value="Oui" class="hidden peer">
            <div class="px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 dark:peer-checked:bg-indigo-900/30 dark:peer-checked:border-indigo-700 dark:peer-checked:text-indigo-200 cursor-pointer transition duration-200">
              Oui
            </div>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="form.deja_vendu" value="Non" class="hidden peer">
            <div class="px-4 py-2.5 border border-gray-300  dark:border-gray-600 rounded-lg dark:text-white  peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 dark:peer-checked:bg-indigo-900/30 dark:peer-checked:border-indigo-700 dark:peer-checked:text-indigo-200 cursor-pointer transition duration-200">
              Non
            </div>
          </label>
        </div>
        <div v-if="form.deja_vendu === 'Oui'" class="mt-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Où ?</label>
          <input v-model="form.ou_vendu" type="text" 
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
                placeholder="Plateforme ou lieu de vente">
        </div>
      </div>

      <!-- ACTIF AILLEURS -->
      <div class="mb-6">
        <p class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Êtes-vous toujours actif ailleurs ?</p>
        <div class="flex flex-wrap gap-3">
          <label class="inline-flex items-center">
            <input type="radio" v-model="form.actif_ailleurs" value="Oui" class="hidden peer">
            <div class="px-4 py-2.5 border dark:text-white  border-gray-300 dark:border-gray-600 rounded-lg peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 dark:peer-checked:bg-indigo-900/30 dark:peer-checked:border-indigo-700 dark:peer-checked:text-indigo-200 cursor-pointer transition duration-200">
              Oui
            </div>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="form.actif_ailleurs" value="Non" class="hidden peer">
            <div class="px-4 py-2.5 border border-gray-300 dark:text-white  dark:border-gray-600 rounded-lg peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 dark:peer-checked:bg-indigo-900/30 dark:peer-checked:border-indigo-700 dark:peer-checked:text-indigo-200 cursor-pointer transition duration-200">
              Non
            </div>
          </label>
        </div>
      </div>

      <!-- EMAIL / TÉLÉPHONE -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Adresse email</label>
          <input v-model="form.email" type="email" required 
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
                placeholder="email@exemple.com">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Numéro de téléphone</label>
          <input v-model="form.telephone" type="tel" required 
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
                placeholder="+229 00 00 00 00 00">
        </div>
      </div>

      <!-- VALEUR ARTICLE -->
      <div class="mb-8">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Valeur unitaire des articles</label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">FCFA</span>
          <input v-model="form.valeur_article " type="number" min="0" step="0.01" required 
                class="w-full pl-15 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200" 
                placeholder="">
        </div>
      </div>

      <!-- BOUTON -->
      <div class="text-center">
        <button type="submit" 
                class="px-8 py-3.5 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200 shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Vérifier mes informations
        </button>
      </div>
    </form>

    <!-- MODAL DE VÉRIFICATION -->
    <div v-if="showModal" class="fixed inset-0  backdrop-blur-2xl  bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h3 class="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Vérification des informations</h3>
        <ul class="text-sm space-y-2 text-gray-700 dark:text-gray-200">
          <li><strong>Nom:</strong> {{ form.nom }}</li>
          <li><strong>Prénom:</strong> {{ form.prenom }}</li>
          <li><strong>Produits:</strong> {{ form.produits }}</li>
          <li><strong>Déjà vendu ailleurs:</strong> {{ form.deja_vendu }}</li>
          <li v-if="form.deja_vendu === 'Oui'"><strong>Où:</strong> {{ form.ou_vendu }}</li>
          <li><strong>Actif ailleurs:</strong> {{ form.actif_ailleurs }}</li>
          <li><strong>Email:</strong> {{ form.email }}</li>
          <li><strong>Téléphone:</strong> {{ form.telephone }}</li>
          <li><strong>Valeur unitaire:</strong> {{ form.valeur_article  }} FCFA</li>
        </ul>

        <div class="flex justify-end gap-4 mt-6">
          <button @click="showModal = false" class="px-5 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700">Modifier</button>
          <button @click="submitForm" class="px-5 py-2 cursor-pointer bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">Confirmer</button>
        </div>
      </div>
    </div>
  </div>
</template>



