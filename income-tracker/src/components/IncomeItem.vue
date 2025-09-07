<template>
  <div class="income-item">
    <div class="removeItem">X</div>
    <div class="desc">{{income.desc}}</div>
    <div class="price">${{ income.value }}</div>
    <div class="date">{{ formattedDate }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
    income :{
        type: Object,
    }
  })

  let date = new Date(props.income.date);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let formattedDate = day + '/' + month + '/' + year;
</script>

<style scoped>
.income-item{
    position: relative;
    display: flex;
    padding: 15px 15px 15px 0px;
    border-radius: 8px;
    background-color: #FFF;
    max-width: 600px;
    margin: 0 auto 30px;
}
.removeItem{
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    margin: 0 15px;
    color: red;
}
.desc{
     flex : 1 1 100%;
     font-size: 20px;
     color: #1f1f1f;
}
.price{
    color: #101010;
    min-width: 100px;
    font-size: 20px;
}
.date{
    color: #060606;
    text-align: right;
    font-size: 20px;
}
</style>