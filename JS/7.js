// let a = prompt("Hey whjats you age? ")
// a = Number.parseInt(a) // Converting the string to a number
// console.log(typeof a)
// if(a > 0){
//     alert("This is a valid age")
// }
// else{
//     alert("This is an invalid age")
// }


const expr = "Papayas";
switch(expr){
    case  "Oragnes":
        console.log("Oragnes are &0.59 pound");
        break;
    case "Mangoes":
    case "Payayas":
        console.log("Mangoes and papayas are $2.79 pound");
        break;
    default:
        console.log(`Sorry , we are out of ${expr}.`);
}