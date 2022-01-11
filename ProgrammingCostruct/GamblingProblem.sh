var money=100
var betAmount=1
var count=0
var winCount=0
while(money!=0 && money!=200)
{
    console.log("The bet is")
var bet = (Math.random()>=0.5)? 1 : 0;
if(bet==1)
{
console.log("Wins!!")
winCount++
}
else
{
    console.log("Lost!!")
    money=money-betAmount
}
    count++
}
console.log("Final amount="+money)
console.log("Number of bets made are "+count+" and number of times won are "+winCount)