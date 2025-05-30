<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="text-center max-w-lg">
      <img
        src="../assets/404.png"
        alt="404 illustration"
        class="mx-auto w-64 h-64 mb-6 animate-fadeIn"
      />

      <!-- <h1 class="text-5xl font-extrabold text-gray-800 mb-4">404</h1> -->
      <h2 class="text-2xl font-semibold text-gray-600 mb-2">Page non trouvée</h2>
      <p class="text-gray-500 mb-6">
        Oups ! La page que vous recherchez semble introuvable.
      </p>
      <RouterLink to="/" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
        Retour à l'accueil
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
// rien à déclarer ici pour ce composant statique
</script>

<style>
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}
</style>
