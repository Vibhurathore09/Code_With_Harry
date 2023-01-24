async function harry() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" 27 deg");
        }, 3000)
    })
    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" 21 deg");
        }, 8000)
    })
    // delhiweather.then(alert);
    // bangloreweather.then(alert)
    console.log(
        'Fetching delhi weather'
    )
    let delhiW = await delhiweather;
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log('Fetching Bnaglore Weather Please wait');
    let bangloreW = await bangloreweather;
    console.log("Fetched Banglore Weather: " + bangloreW)
    return [delhiW, bangloreW];
}
const cherry = async() => {
    console.log("Hey I am cherry and I am not waiting");
}
const main1 = async () => {
    console.log("Welcome to weather control room ");
    let b = await cherry();
    let a = await harry();
    // console.log(a);
    // a.then((value) => {
    //     console.log(value);

    // })
}
main1();


// async function harry(){
//     return 5

// }

// harry().then((x) =>{
//     alert(x);
// })