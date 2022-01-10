"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var n=parseInt(prompt("Enter the number to check for magic:"))
var i=0
var sum = 0;
    
    // Note that the loop continues
    // if n is 0 and sum is non-zero.
    // It stops when n becomes 0 and
    // sum becomes single digit.
    while (n > 0 || sum > 9)
    {
        if (n == 0)
        {
            n = sum;
            sum = 0;
        }sum += n % 10;
        n /= 10;
    }
    if(sum==1)
    console.log("It is magic number")
    else
    console.log("It is not magic number")