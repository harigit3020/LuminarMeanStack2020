var arr=[1,2,3,4,5,6]
var elm=5;
var flag=0;
var cnt=1;
for(nums of arr){
    if(nums==elm){
        flag=1;
        break;
    }
    cnt++;
}
if(flag==1){
    console.log("found at "+cnt+" posotion");
}else{
    console.log("not found")
}//Linear searching
//Having high complexity