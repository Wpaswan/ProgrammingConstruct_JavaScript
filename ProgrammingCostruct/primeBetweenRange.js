"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var a=parseInt(prompt("Enter lower bound of the interval:"))
var b=parseInt(prompt("Enter upper bound of the interval:"))
var i=0
var j=0
var flag=0
 // Traverse each number in the interval
    // with the help of for loop
    for (i = a; i <= b; i++) {
        // Skip 0 and 1 as they are
        // neither prime nor composite
        if (i == 1 || i == 0)
            continue;
 
        // flag variable to tell
        // if i is prime or not
        flag = 1;
        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
 
        // flag = 1 means i is prime
        // and flag = 0 means i is not prime
        if (flag == 1)
            console.log(i+" ");
    }