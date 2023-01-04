let p1 = new Promise((resolve , reject) =>{
    setTimeout(()=>{
        // alert("Hey i am resolved")
        resolve(1)
    },2000)
})
p1.then(()=>{
    console.log("Hurray")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4)
        },5000)
    })
}).then((value)=>{
    console.log(value)
})
p1.then(()=>{
    console.log("Congratulation this promise is now resolved")
})
