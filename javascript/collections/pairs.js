var num = [2,1,3,4];
var snum=num.sort((i,j)=>i-j);
// console.log(snum);
// var sum = 5;
//     for(num1 of num) {
//         for ( num2 of num) {
//             if (num1 + num2 == sum) {
//                 console.log(num1 + " + " + num2+" = "+sum);
//                 break;
//             }
//         }

//     }
  
low=0;
up=num.length-1
var number=5;
var oarr=[];
 while(low<up){
    if(snum[low]+snum[up]==number){
        console.log("pairs "+[snum[low],snum[up]]);
        break;
    }else{
        low+=1;
    }
 }