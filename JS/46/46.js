document.write("Hello")
const sum = (a,b) =>{
    console.log("Yes i am running "+(a+b))
    a+b
}
setTimeout(sum , 1000 , 1 ,9)

// setInterval(function(){
//     alert("Every 3 sec")
// },3000)


// let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// },2000)
// let b = prompt("Do you want to run the settimout?")
// if("n" == b){
//     clearInterval(a)
// }
// console.log(a)