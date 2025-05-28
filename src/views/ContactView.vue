<template>
  <div class="max-w-6xl mx-auto px-4 py-12 ">
    <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Contactez-nous</h1>
    <p class="text-center text-gray-600 dark:text-gray-300 mb-10">
      Une question ? Un besoin d'assistance ? Envoyez-nous un message et nous vous répondrons rapidement.
    </p>

    <div class="grid md:grid-cols-2 gap-10">
      <!-- Formulaire de contact -->
      <form @submit.prevent="envoyerMessage" class="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-800/50 rounded-lg p-6 space-y-4">
        <div>
          <label class="block text-gray-700 dark:text-gray-300 font-medium">Nom complet</label>
          <input v-model="form.nom" type="text" required 
                 class="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 dark:text-white">
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 font-medium">Adresse email</label>
          <input v-model="form.email" type="email" required 
                 class="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 dark:text-white">
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 font-medium">Sujet</label>
          <input v-model="form.sujet" type="text" required 
                 class="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 dark:text-white">
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 font-medium">Message</label>
          <textarea v-model="form.message" rows="4" required 
                    class="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 dark:text-white"></textarea>
        </div>

        <button type="submit" 
                class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition">
          Envoyer
        </button>
      </form>

      <!-- Informations de contact -->
      <div class="my-auto">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:shadow-gray-800/50">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Informations</h2>
          <p class="text-gray-600 dark:text-gray-300">Vous pouvez également nous joindre directement :</p>
          <ul class="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span><strong>Email :</strong> contact@markcheck.com</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span><strong>Téléphone :</strong> +229 01 51 83 83 61</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span><strong>Adresse :</strong> Marché central, Cotonou, Bénin</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const form = reactive({
  nom: '',
  email: '',
  sujet: '',
  message: ''
})

const envoyerMessage = async () => {
  // Tu pourrais ajouter ici un envoi réel avec axios vers ton backend
  await Swal.fire({
    icon: 'success',
    title: 'Message envoyé',
    text: 'Merci pour votre message. Nous vous contacterons bientôt.',
    confirmButtonText: 'OK',
    background: '#1f2937',
    color: '#fff'
  })

  // Réinitialisation du formulaire
  form.nom = ''
  form.email = ''
  form.sujet = ''
  form.message = ''
}
</script>