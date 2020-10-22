//Single and Multilevel inheritance can be done in js
//parent->child
//super->sub
//base->derived
 
//Single inheritance
class Parent{
    bike(){
        console.log("i have bike");
    }
}
class Child extends Parent{

}
var obj=new Child();
obj.bike();