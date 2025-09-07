<template>
  <div class="income-list">
    <IncomeItem  v-for="data in state.sortedIncome" :key="data.id" :income="data"/>

  </div>
</template>

<script setup>
import IncomeItem from './IncomeItem.vue';
const props = defineProps({
    state :{
        type: Object,
    }
  })

</script>

<style>
.income-list{
    margin-top: 30px;
    padding: 15px;
}
</style>