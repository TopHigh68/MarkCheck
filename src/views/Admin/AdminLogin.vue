<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminAuthStore } from '@/stores/adminAuth'

const router = useRouter()
const authStore = useAdminAuthStore()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errors = reactive({
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  errors.email = ''
  errors.password = ''

  if (!email.value) {
    errors.email = "L'email est requis"
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = 'Adresse email invalide'
    isValid = false
  }

  if (!password.value) {
    errors.password = 'Mot de passe requis'
    isValid = false
  } else if (password.value.length < 6) {
    errors.password = '6 caractères minimum'
    isValid = false
  }

  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true
  try {
    // 🔐 Simulation ou backend réel ici (future API PHP)
    // Exemple: const res = await axios.post('/api/admin-login.php', { email: email.value, password: password.value })

    if (email.value === 'admin@example.com' && password.value === 'admin123') {
      const dummyToken = 'admin-token'
      authStore.login(dummyToken)
      router.push('/admin/dashboard')
    } else {
      throw new Error('Identifiants invalides')
    }

  } catch (err) {
    errors.email = 'Email ou mot de passe incorrect'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-[800px] flex items-center justify-center bg-gray-50">
    <div class="flex w-full max-w-4xl h-[500px] bg-white shadow-lg border border-gray-200 rounded-3xl">
      <!-- Image à gauche -->
      <div class="w-1/2 bg-gray-50 flex items-center justify-center p-8 rounded-3xl">
        <img class="h-64 w-auto" src="../../assets/admin.png" alt="Logo Portail Marchand" />
      </div>

      <!-- Formulaire -->
      <div class="w-1/2 p-8 flex justify-center flex-col">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Connexion Administrateur</h2>
        </div>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500"
              :class="{ 'border-red-500': errors.email }"
              placeholder="admin@example.com"
            />
            <p v-if="errors.email" class="text-sm text-red-600 mt-1">{{ errors.email }}</p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500"
              placeholder="********"
              :class="{ 'border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="text-sm text-red-600 mt-1">{{ errors.password }}</p>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {{ isLoading ? 'Connexion...' : 'Se connecter' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
