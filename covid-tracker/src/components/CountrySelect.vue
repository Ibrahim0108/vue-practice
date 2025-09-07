<template>
    <select v-model="selected" class="form select mt-10 block w-full p-3 bg-gray-300 " @change="onChange()">
        <option value="0">Select country</option>
        <option v-for="(country,index ) in countries" :key="index" :value="country">{{ country }}</option>

    </select>
</template>

<script>
export default {
    props : ['countries','data'],
    data(){
        return{
            selected : 0
        }
    },
    methods:{
        onChange(){
            console.log('Selected country:', this.selected);
            const country = this.data.find(item => item.Country_text === this.selected)
            console.log(country.Country_text)
            const countryName = country.Country_text
            if(countryName){
                this.$emit('getCountry',countryName)
            }
            else {
                console.log('Country not found!');}
        }
        
    }
}
</script>
