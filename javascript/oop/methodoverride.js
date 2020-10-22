class Parent{
    bike(){
        console.log("i have bike");
    }
}
class Child extends Parent{
    bike(){
        console.log("i have duke");
    }

}
var obj=new Child();
obj.bike(); //Second method wil be called, its called method overriding