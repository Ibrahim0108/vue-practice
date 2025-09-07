<script setup>
import { computed, ref, watch ,onMounted} from "vue";

 const todos = ref([])
 const name = ref('')
 const inputContent = ref('')
 const inputCategory = ref(null)

 const todo_asc = computed(() => todos.value.sort((a , b) => {
  return b.createdAt - a.createdAt
 }))

const addTodo = () => {
  if(inputContent.value.trim() === '' || inputCategory.value === null){
    return
  }
    todos.value.push({
      content : inputContent.value,
      category : inputCategory.value,
      createdAt : new Date().getTime(),
      done : false
    })
    inputCategory.value = null,
    inputContent.value = ''
}

watch(todos , newVal => {
  localStorage.setItem('todos' , JSON.stringify(newVal))
} , {deep: true})
 
watch(name , (newVal) => {
  localStorage.setItem('name' , newVal)
})

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
 })


const removeTodo = (todo) => {
  todos.value = todos.value.filter( t => t !==todo)
}
</script>

<template>
  
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        what's up  , <input type="text" placeholder="NAME HERE" v-model="name">
      </h2>
    </section>
    <section class="create-todo">
      <h3>CREATE TODO</h3>
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input type="text" placeholder="e.g. make a video" v-model="inputContent">

        <h4>Pick your Category</h4>
        <div class="options">
          <label>
            <input type="radio" name="category" id="category1" v-model="inputCategory" value="business">
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input type="radio" name="category" id="category2" v-model="inputCategory" value="personal">
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>
        <input type="submit" value="Add todo">
        
      </form>
    </section>

    <section class="todo-list">
      <h3>TODO LIST</h3>

      <div class="list">

        <div v-for="todo in todo_asc" :key="todo" :class="`todo-item ${todo.done && 'done'}`">
          <label>
            <input type="checkbox" v-model="todo.done">
            <span :class="`bubble ${todo.category}`"></span>
          </label>

          <div class="todo-content">
            <input type="text" v-model="todo.content">
          </div>

          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
