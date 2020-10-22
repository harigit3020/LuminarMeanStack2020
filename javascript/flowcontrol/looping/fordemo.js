// for(i=4;i>=0;i--)
// {
//     console.log(i);
// }
var num=8;
flag=0;
for(i=2;i<=num/2;i++){
if(num%i==0){
    flag=1;
    break;
}else{
    break;
}
}
if(flag==1){
    console.log("not a prime")
}else{
    console.log("prime")
}
