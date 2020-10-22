var num = [2,1,3,4];
// var sum = 8;
//     for(num1 of num) {
//         for ( num2 of num) {
//             if (num1 + num2 == sum) {
//                 console.log(num1 + " + " + num2+" = "+sum);
//                 break;
//             }
//         }

//     }
   var snum=num.sort((i,j)=>i-j);
   console.log(snum);
low=0;
up=num.length-1
var number=5;
 while(low<up){
    if(snum[low]+snum[up]==number){
        console.log("pairs "+[snum[low],snum[up]]);   
    }else{
        low+=1;
    }
 }