<template>
  <div class="post">
    <router-link :to="{name : 'Details' , params : {id :post.id}}">
      <h2>{{ post.tittle }}</h2>
    </router-link>
    
    <p>{{ snippets }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
 
    props:['post'],

    setup(props){

        const snippets = computed(() => {
          return props.post.body.substring(0,100) + '....'
        })
      return{snippets}
    }
}
</script>

<style>

</style>