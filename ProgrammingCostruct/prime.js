"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var n=parseInt(prompt("Enter any number"))
var i=0
var c=0
for(i=1;i<=n;i++)
{
    if(n%i==0)
    c++
    
}
if(c==2)
console.log(n+" is prime!!")
else
console.log(n+" is not prime!!")