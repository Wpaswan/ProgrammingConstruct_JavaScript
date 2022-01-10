"use strict"
const ps=require('prompt-sync')
const prompt=ps();
console.log("1. Feet to Inch 2. Feet to Meter 3. Inch to Feet  4. Meter to Feet");
var choice=parseInt(prompt("Enter your choice"))
switch(choice)
{
    case 1:
        var lengthInFeet=parseInt(prompt("Enter the length in feet"))
        console.log("length in Inches="+12*lengthInFeet)
        break;
        case 2:
            var lengthInfeet1=parseInt(prompt("Enter the length in feet"))
            console.log("length in Meter="+0.3048*lengthInfeet1)
            break;
            case 3:
                var lengthInInch=parseInt(prompt("Enter length in Inches"))
                console.log("length in feet="+lengthInInch/12)
                break;
                case 4:
                    var lengthInMeter=parseInt(prompt("Length in meter"))
                    console.log("length in foot="+3.28084*lengthInMeter)
                    break;
                    default:
                        console.log("Wrong choice!!")
                        break;
}
