<template>
 <main v-if="!loading"> 
  <DataTitle  :text='title' :dataDate = 'dataDate' />

  <DataBoxes  :newCase ='newCase' :totalCase ='totalCase'  :newDeath="newDeath" :totalD ='totalDeath'/>

  <CountrySelect @getCountry="getCountryData" :countries="countries" :data="covidData"/>

  <button class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"  v-if="title !== 'World'"
  @click="clearAllData">Clear country</button>
 </main>

 <main v-else class="flex flex-col text-center justify-center ">
  <div class="text-gray-500 text-3xl mt-10 mb-6 "> Fetching Data......</div>
  <img :src="loadingImage" class="w-24 m-auto" alt="">
 </main>
</template>

<script>
import DataBoxes from '@/components/DataBoxes.vue';
import DataTitle from '@/components/DataTitle.vue';
import CountrySelect from '@/components/CountrySelect.vue'


export default {
  name: 'HomeView',
  components: {DataTitle,DataBoxes,CountrySelect},
  data(){
    return {
      loading : true,
      title  : 'World',
      dataDate  : '',
      newCase : '',
      totalCase :'',
      newDeath : '',
      totalDeath :'',
      covidData: [],     


      countries : [],
      loadingImage : require('../assets/hourglass.gif')
    }
  },
  methods : {
    async fetchCovidData() {
      const res = await fetch('https://covid-19.dataflowkit.com/v1')
      const data = await res.json()
    
      return data
    },
    getCountryData(country){
      this.title = country
      const countryData = this.covidData.find(item => item.Country_text === country)
      
      if(countryData){

        const newcase= countryData['New Cases_text'];
    const totalcase = countryData['Total Cases_text'];
    const newdeath = countryData['New Deaths_text'];
    const totaldeath = countryData['Total Deaths_text'];

    this.newCase = newcase
    this.totalCase = totalcase
    this.newDeath = newdeath
    this.totalDeath = totaldeath
      }
    },
    clearAllData(){
    this.newCase = '';
      this.totalCase = '';
      this.newDeath = '';
      this.totalDeath = '';
      this.title = 'World';

      const defaultData = this.covidData.find(item => item.Country_text === 'World')

      this.newCase = defaultData['New Cases_text'];
        this.totalCase = defaultData['Total Cases_text'];
        this.newDeath = defaultData['New Deaths_text'];
        this.totalDeath = defaultData['Total Deaths_text'];
        
    }
  },
  async created(){
    
    const data = await this.fetchCovidData()
    this.covidData = data;
    const firstEntry = data[0]; 

    console.log(data)
    const lastUpdate = firstEntry['Last Update'];  // Access 'Last Update' from the first object
    const newC = firstEntry['New Cases_text']; 
    const totalC = firstEntry['Total Cases_text']; 
    const newD = firstEntry['New Deaths_text']; 
    const totalD= firstEntry['Total Deaths_text']; 
    
    this.countries = data.map(entry => entry.Country_text);
    this.dataDate = lastUpdate;
    this.newCase = newC
    this.totalCase = totalC
    this.newDeath = newD
    this.totalDeath = totalD
    this.loading = false
    
   
  }
}
</script>
