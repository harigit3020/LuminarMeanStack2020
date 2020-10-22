class Student{
    static get collegeName(){ //using get to call from outside of the class
        var colgname="bpS";
        return colgname;
    }
    static printCollegename(){
        var clgname="bpc";
        console.log(clgname);
    }
    setStudent(rol,nam,crse,total){
        this.rollnum=rol;
        this.name=nam;
        this.course=crse;
        this.total=total;
    }
    getStudent(){
        console.log("Name ="+this.name);
        console.log("Roll ="+this.rollnum);
        console.log("Course ="+this.course);
        console.log("Total ="+this.total);
        Student.printCollegename();
    }
}
class MyClass extends Student{}; //creating a dummy class to access static method form outside of class
 var obj=new MyClass();
obj.setStudent(100,"amal","MEAN",200);
obj.getStudent();
 console.log(MyClass.collegeName);
