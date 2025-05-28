<script setup>
import HeaderView from '../HeaderView.vue'
import FooterView from '../FooterView.vue'
</script>

<template>
    <div class="dark:bg-gray-600">
        <div class="h-[20%] w-full bg-[#000]">
            <HeaderView/>
        </div>
        <main class="">
            <router-view />
        </main>
        <div class="">
            <FooterView/>
        </div>
    </div>
</template>

<style scoped>

</style>