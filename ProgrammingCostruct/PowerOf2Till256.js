"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var a=parseInt(prompt("Enter the number of terms:"))
var i=0
for(i=1;i<=Math.pow(2,a);i++)
{
    if(Math.pow(2,i)<=256)
    console.log("2^"+i+"="+Math.pow(2,i))

}

