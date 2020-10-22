var i=0;
var num=532;
var rev=0;
while(num>0)
{
    var dig=num%10;
    rev=dig+(rev*10);
    num=Math.floor(num/10);//123/10=12.3 floor->12
}
console.log(rev)
