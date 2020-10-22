//Class is a design pattern
//Object is a real world entity
//Reference functions performed on object
class Person{
    setPerson(ag,nam){
        this.age=ag;
        this.name=nam;
    }
    getPerson(){
        console.log("name :"+this.name);
        console.log("age :"+this.age);  //Methods
    }
}
var obj=new Person();//Reference
obj.setPerson(21,"hari");
obj.getPerson();
var obj1=new Person();
obj1.setPerson(10,"amal");
obj1.getPerson();