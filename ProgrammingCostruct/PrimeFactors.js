"use strict"
const ps=require('prompt-sync')
const prompt=ps();
var num=parseInt(prompt("Enter the numbe:"))
var i=0
var isPrime=0
var j=0
console.log("All the prime factors of "+num+"are:")
 /* Find all Prime factors */
 for(i=2; i<=num; i++)
 {
     /* Check 'i' for factor of num */
     if(num%i==0)
     {
         /* Check 'i' for Prime */
         isPrime = 1;
         for(j=2; j<=i/2; j++)
         {
             if(i%j==0)
             {
                 isPrime = 0;
                 break;
             }
         }

         /* If 'i' is Prime number and factor of num */
         if(isPrime==1)
         {
             console.log(i)
         }
        

        }
    }


