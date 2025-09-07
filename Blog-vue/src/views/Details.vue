<template>

  <div  v-if="error">{{ error }}</div>
  <div class="post" v-if="post">
    <h2>{{ post.tittle }}</h2>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import singlePost from '@/composables/singlePost';

export default {
  props : ['id'],

  setup(props){

     const {post , error ,load} = singlePost(props.id)
      
     load()

    return{post , error}
  }
}
  
</script>

<style>
  .post{
    max-width: 1200px;
    margin: 0 auto;
  }
  .post h2{
    font-size: 30px;
    color: hsla(160, 100%, 37%, 1);
  }
  .post p {
    
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre{
    white-space: pre-wrap;
  }
</style>
