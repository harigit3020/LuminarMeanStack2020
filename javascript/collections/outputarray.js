var arr1=[4,8,2]
var sum=0;
for(nums of arr1){
    sum+=nums;
}
var oarr=[];
for(num of arr1){
    oarr.push(sum-num);
}
console.log(oarr);