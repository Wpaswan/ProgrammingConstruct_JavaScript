
"use strict";

const ps = require('prompt-sync');
const prompt= ps();
var dayFromUser = parseInt(prompt("Enter the day number of the month:"))
var monthFromUser=parseInt(prompt("Enter the month number"))
if((monthFromUser>=3 && monthFromUser<=6)&&(dayFromUser<=31 && dayFromUser >=1))
{
   console.log("True")
}
else if(monthFromUser==3 && dayFromUser>=20 && dayFromUser<=31)
{
    console.log("True")
}
else if(monthFromUser==6 && dayFromUser<=20 && dayFromUser>=1)
{
    console.log("True")
}
else
{
    console.log("False! Please enter date between 20 march and 20 june")
}