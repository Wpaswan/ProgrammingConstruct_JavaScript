"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var a=parseInt(prompt("Enter a number to find factorial:"))
var i=0
var fact=1
for(i=1;i<=a;i++)
{
    fact=fact*i

}
console.log("Factorial of "+a+"="+fact)
