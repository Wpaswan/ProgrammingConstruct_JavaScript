
var firstRandomNumber=Math.floor(Math.random()*1000)
console.log(firstRandomNumber)
var secondRandomNumber=Math.floor(Math.random()*1000)
console.log(secondRandomNumber)
var thirdRandomNumber=Math.floor(Math.random()*1000)
console.log(thirdRandomNumber)
var fourthRandomNumber=Math.floor(Math.random()*1000)
console.log(fourthRandomNumber)
var fifthRandomNumber=Math.floor(Math.random()*1000)
console.log(fifthRandomNumber)
var sixthRandomNumber=Math.floor(Math.random()*1000)
console.log(fifthRandomNumber)
if((firstRandomNumber>secondRandomNumber)&&(firstRandomNumber>thirdRandomNumber)&&(firstRandomNumber>fourthRandomNumber)&&(firstRandomNumber>fifthRandomNumber))
{
    console.log(fifthRandomNumber+" is largest!!")
}
else if((secondRandomNumber>thirdRandomNumber)&&(secondRandomNumber>fourthRandomNumber)&&(secondRandomNumber>fifthRandomNumber))
{
    console.log(secondRandomNumber+" is largest!")
}
else if((thirdRandomNumber>fourthRandomNumber)&(thirdRandomNumber>fifthRandomNumber))
{
    console.log(thirdRandomNumber+" is largest!!")
}
else if((fourthRandomNumber>fifthRandomNumber))
{
    console.log(fourthRandomNumber+" is largest!!")
}
else
{
    console.log(fifthRandomNumber+" is largest!!")
}