
let i=1
var sum=0
var avg=0
var randomNuber=0
for(i=1;i<=5;i++)
    { 
        randomNuber=Math.floor(Math.random()*100)
        console.log("\nRandom number at "+i+" position="+randomNuber)
        sum=sum+randomNuber
    }
        avg=randomNuber/5
        console.log("\nsum="+sum)
        console.log("\nAverage="+avg)