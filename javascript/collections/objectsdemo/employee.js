var employee={eid:1000,ename:"hari",desig:"manager"}
console.log(employee);
console.log(employee.ename);
console.log("salary" in employee);
employee["salary"]=2500;
console.log(employee);
employee["salary"]+=2000;
console.log(employee);

for(key in employee){
    console.log(key+" : "+employee[key]) //itreating through object
}
console.log(employee.salary);