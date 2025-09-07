<template>
  <header>
    <h1>Income Tracker</h1>
    <div class="total-income">${{ totalIncome }}</div>
  </header>
</template>

<script>
export default {
     props: {totalIncome : Number}
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #313131;
    border-bottom: 5px solid #ffce00;
}
header h1{
  color: #EEE;
  font-size: 28px;
}
header .total-income{
    background-color: #ffce00;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 10px;
    box-shadow: inset 0px 0px 6px black;
    text-shadow: 0px 0px 3px black;
}

</style>

