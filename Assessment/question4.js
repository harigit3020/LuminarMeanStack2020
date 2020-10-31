var n=2;
var min=49;
var max=65;
var sq=0;
var oarr=[];
for(i=1;i<Math.sqrt(max);i++){
    sq=i**n;
    if((sq>=min)&&(sq<=max)){
        oarr.push(sq);
    }
}
console.log("(n,min,max)= "+"("+n,min,max+")");
console.log( "Output: "+ oarr);