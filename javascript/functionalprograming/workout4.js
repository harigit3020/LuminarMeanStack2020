class Employee {
    constructor(eid, name, desig, join, resign) {
        this.eid = eid;
        this.name = name;
        this.desig = desig;
        this.join = join;
        this.resign = resign;
    }
}
let obj1 = new Employee(100, "ajay", "develop", 1981, 2003);
let obj2 = new Employee(101, "vijay", "develop", 1992, 2008);
let obj3 = new Employee(102, "bijoy", "design", 1999, 2007);
let obj4 = new Employee(103, "jhon", "design", 1989, 2010);
let obj5 = new Employee(104, "danie", "design", 2009, 2014);
let obj6 = new Employee(105, "lari", "design", 1987, 2010);
let emp = [];
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);
emp.push(obj4);
emp.push(obj5);
emp.push(obj6);
console.log("Employee Name and Designation: ")
var namedesig = emp.map((obj) => obj.name + " : " + obj.desig);
console.log(namedesig);
console.log("Employee whose Designation is a Developer: ")
var deve = emp.filter(obj => obj.desig == "develop");
console.log(deve);
console.log("Employee work on 80's: ");
var info1 = emp.filter(obj => (obj.join > 1980) && (obj.join < 1990) || (obj.resign > 1980) && (obj.resign < 1990));
console.log(info1);
console.log("Employees having more than 9 year of experience: ");
var info2 = emp.filter(obj => (obj.resign - obj.join) >= 9);
console.log(info2);
console.log("Sorted accoring to year of join: ")
var sortemp = emp.sort((obj1, obj2) => obj1.join - obj2.join);
console.log(sortemp);



