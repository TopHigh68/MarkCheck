<template>
  <div>
    <!-- SECTION HERO avec VueFlux -->
    <div class="relative h-[80vh]  ">
      <VueFlux
        class="h-full overflow-hidden"
        :options="options"
        :rscs="rscs"
        :transitions="transitions"
      >      
      </VueFlux>
       <!-- Superposition du contenu -->
        <div class="absolute inset-0   flex items-center backdrop-blur-xs justify-center text-center px-4 z-10">
          <div class="text-white  py-4 px-8 ">
            <h1 class="text-4xl md:text-5xl font-bold   py-5  mb-4">Bienvenue sur MarkCheck</h1>
            <p class="text-lg md:text-2xl text-black  font-bold mb-6">La plateforme d’adhésion moderne pour les vendeurs de marché physique</p>
            <RouterLink to="/adhesion">
              <button class="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition">
                Rejoindre maintenant
              </button>
            </RouterLink>
          </div>
        </div>
    </div>

    <!-- SECTION PRÉSENTATION -->
    <section class="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">À propos de MarkCheck</h2>
      <p class="text-gray-600 text-lg dark:text-white">
        MarkCheck simplifie l’adhésion des vendeurs à votre marché physique. Gagnez du temps,
        centralisez les inscriptions, et assurez un suivi efficace. Conçu pour les gestionnaires de marché et les vendeurs, notre plateforme moderne est simple, rapide, et fiable.
      </p>
    </section>
  </div>
</template>

<script setup>
import {
  VueFlux,
	Img,
  Slide,
  Blinds3D,
} from 'vue-flux'
import { reactive, shallowReactive } from 'vue'

// Images (à placer dans /public/images/ et utiliser le chemin public)
const rscs = shallowReactive([
  new Img('/images/mm.jpg'),
  new Img('/images/zz.jpg'),
  new Img('/images/dd.jfif'),
])

// Transitions personnalisées
const transitions = shallowReactive([
	Slide,
  Blinds3D,
]);

// Options du carrousel
const options = reactive({
  allowFullscreen: false,
  allowToSkipTransition: true,
  autohideTime: 2500,
  autoplay: true,
  delay: 4000,
  infinite: true,
  lazyLoad: true,
  lazyLoadAfter: 3,
})
</script>

<style scoped>
/* Tu peux personnaliser ici si besoin */
</style>
