<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gray-900 text-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Section 1 : Logo / Nom -->
        <div>
          <h2 class="text-xl font-bold text-white">MarkCheck</h2>
          <p class="mt-2 text-sm text-gray-400">
            Plateforme d’adhésion des vendeurs à un marché physique.
          </p>
        </div>

        <!-- Section 2 : Liens -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h3>
          <ul class="mt-4 space-y-2">
            <li><RouterLink to="/" class="hover:text-white">Accueil</RouterLink></li>
            <li><RouterLink to="/adhesion" class="hover:text-white">Adhésion</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Section 3 : Réseaux sociaux (icônes fictives) -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider">Suivez-nous</h3>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.7 8.7 0 01-2.74 1.05A4.3 4.3 0 0016.11 4c-2.4 0-4.35 1.95-4.35 4.36 0 .34.04.67.1.99A12.21 12.21 0 013 5.17a4.36 4.36 0 001.34 5.81 4.27 4.27 0 01-1.97-.55v.06c0 2.1 1.5 3.85 3.5 4.25a4.3 4.3 0 01-1.96.07 4.36 4.36 0 004.06 3.02A8.66 8.66 0 012 19.54a12.2 12.2 0 006.62 1.94c7.95 0 12.3-6.58 12.3-12.3v-.56A8.87 8.87 0 0024 4.56a8.59 8.59 0 01-2.54.7z"/>
              </svg>
            </a>
            <!-- Ajoute d'autres icônes si tu veux -->
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © {{ new Date().getFullYear() }} MarkCheck. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
