var arr=[1,2,3,4,5,6,7]
var oarr=arr.map(num=>num>5?num+1:num<5?num-1:num)
console.log(oarr);