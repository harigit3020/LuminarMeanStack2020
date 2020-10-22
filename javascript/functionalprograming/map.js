var arr=[1,2,3,4,5,6]
// var oarr=[];
// for(nums of arr){
//     oarr.push(nums**2);
// }
// console.log(oarr);

//Map() -> If we have to genarate result of each input correspondingly.
//Filter() -> otherwise.

// sqr=(num1)=>num1**2; //if function name as argument.
var sqrs=arr.map(num1=>num1**2); 
console.log(sqrs);


var even=arr.filter(num1=>num1%2==0);
console.log(even);


var names=["hari","amal","anu","sanoop","manu","jobin"];
//convert into uppercase
//fetch name starts with a

var cap=names.map(nam=>nam.toUpperCase());
console.log(cap);

var namea=names.filter(nam=>nam.charAt(0)=="a");
console.log(namea);

//Reduce -> Fetch a single value of result form a collection of data eg: largest amoung..,smallest amoung..,total of..

var nums=[1,2,3,4,5,6,7]
var total=arr.reduce((num1,num2)=>num1+num2);
console.log(total);
var hig=arr.reduce((num1,num2)=>num1>num2?num1:num2) //Ternary operation
console.log(hig)