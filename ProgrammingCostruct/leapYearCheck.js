"use strict";

const ps = require('prompt-sync');
const prompt= ps();
var yearFromUser=parseInt(prompt("Enter any year to check for leap year"))
 // leap year if perfectly divisible by 400
 if (yearFromUser % 400 == 0) {
    console.log(yearFromUser+" is a leap year.");
 }
 // not a leap year if divisible by 100
 // but not divisible by 400
 else if (yearFromUser % 100 == 0) {
    console.log(yearFromUser+" is not a leap year.");
 }
 // leap year if not divisible by 100
 // but divisible by 4
 else if (yearFromUser % 4 == 0) {
    console.log(yearFromUser+" is a leap year.");
 }
 // all other years are not leap years
 else {
    console.log(yearFromUser+" is not a leap year.");
 }