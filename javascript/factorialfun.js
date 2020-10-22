function factorial(num)
{
    var fact=1;
    for(i=1;i<=num;i++){
        fact*=i;
    }console.log("factorial of "+num+" is "+fact);
}
factorial(8);