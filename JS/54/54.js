let promise = new Promise(function (resolve, reject) {
    alert("Hello")
    resolve(56)
})

console.log("Hello")
setTimeout(function () {
    console.log("Hellow in 2 seconds")
}, 2000)

console.log("My name is " + " Hello Three")
console.log(promise)


// Fetch google.com homepage ==> console.log("Google.com homepage done")
//Fetch data from the data api
//Fetch pictures from the server
//Print downloading
//Rest of the script