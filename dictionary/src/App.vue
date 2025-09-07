<template>
  <form @submit.prevent="getDefinition()" >
      <input type="text" placeholder="My Word" id="word" v-model="word">
      <button class="btn waves-effect waves-light mt10" type="submit"> Get Defination</button>
  </form>
  <p v-if="!validQuery"> The you searched for does not exist .Please try a different word</p>

  <div v-for="definition in definitionsArray" :key="definition" class="cardContainer">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel teal">
            <span class="white-text"> <span class=" black-text"> --> </span> {{ definition }}</span>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
import axios from "axios"
import { ref } from 'vue'
export default {

  setup(){
  
    let validQuery = ref(true)
  const definitionsArray = ref([]) 
  const word = ref('')

  async function getDefinition(){

        validQuery.value = true
        definitionsArray.value.splice(0 , definitionsArray.value.length)

    try {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word.value;

    const {data} = await axios.get(url);

    data.map(({meanings}) => {
      meanings.map(({definitions}) => {
        definitions.forEach(({definition}) => {
             if(typeof definition === "string") 
                definitionsArray.value.push(definition);
      })
        });
      });
      
    } catch (error) {
       validQuery.value = false
    }
    
    }
  

  return {word , getDefinition ,definitionsArray,validQuery}
 }
}
 
</script>


<style scoped>
form,button {
  margin-top: 10px;
}
button{
  margin-bottom: 30px;

}
</style>
