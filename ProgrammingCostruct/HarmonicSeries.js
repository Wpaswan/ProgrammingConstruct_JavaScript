"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var n=parseInt(prompt("Enter the number of terms"))
var i=0
console.log("Harmonic series:")
for(i=1;i<=n;i++)
{
    console.log(1/i)
}