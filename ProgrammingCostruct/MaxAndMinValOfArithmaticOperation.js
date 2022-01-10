"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var a=parseInt(prompt("Enter the value of a"))
var b=parseInt(prompt("Enter the value of b"))
var c=parseInt(prompt("Enter the value of c"))
var answer1=a + b * c
console.log("a + b * c="+answer1)
var answer2=c + a / b
console.log("c + a / b="+answer2)
var answer3=a % b + c
console.log("a % b + c="+answer3)
var answer4=a * b + c
console.log("a * b + c="+answer4)
var maximumAnwer=0
var minimumAnser=0
if(answer1>answer2&&answer1>answer3&&answer1>answer4)
{
    maximumAnwer=answer1
}
else if(answer2>answer3&&answer2>answer4)
{
    maximumAnwer=answer2
}
else if(answer3>answer4)
{
    maximumAnwer=answer3
}
else
{
    maximumAnwer=answer4
}
if(answer1<answer2&&answer1<answer3&&answer1<answer4)
{
    minimumAnser=answer1
}
else if(answer2<answer3&&answer2<answer4)
{
    minimumAnser=answer2
}
else if(answer3<answer4)
{
    minimumAnser=answer3
}
else
{
    minimumAnser=answer4
}
console.log("Maximum Answer="+maximumAnwer)
console.log("Minimum Answer"+minimumAnser)