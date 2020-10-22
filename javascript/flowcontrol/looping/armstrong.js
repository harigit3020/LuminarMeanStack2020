var num=153;
var onum=num;
var i=0
var cub=0
var dig=0


while(num!=0)
{
    dig=num%10;
  cub=cub+dig**3;
    num=Math.floor(num/10);
}
console.log(cub)
if(cub==onum)
{
    console.log(onum+" is an armstrong number")
}else{
    console.log("not an armstrong")
}
