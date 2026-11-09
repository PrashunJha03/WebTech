// Assignment 2: Find the largest number
// ------------------------------------------------
// Write a function Expression to  findLargest(a, b, c) that returns the largest of three numbers.


function largestNo(a,b,c)
{
    if(a > b && a > c)
    {
        return "A is largest " + a
    }
    else if(b > a && b > c)
    {
        return "B is largest " + b
    }
    else 
    {
        return "C is largest "+ c
    }
}

console.log(largestNo(10,2,18))
console.log(largestNo(100,210,180))
console.log(largestNo(1000,211,500))