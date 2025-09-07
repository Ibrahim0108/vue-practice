<template>
    <div class="grid md:grid-cols-2 gap-4">
        <!--Box 1  -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 mb-4 font-bold">Cases</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New : </span>
                {{ newCase }}             
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total : </span>
                {{ totalCase }}             
            </div>
        </div>
<!-- Box 2 -->
        <div class="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 mb-4 font-bold">Deaths</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New : </span>
                {{newDeath }}             
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total : </span>
                {{ totalD }}             
            </div>
        </div>

    </div>
</template>

<script>
export default{
    props : ['newCase' ,"totalCase" , 'totalD','newDeath']

}
</script>

