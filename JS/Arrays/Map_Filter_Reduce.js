// Map Method
// let arr = [45 , 23 ,21]

// let a = arr.map((value , index , array) => {
//     console.log(value , index , array)
//     return value+1;
// })
// console.log(arr)

// console.log(a)


// Filter method
// let arr2 = [45 , 23 , 21 , 0 , 3 ,5,1]
// let a2 = arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2)


//Reduce Method
let arr3 = [1,2,3,5,2,1]

let newarr3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)