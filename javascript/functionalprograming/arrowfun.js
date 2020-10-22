//Also known as Anonymous functions or Lamda functions

sum=(num1,num2)=>num1+num2;  //Don't' need "function" keyword and function name.
console.log("sum="+sum(10,20));
sub=(num1,num2)=>num1-num2;
console.log("Subs="+sub(30,10));
mul=(num1,num2)=>num1*num2;
console.log("mul= "+mul(20,10));
div=(num1,num2)=>num1/num2;
console.log("div= "+div(50,10));
mod=(num1,num2)=>num1%num2;
console.log("mod= "+mod(40,13));

cub=(num1)=>(num1**3);
console.log("cube="+cub(20));