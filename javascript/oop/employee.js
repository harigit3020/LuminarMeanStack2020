class Employee{
    constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee(){
        console.log("eid="+this.eid);
        console.log("ename="+this.ename);
    }
}
var emp=new Employee(100,"HARI"); //Invoking constructor
emp.getEmployee();





//Constructor initializing instance varible at the time of object declaration
//Name of constructor should be "constructor"