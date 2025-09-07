let arr =[1,3,6,4,7]

// classic for loop
/*  for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
}*/


// -------------------------------------------------------------------------------------------------------------------------------------
// for each loop

// arr.forEach((i, index,arr) => console.log(i,arr))


// -----------------------------------------------------------------------------------------------------------------------------------------------
// "for in" loop is used for object where it iterrates trough object and can be used to print both key and value of the object

let obj = {
    a: 1,
    b : 2,
    c :88
}
for (const value in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, value)) {
        const element = obj[value];
        console.log(value ,element)
        
    }
}


// -----------------------------------------------------------------------------------------------------------------------------------------------
// FOR OF LOOP IS USED TO ITERATE ARRAYS 

// for (const i of arr) {
//     console.log(i)   
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------
