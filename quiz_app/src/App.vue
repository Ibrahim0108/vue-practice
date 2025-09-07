<template>
  
</template>

<script setup>
import { ref ,computed } from "vue";

   const questions = ref([
    { 
       question : 'What is Vue js ?',
       answer : 0,
       options : [
        'A Front End Framework',
        'A library',
        'An ice Cream maker'
       ],
       selected : null
    },
    { 
       question : 'What is Vuex?',
       answer : 2,
       options : [
        'A Vue with an X',
        'A wine selector',
        'A State management library'
       ],
       selected : null
    },
    { 
       question : 'What is Vuex?',
       answer : 2,
       options : [
        'Waling in circle ',
        'A Routing library with for vue js',
        'A hardware device for wifi network '
       ],
       selected : null
    },
   ])

  const quizComplete = ref(false)
  const currentQuestion = ref(0)

  const score = computed (() => {
    let value = 0
    questions.value.map(q => {
      if(q.selected == q.answer){
        value++
      }
    })
    return value
  })

  const getCurrentQuestion = computed (() => {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question

  })
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat' ,sans-serif ;
}
body{
  background-color: #271C36;
  color: white;
}
</style>
