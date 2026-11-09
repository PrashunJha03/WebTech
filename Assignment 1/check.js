// Assignment 1: Check even or odd
// -------------------------------------------
// Write a Regular function checkEvenOdd(n) that returns "Even" or "Odd".


function checkEvenOdd(n)
{
    if (n % 2 === 0)
    {
        return "even"
    }
    else{
        return "odd"
    }
}

console.log(checkEvenOdd(5))
console.log(checkEvenOdd(100))