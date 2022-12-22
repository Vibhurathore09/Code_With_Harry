alert("Enter the value of a")
let a = prompt("Enter a here" , "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let b = confirm("Do you want to write on page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}