<script setup>
import { RouterView } from "vue-router";
import Navbar from './components/Navbar.vue';
import SiteNavigation from './components/SiteNavigation.vue';

 components : {Navbar}
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <Navbar/>
    <SiteNavigation/>

   <RouterView/> 
  </div>
</template>

<style scoped>

</style>
