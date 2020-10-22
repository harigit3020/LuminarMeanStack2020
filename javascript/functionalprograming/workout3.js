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
let obj1 = new Employee(100, "hari", "manager", 4000);
let obj2 = new Employee(100, "amal", "programer", 5000);
let obj3 = new Employee(100, "akshay", "designer", 4500);
let obj4 = new Employee(100, "manu", "tester",3000);
let obj5 = new Employee(100, "anand", "admin", 3500);
let emp=[];
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);
emp.push(obj4);
emp.push(obj5);
var highemp=emp.filter(obj=>obj.sal==emp.map(obj=>obj.sal).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2));
console.log("Details of employee with highest salary:")
console.log(highemp);
var lowemp=emp.filter(obj=>obj.sal==emp.map(obj=>obj.sal).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2));
console.log("Details of employee with lowest salary:")
console.log(lowemp);
var salsort=emp.map(obj=>obj.sal).sort((obj1,obj2)=>obj1-obj2);
console.log("Salaries in sorted order :")
console.log(salsort)