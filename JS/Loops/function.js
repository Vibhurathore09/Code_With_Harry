function onePlusAvg(x , y){
    return 1 + (x+y)/2
}

let a =1 
let b = 2
let c = 3

console.log("One plus average of a and b is "+onePlusAvg(a,b));

console.log("One plus average of a and b is "+onePlusAvg(a,c));

// Arrow Funciton
const sum = (p,q)=>{
    return p+q;
}

const hello = () =>{
    console.log("Hello");
}
console.log(sum ( 9,9));
let v = hello();
console.log(v)