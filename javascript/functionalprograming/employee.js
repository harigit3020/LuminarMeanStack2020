class Employee {
    constructor(eid, ename, desig, sal) {
        this.eid = eid;
        this.ename = ename;
        this.desig = desig;
        this.sal = sal;
    }
    getEmp = () => {//arrow function
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.sal);

    }

}
var obj1 = new Employee(100, "hari", "mnager", 4000);
// obj1.getEmp();
var obj2 = new Employee(200, "amal", "programmer", 3000);
// obj2.getEmp();
var obj3 = new Employee(300, "manu", "system admin", 5000);
// obj3.getEmp();
var emp=[]; 
emp.push(obj1);
emp.push(obj2);
emp.push(obj3); //Array of objects
console.log(emp)

//employee of salary >3500

for(en of emp){
    if(en.sal>3500){
        console.log(en.ename+"  "+en.sal)
    }
}


//employee of desig as programmer

for(en of emp){
    if(en.desig=="programmer"){
        console.log(en.ename);
    }
}


//student class(roll,name,course,total)
//print student name and id who has total >135
//print all student name  those whose course is bca
//fint sum of student total who have course is bca