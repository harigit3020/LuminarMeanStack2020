var arr=[10,11,23,43,54,20,6]
// var sum=0
// var sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
// for(i=0;i<=4;i++){
//      sum=sum+arr[i];
// }
// for(nums of arr){
//     sum+=nums;
// }
// console.log(sum); //3 methods of find sum of array
// for(nums of arr){
//     if(nums%2==0)
//     {
//         console.log(nums)
//     }
// }
odd=[];
even=[];
for(nums of arr){
    if(nums%2==0){
        even.push(nums);
    }else{
        odd.push(nums);
    }
}
console.log(odd);
console.log(even);