<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class=" container flex items-center cursor-pointer">
        <span class="text-green-500 text-xl mr-1">
            <i class="bi bi-cloud-haze2"></i>
        </span>
        <h1 class="text-xl text-green-500">Weather App</h1>
    </div>

    <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl" @click="openMenu">
         <i :class="[open? 'bi bi-x' : 'bi bi-list' ]"></i>
    </span>

      <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0  pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6" v-for="link in links" :key="link">
          <a :href="link.url" class="text-xl hover:text-green-500">{{link.name}}</a></li>
          <button class="bg-green-400 hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4">Let's go</button> 

      </ul>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {

  setup(){
    const open = ref(false)
    const links = [
      {name : 'Home' , url : '#'},
      {name : 'Contact' , url : '#'},
      {name : 'settings' , url : '#'},
      {name : 'Login' , url : '#'}
    ]

    function openMenu() {
      open.value = !open.value
    }
    return{links ,open ,openMenu}
  }

}
</script>

<style>

</style>