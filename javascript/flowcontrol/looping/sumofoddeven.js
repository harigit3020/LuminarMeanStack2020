var i=1;
var n=50;
var sum=0;
var sum2=0;
while(i<=n)
{
    if(i%2==0)
    {
        sum+=i;
    }else{
        sum2+=i;
    }
    i++;
}
console.log( "sum of even"+sum);
console.log("sum of odd "+sum2);