var arr=[3,4,5,8,9,12];
var oarr=[];
for(nums of arr){
    if(nums>5){
        nums+=1;
    oarr.push(nums);
    }else if(nums<5){
        nums-=1;
        oarr.push(nums);

    }else{
        oarr.push(nums);
    }

}
console.log("Input array "+arr);
console.log("Output array "+oarr);