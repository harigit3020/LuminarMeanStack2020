//Many forms
//Method overloading
//Operator overloading

class Maths{
    add(){
        console.log(10+20);
    }
    add(num1){
        console.log(20+num1);
    }
    add(num1,num2){
        console.log(num1+num2);
    }
}
var obd=new Maths();
obd.add(30,45);
obd.add();//Does'nt work cause in js only recently implimented methods will execute