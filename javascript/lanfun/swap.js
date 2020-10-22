var num1=10;
var num2=20;
console.log("before" + "num1="+num1);
console.log("before" + "num2="+num2);
// var temp=num1;
// num1=num2;
// num2=temp;
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log("after")
console.log("num1="+num1);
console.log("num2="+num2);

