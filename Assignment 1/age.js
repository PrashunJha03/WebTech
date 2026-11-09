// Assingnment 5:Arrow Function
// --------------------
// Write an arrow function named checkAge that takes one parameter: age.

// Inside the function, use an if condition:

// If the age is 18 or older, return "You Can Vote".

// If the age is under 18, return "You Cant Vote".


let checkAge = (a) =>{
    if(a >= 18 )
        return "You can Vote"
    else
        return "You cannot Vote"
}


console.log(checkAge(7))
console.log(checkAge(25))