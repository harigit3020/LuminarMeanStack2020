var sminp=[3,1,4,6,5]
var sqarr=[];
var oarr=[];
console.log("Sample Input : "+sminp);
for(num of sminp){
    sqarr.push(num**2);
}
for(num of sqarr){
    for(num1 of sminp){
        for(num2 of sminp){
            if(num1**2+num2**2==num){
                oarr.push(num1,num2,Math.sqrt(num));
                break;  
            }
        }
        break;
    }
}
console.log("Output: "+oarr)
