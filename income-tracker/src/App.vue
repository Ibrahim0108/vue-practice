<template>
<Header :totalIncome="state.totalIncome"/>
<Forms :state="state" @add-income="addIncome"/>
<IncomeList  :state="state"/>
 
</template>

<script setup>
import { computed, reactive} from 'vue'
import Header from './components/Header.vue';
import Forms from './components/Forms.vue';
import IncomeList from './components/IncomeList.vue';

const state = reactive({
  income : [],
  totalIncome: computed( () => {
    let temp = 0;
    if(state.income.length > 0){
      for(let i = 0 ;i< state.income.length; i++){
        temp += state.income[i].value
      }
    }
    return temp
  }),
  sortedIncome : computed( () => {
    let temp = []
    temp = state.income.sort(function (a ,b) {
      return b.date - a.date
    })
    return temp
  })
})

 function addIncome(data){

   let d = data.date.split('-');
   let newD = new Date(d[0] ,d[1], d[2])

  state.income = [...state.income,{
    id :Date.now(),
    value:data.value,
    desc : data.desc,
    date : newD.getTime()
  }]
 }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans',sans-serif;

}
</style>
