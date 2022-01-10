"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var n=parseInt(prompt("Enter the number of terms"))
var i=0
console.log("power of two")
for(i=1;i<=Math.pow(2,n);i++)
{
    console.log("2^"+i+"="+Math.pow(2,i))
}