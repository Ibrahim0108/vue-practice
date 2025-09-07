let arr = [3,4,6,4,33,6]


// map --> is used to make a new array by using the current array making it one liner code

// let newarr = arr.map((i,index)=>{
//     return i+i
// })

// console.log(newarr)


// -------------------------------------------------------------------------------------------------------------------
// filter --> is used to get elemnents from current array based on condition (filtering out from the current array)

// let great = (arr)=>{
//      if(arr>5){
//         return true;
//      }
//   return false;
// }

// console.log( arr.filter(great))


// -----------------------------------------------------------------------------------------------------------------------------
// reduce --> it is used to make the array into a single value 

let red = (a,b)=>{
  return a+b;
}

console.log(arr.reduce(red))

