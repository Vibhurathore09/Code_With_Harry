//Write a program using prompt function to take input of age as a value from the user and use alter to tell him if he can drive

// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// if(canDrive(age)){
//     alert("You can Drive")
// }else{
//     alert("You cannot drive")
// }

const canDrive = (age) => {
    return age >= 18 ? true : false
}

//In Q1 use confirm to ask the user if he wante to see the prompt againler 


// let runAgain = true;
// while (runAgain) {
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if (canDrive(age)) {
//         alert("You can Drive")
//     } else {
//         alert("You cannot drive")
//     }
//     runAgain = confirm("Do you want to enter again")
// }

//In the previous question use console.error to log the error if the age entered in negative

let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age < 0){
        console.error("Please enter a valid age")
        break;
    }
    if (canDrive(age)) {
        alert("You can Drive")
    } else {
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to enter again")
}


//Write a program to change the url to google.com if user entere a number greater than 4 