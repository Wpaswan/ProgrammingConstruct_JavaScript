var headCount=0
var tailCount=0
while(headCount>=11 || tailCount>=11)
{
let CoinToss = (Math.random()>=0.5)? 1 : 0;
if(CoinToss==1)
headCount++
else
tailCount++
}
if(headCount==11)
{
    console.log("Head wins!!")
}
else
{
    console.log("Tail wins!!")
}