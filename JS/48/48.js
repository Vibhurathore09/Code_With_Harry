let a = prompt("What is your favorite Number")
let x = function(e){
    alert("Hello World2!")
}
let y =  function(e) {
    alert("Hello World1 !")
}
btn.addEventListener('click' ,y)
btn.addEventListener('click' , x)
if( a == "2"){
    btn.removeEventListener('click' ,x)
}

